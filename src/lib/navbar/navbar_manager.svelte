<!--
  navbar_manager.svelte: 
    Manages the scrolling, percentage, and step logic for the navigation bar, wrapping the NavbarDisplay component.
-->

<script>
  import { onDestroy, onMount } from 'svelte';
  import NavbarDisplay from './navbar_display.svelte';

  /**
   * Total number of steps (cat faces)
   */
  const NUM_STEPS = 5;

  /**
   * Width in pixels of each cat face image, used to offset the percentage and ensure the faces stay onscreen
   */
  const FACE_WIDTH = 88;

  /**
   * Current step (which cat face to display, based on how far scrolled the user is)
   */
  let step = 1;

  /**
   * The user's current percentage (0 to 100) scrolled through the website
   */
  let scrollPercentage = 0;

  /**
   * How much to offset the scroll percentage by to ensure the cat face doesn't go off the left/right edges
   */
  let faceOffset = 0;

  const onScroll = () => {
    // Calculate total height based on page height
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Adjust total height since the cat face has a range of 100vw - 2 * FACE_WIDTH, not just 100vw
    totalHeight += (FACE_WIDTH * totalHeight) / window.innerWidth;

    // Calculate scroll percentage, using face offset
    scrollPercentage = (window.scrollY / totalHeight + faceOffset) * 100;

    // Calculate current step based on scroll percentage
    step = Math.floor((window.scrollY / totalHeight) * NUM_STEPS) + 1;
  };

  onMount(() => {
    // Initialize scroll percentage with face offset so the cat's face is visible rather than off the left edge
    scrollPercentage = (FACE_WIDTH / 2 / window.innerWidth) * 100;

    // Initialize face offset so it doesn't have to be recalculated on each scroll
    faceOffset = FACE_WIDTH / window.innerWidth / 2;

    document.addEventListener('scroll', onScroll, {
      passive: true
    });
  });

  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('scroll', onScroll);
    }
  });
</script>

<NavbarDisplay {step} {scrollPercentage} />
