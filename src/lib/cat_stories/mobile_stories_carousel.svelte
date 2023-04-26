<!--
  mobile_stories_carousel.svelte:
    Cat stories carousel for mobile.
-->
<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import CarouselItem from './carousel_item.svelte';

  import { CAT_DATA } from './constants';

  /**
   * A bound reference to the container of the carousel items
   */
  let carouselContainer: HTMLElement;

  /** 
 * An object containing all items in the carousel (for mobile), used to
 * easily access each item. Keys are strings consiting of [catName]-[carouselIndex],
 and values are references to root nodes of carousel item components.
 */
  let carouselItems: Record<string, HTMLElement> = {};

  /**
   * An object containing the applied scale transforms to each carousel item, used to
   * easily access and modify each node's scale to scale up the item in the middle of
   * the screen. Keys are formatted the same way as the keys of "carouselItems", and
   * values are numeric scale transforms to apply to each item.
   */
  let nodeTransforms: Record<string, number> = {};

  /**
   * The previous "scrollLeft" value of the carousel container, from the last time
   * the container was scrolled. Used in scroll listener to determine the scroll speed
   * and direction of the container.
   */
  let lastScrollLeft: number | null = null;

  /**
   * Timestamp in milliseconds of the last time the carousel items were wrapped around.
   * Used to limit the rate of wrap-arounds.
   */
  let lastWrapTimestampMS = 0;

  /**
   * The timeout (time delay) set to wrap the carousel items around. The purpose
   *  of the delay is to wait for the scrolling or auto-snapping to naturally finish
   *  before wrapping, providing a smoother UX.
   */
  let wrapTimeout: number | null = null;

  /**
   * The timeout set to check if the carousel container is finished scrolling,
   * and wrap it if it is.
   */
  let periodicWrapCheckTimeout: number | null = null;

  /**
   * The scrollLeft of the carousel container the last time the periodic wrap
   * check was called. Compared from one call to the next to determine when the
   * difference is 0, meaning the container is done with its natural
   * snapping/scrolling and can be wrapped.
   */
  let lastWrapCheckScrollLeft: number | null = null;

  /**
   * Checks whether the carousel container is finished moving, and if it is,
   * wrap it around.
   *
   *  @param wrapCallback Callback function to wrap the container, called once
   *  the movement is finished
   */
  function wrapIfNotMoving(wrapCallback: () => void) {
    if (
      lastWrapCheckScrollLeft !== null &&
      carouselContainer !== null &&
      carouselContainer.scrollLeft === lastWrapCheckScrollLeft
    ) {
      if (periodicWrapCheckTimeout) {
        clearTimeout(periodicWrapCheckTimeout);
      }
      wrapCallback();
    } else {
      periodicWrapCheckTimeout = setTimeout(() => wrapIfNotMoving(wrapCallback), 50);
    }
    lastWrapCheckScrollLeft = carouselContainer.scrollLeft;
  }

  /**
   * Calculates the scale that should be applied to a given carousel item,
   * in order to scale the items proportionally to how close they are to the center.
   *
   * @param carouselItem The item to calculate the scale for
   * @param containerCenterX The x-coordinate of the container's center on the screen
   * @return The scale, as a number, to apply to the given item
   */
  function calculateCarouselItemScale(carouselItem: HTMLElement, containerCenterX: number) {
    const rect = carouselItem.getBoundingClientRect();
    const val = Math.pow(
      Math.cos(
        ((Math.PI / 2) * (rect.left + rect.width / 2 - containerCenterX) * 0.4) / containerCenterX
      ),
      containerCenterX <= 250 ? 1 : 2
    );
    const clamp = Math.max(0.75, Math.min(1, val));
    return clamp;
  }

  /**
   * Scales all the carousel items vertically by applying a scale transform to their styles.
   *
   * @param childNodes An array of child nodes of the carousel item container
   * @param containerCenterX The x-coordinate of the container's center on the screen
   */
  function scaleCarouselItems(childNodes, containerCenterX: number) {
    childNodes.forEach((_childNode) => {
      const childNode = _childNode as HTMLElement;
      if (childNode.childNodes.length > 0 && (childNode.childNodes[0] as HTMLElement).style) {
        (childNode.childNodes[0] as HTMLElement).style.transform = 'scale(1)';
        childNode.offsetHeight;
        const clamp = calculateCarouselItemScale(childNode, containerCenterX);
        nodeTransforms[childNode.id] = clamp;
        (childNode.childNodes[0] as HTMLElement).style.transform = `scale(${clamp})`;
      }
    });
  }

  /**
   * Determines which child of an element has the greatest scale, and is therefore the largest
   *
   * @param parent The parent element
   * @return A refernece to the child node that is the largest
   */
  function getLargestChild(parent: HTMLElement) {
    let largest: HTMLElement | null = null;
    for (const child of parent.childNodes) {
      if (
        child.childNodes?.length > 0 &&
        (child.childNodes[0] as HTMLElement).style &&
        (largest === null || nodeTransforms[(child as HTMLElement).id] > nodeTransforms[largest.id])
      ) {
        largest = child as HTMLElement;
      }
    }
    return largest;
  }

  /** Determines the cat name and carousel item index of a given carousel item
   *
   * @param carouselItem The item to get the name and index of
   * @return An array containing the cat name (string), followed by carousel index (number)
   */
  function extractNameAndIndexFromId(carouselItem: HTMLElement): [string, number] {
    const [name, index] = carouselItem.id.split('-');
    return [name, parseInt(index)];
  }

  /**
   * Determines the ID of a carousel item based on the cat name and index.
   * This way, an ID uniquely identifies one of the 9 items.
   *
   * @param name The name of the cat for this item
   * @param index The index of the set of items this item is in
   *
   * @return The ID for this item
   */
  function getIdFromNameAndIndex(name: string, index: number) {
    return `${name}-${index}`;
  }

  /**
   * Gets the immediate neighbor of a given carousel item node in a given direction
   *
   * @param parent The parent node (carousel items container)
   * @param child The child node (carousel item)
   * @param next Whether to get the next item, i.e. immediately to the right (if true)
   * or previous item, i.e. immediately to the left (if false)
   *
   * @return The immediate neighbor of the carousel item node in the given direction
   */
  function getNeighboringNode(parent: HTMLElement, child: HTMLElement, next: boolean) {
    const [childName, childIndex] = extractNameAndIndexFromId(child);
    const neighborId = getIdFromNameAndIndex(childName, (childIndex + (next ? 1 : 2)) % 3);
    return carouselItems[neighborId];
  }

  /**
   * Calculates the horizontal distance, in pixels, between 2 nodes. Returns a positive distance
   * if node 1 is farther right, and negative if node 2 is farther right
   * @param node1 The first node
   * @param node2 The second node
   *
   * @return The distance from node 2 to node 1
   */
  function calculateXDistanceBetweenNodes(node1: HTMLElement, node2: HTMLElement) {
    const rect1 = node1.getBoundingClientRect();
    const rect2 = node2.getBoundingClientRect();
    const center1 = rect1.x + rect1.width / 2;
    const center2 = rect2.x + rect2.width / 2;
    return center1 - center2;
  }

  /**
   * Scroll listener for when the carousel container is scrolled. Does the following:
   * 1. If the container is near the left or right end, and almost done scrolling,
   * wraps it around to produce an infinite scroll effect
   * 2. Scales all items in the carousel proportional to their proximity to the center of the screen
   */
  function handleCarouselContainerScrollontainer(e: Event) {
    if (!e.target) return;
    let { scrollWidth, clientWidth, scrollLeft, childNodes } = e.target as HTMLDivElement;
    const center = clientWidth / 2;
    const currTimestampMS = new Date().getTime();

    if (
      lastScrollLeft !== null &&
      Math.abs(scrollLeft - lastScrollLeft) < 4 &&
      currTimestampMS - lastWrapTimestampMS >= 1000
    ) {
      const largestChild = getLargestChild(e.target as HTMLElement);
      if (clientWidth + scrollLeft + 200 > (2 / 3) * scrollWidth) {
        // At far right of scoll container, scrolling right
        lastWrapTimestampMS = currTimestampMS;
        clearTimeout(wrapTimeout);

        let xToScrollTo =
          scrollLeft +
          calculateXDistanceBetweenNodes(
            getNeighboringNode(e.target as HTMLElement, largestChild as HTMLElement, false),
            largestChild as HTMLElement
          );
        if (xToScrollTo > scrollWidth) {
          xToScrollTo -= scrollWidth;
        }
        if (xToScrollTo < 0) {
          xToScrollTo += scrollWidth;
        }
        wrapTimeout = setTimeout(() => {
          wrapIfNotMoving(() => (e.target as HTMLDivElement).scrollTo({ left: xToScrollTo }));
        }, 50);
      } else if (scrollLeft < 400) {
        // At far left of scroll container, scrolling left
        lastWrapTimestampMS = currTimestampMS;
        clearTimeout(wrapTimeout);
        let xToScrollTo =
          scrollLeft +
          calculateXDistanceBetweenNodes(
            getNeighboringNode(e.target as HTMLElement, largestChild as HTMLElement, true),
            largestChild as HTMLElement
          );
        if (xToScrollTo > scrollWidth) {
          xToScrollTo -= scrollWidth;
        }
        if (xToScrollTo < 0) {
          xToScrollTo += scrollWidth;
        }
        wrapTimeout = setTimeout(() => {
          wrapIfNotMoving(() => (e.target as HTMLDivElement).scrollTo({ left: xToScrollTo }));
        }, 50);
      }
    }

    scaleCarouselItems(childNodes, center);

    lastScrollLeft = scrollLeft;
  }

  onMount(() => {
    if (carouselContainer) {
      carouselContainer.addEventListener('scroll', handleCarouselContainerScrollontainer, {
        passive: true
      });
      carouselContainer.scrollBy({
        left: carouselContainer.scrollWidth / 4 - carouselContainer.clientWidth / 2
      });
    }
  });

  onDestroy(() => {
    if (carouselContainer) {
      carouselContainer.removeEventListener('scroll', handleCarouselContainerScrollontainer, {
        passive: true
      });
    }
  });
</script>

<div class="stories-container" bind:this={carouselContainer}>
  <!-- Repeat carousel items for wrap-around scrolling -->
  {#each new Array(3) as _, index}
    {#each CAT_DATA as catData}
      <CarouselItem {catData} {index} {carouselItems} />
    {/each}
  {/each}
</div>

<style>
  .stories-container {
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    gap: 20px;
    padding-top: 16px;
    scroll-snap-type: x mandatory;
  }

  .stories-container::-webkit-scrollbar {
    display: none;
  }
</style>
