<!--
  index.svelte:
    Cat stories entrypoint.
-->
<script lang="ts">
  import DesktopStoriesGrid from './desktop_stories_grid.svelte';
  import MobileStoriesCarousel from './mobile_stories_carousel.svelte';

  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="root">
  <h2>Community Cats</h2>
  <h4>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h4>
  {#if windowWidth <= 600}
    <MobileStoriesCarousel />
  {:else}
    <DesktopStoriesGrid />
  {/if}
</div>

<style>
  h2,
  h4 {
    text-align: center;
  }

  h4 {
    margin: 0;
    font-family: 'Avenir', sans-serif !important;
    font-weight: normal;
  }
  .root {
    padding: 40px 12% 80px 12%;
    padding-bottom: 90px;
    background-color: var(--color-gray);
  }

  @media screen and (max-width: 900px) {
    .root {
      padding: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    .root {
      padding: 0;
    }
  }
</style>
