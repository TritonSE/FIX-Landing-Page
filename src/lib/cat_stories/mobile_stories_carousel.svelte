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
   * Scroll listener for when the carousel container is scrolled. Does the following:
   * 1. If the container is near the left or right end, and almost done scrolling,
   * wraps it around to produce an infinite scroll effect
   * 2. Scales all items in the carousel proportional to their proximity to the center of the screen
   */
  function handleCarouselContainerScrollontainer(e: Event) {
    if (!e.target) return;
    let { scrollWidth, clientWidth, scrollLeft } = e.target as HTMLDivElement;

    if (clientWidth + scrollLeft + 100 > (2 / 3) * scrollWidth) {
      // At far right of scoll container, scrolling right
      (e.target as HTMLDivElement).scrollBy({ left: -scrollWidth / 3 });
    } else if (scrollLeft < 100) {
      // At far left of scroll container, scrolling left
      (e.target as HTMLDivElement).scrollBy({ left: scrollWidth / 3 });
    }
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
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    gap: 20px;
    padding-top: 16px;
    scroll-snap-type: x mandatory;
    margin-bottom: 2rem;
  }

  .stories-container::-webkit-scrollbar {
    display: none;
  }
</style>
