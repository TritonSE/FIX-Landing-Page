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
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cats who used to roam the outdoors. FixNation found us!</h2>
  {#if windowWidth <= 600}
    <MobileStoriesCarousel />
  {:else}
    <DesktopStoriesGrid />
  {/if}
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }

  h2 {
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

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 12px;
    }

    .root {
      padding: 40px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }

    .root {
      padding: 0;
    }
  }
</style>
