<!--
  index.svelte:
    Cat stories entrypoint.
-->
<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import { base } from '$app/paths';

  import CatImage from './cat_image.svelte';
  import Paw from './paw.svelte';
  import CatOverlay from './cat_overlay.svelte';
  import CarouselItem from './carousel_item.svelte';

  import type { CatData } from './types.ts';

  /**
   * Data about each cat to display
   */
  const CAT_DATA: CatData = [
    {
      name: 'Shadow',
      desc: 'I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident mouser. I came to FixNation for spay surgery and was returned the next day to my home turf, where I’m back to patrolling the aisles of the garden center and making customers smile. I’ve been told I’m an excellent example of a healthy and thriving working cat.',
      abbrev_len: Infinity,
      ig_link: 'https://www.instagram.com/shadowthehomedepotcat_/?hl=en',
      ig_username: 'shadowthehomedepotcat_',
      n_followers: 295,
      image_path: `${base}/cat_stories/shadow.png`,
      mobile_image_path: `${base}/cat_stories/shadow_mobile.png`
    },
    {
      name: 'Close Up',
      desc: 'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery came to FixNation years ago and asked them to spay and neuter all the community cats living on the grounds. Pretty cool right? FixNation still provides these services. ',
      abbrev_len: 1412,
      ig_link: 'https://www.instagram.com/closeupthecemeterycat/?hl=en',
      ig_username: 'closeupthecemeterycat',
      n_followers: 9873,
      image_path: `${base}/cat_stories/close_up_full.png`,
      mobile_image_path: `${base}/cat_stories/close_up_mobile.png`
    },
    {
      name: 'Almira',
      desc: 'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has sterilized a number of the Disneyland Cats living within the famous theme park and resort. We’ve all been TNR’d and are now looked after by their own team of caregivers.',
      abbrev_len: 135,
      ig_link: 'https://www.instagram.com/disneylandcats/?hl=en',
      ig_username: 'disneylandcats',
      n_followers: 110000,
      image_path: `${base}/cat_stories/almira_full.png`,
      mobile_image_path: `${base}/cat_stories/almira_mobile.png`
    }
  ];

  let windowWidth = 0;

  /**
   * Index of the carousel item for which the overlay should be open. Is -1 if the overlay is not open.
   * Only used on desktop and tablet, not mobile.
   */
  let openOverlayIndex = -1;

  function closeCatOverlay() {
    openOverlayIndex = -1;
  }

  function openCatOverlay(index: number) {
    openOverlayIndex = index;
  }

  /** Mobile carousel state variables & functions */

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
   * easily access and modify each node's scale to scale up the item in the middle of the screen.
   * Keys are formatted the same way as the keys of "carouselItems", and values are numeric scale transforms to apply to each item.
   */
  let nodeTransforms: Record<string, number> = {};

  /**
   * The previous "scrollLeft" value of the carousel container, from the last time
   * the container was scrolled. Used in scroll listener to determine scroll speed & direction of container.
   */
  let lastScrollLeft: number | null = null;

  /**
   * Timestamp in milliseconds of the last time the carousel items were wrapped around.
   * Used to limit the rate of wrap-arounds.
   */
  let lastWrapTimestampMS = 0;

  /**
   * The timeout (time delay) set to wrap the carousel items around. The purpose of the delay is
   * to wait for the scrolling or auto-snapping to naturally finish before wrapping, providing a smoother UX.
   */
  let wrapTimeout = null;

  /**
   * The timeout set to check if the carousel container is finished scrolling, and wrap it if it is.
   */
  let periodicWrapCheckTimeout = null;

  /**
   * The scrollLeft of the carousel container the last time the periodic wrap check was called.
   * Compared from one call to the next to determine when the difference is 0, meaning the container
   * is done with its natural snapping/scrolling and can be wrapped.
   */
  let lastWrapCheckScrollLeft: number | null = null;

  /**
   * Checks whether the carousel container is finished moving, and if it is, wrap it around.
   *
   *  @param wrapCallback Callback function to wrap the container, called once the movement is finished
   */
  function wrapIfNotMoving(wrapCallback: () => void) {
    if (
      lastWrapCheckScrollLeft !== null &&
      carouselContainer !== null &&
      carouselContainer.scrollLeft === lastWrapCheckScrollLeft
    ) {
      clearTimeout(periodicWrapCheckTimeout);
      wrapCallback();
    } else {
      periodicWrapCheckTimeout = setTimeout(() => wrapIfNotMoving(wrapCallback), 50);
    }
    lastWrapCheckScrollLeft = carouselContainer.scrollLeft;
  }

  /**
   * Calculates the scale that should be applied to a given carousel item, in order to scale the items proportionally to how close they are to the center.
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
  function scaleCarouselItems(childNodes, containerCenterX) {
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
        (child.childNodes?.length > 0 && (child.childNodes[0] as HTMLElement)).style &&
        (largest === null || nodeTransforms[child.id] > nodeTransforms[largest.id])
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
  function extractNameAndIndexFromId(carouselItem: HTMLElement) {
    return carouselItem.id.split('-');
  }

  /**
   * Determines the ID of a carousel item based on the cat name and index. This way, an ID uniquely identifies one of the 9 items.
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
   * @param next Whether to get the next item, i.e. immediately to the right (if true) or previous item, i.e. immediately to the left (if false)
   *
   * @return The immediate neighbor of the carousel item node in the given direction
   */
  function getNeighboringNode(parent: HTMLElement, child: HTMLElement, next: boolean) {
    const [childName, childIndex] = extractNameAndIndexFromId(child);
    const neighborId = getIdFromNameAndIndex(childName, (childIndex + (next ? 1 : 2)) % 3);
    return carouselItems[neighborId];
  }

  /**
   * Calculates the horizontal distance, in pixels, between 2 nodes. Returns a positive distance if node 1 is farther right, and negative if node 2 is farther right
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
   * 1. If the container is near the left or right end, and almost done scrolling, wraps it around to produce an infinite scroll effect
   * 2. Scales all items in the carousel proportional to their proximity to the center of the screen
   */
  function handleCarouselContainerScrollontainer(e: Event) {
    if (!e.target) return;
    let { scrollWidth, clientWidth, scrollLeft, childNodes } = e.target as HTMLDivElement;
    const center = clientWidth / 2;
    const currTimestampMS = new Date().getTime();

    const scrollSpeed = scrollLeft - lastScrollLeft;
    if (Math.abs(scrollSpeed) < 4 && currTimestampMS - lastWrapTimestampMS >= 1000) {
      const largestChild = getLargestChild(e.target);
      if (clientWidth + scrollLeft + 200 > (2 / 3) * scrollWidth) {
        // At far right of scoll container, scrolling right
        lastWrapTimestampMS = currTimestampMS;
        clearTimeout(wrapTimeout);

        let xToScrollTo =
          scrollLeft +
          calculateXDistanceBetweenNodes(
            getNeighboringNode(e.target, largestChild, false),
            largestChild
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
            getNeighboringNode(e.target, largestChild, true),
            largestChild
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

<svelte:window bind:innerWidth={windowWidth} />

<div class="root">
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h2>
  <div class="stories-container" bind:this={carouselContainer}>
    {#if windowWidth <= 600}
      <!-- Repeat carousel items for wrap-around scrolling -->
      {#each new Array(3) as _, index}
        {#each CAT_DATA as catData}
          <CarouselItem {catData} {index} {carouselItems} />
        {/each}
      {/each}
    {:else}
      <div class="cat-image-container">
        <CatImage
          image_url="{base}/cat_stories/shadow.png"
          image_alt="Shadow"
          on:click={() => openCatOverlay(0)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              openCatOverlay(0);
            }
          }}
        />
      </div>
      <div class="column">
        <Paw name={CAT_DATA[0].name} />
        <p class="medium-margin-above">
          {CAT_DATA[0].desc}
        </p>
        <button
          class="underline-text"
          on:click={() => openCatOverlay(0)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              openCatOverlay(0);
            }
          }}
        >
          See more
        </button>
      </div>
      <div class="column large-gap">
        <div class="cat-image-container">
          <CatImage
            image_url="{base}/cat_stories/close_up_cropped.png"
            image_alt="Close Up"
            on:click={() => openCatOverlay(1)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                openCatOverlay(1);
              }
            }}
          />
        </div>
        <div class="row">
          <Paw name={CAT_DATA[1].name} />
          <div class="column">
            <p>
              {CAT_DATA[1].desc.substring(0, CAT_DATA[1].abbrev_len)}
            </p>
            <button
              class="underline-text"
              on:click={() => openCatOverlay(1)}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') {
                  openCatOverlay(1);
                }
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div class="column large-gap">
        <div class="cat-image-container">
          <CatImage
            image_url="{base}/cat_stories/almira_cropped.png"
            image_alt="Almira"
            on:click={() => openCatOverlay(2)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                openCatOverlay(2);
              }
            }}
          />
        </div>
        <div class="row">
          <Paw name={CAT_DATA[2].name} />
          <div class="column">
            <p>
              {CAT_DATA[2].desc.substring(0, CAT_DATA[2].abbrev_len)}
            </p>
            <button
              href="javascript:void(0)"
              class="underline-text"
              on:click={() => openCatOverlay(2)}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') {
                  openCatOverlay(2);
                }
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <CatOverlay
    data={CAT_DATA[openOverlayIndex]}
    open={openOverlayIndex !== -1}
    onClose={closeCatOverlay}
  />
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-family: 'Avenir', sans-serif !important;
    font-size: 24px;
    font-weight: normal;
  }

  .root {
    padding: 40px 12% 80px 12%;
    padding-bottom: 90px;
    background-color: var(--color-gray);
  }

  .stories-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    padding-top: 80px;
  }

  .cat-image-container {
    position: relative;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .large-gap {
    gap: 35px;
  }

  .medium-margin-above {
    margin-top: 36px;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .underline-text {
    color: var(--color-black);
    background: transparent;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-align: left;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
  .underline-text:active {
    color: var(--color-black);
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }

    .root {
      padding: 40px;
    }

    .stories-container {
      padding-top: 40px;
      gap: 65px;
    }

    .medium-margin-above {
      margin-top: 16px;
    }

    .large-gap {
      gap: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }

    .root {
      padding: 0;
    }

    .stories-container {
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
  }
</style>
