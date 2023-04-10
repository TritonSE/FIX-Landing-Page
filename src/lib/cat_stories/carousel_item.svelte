<script lang="ts">
  import CatImage from './cat_image.svelte';
  import Paw from './paw.svelte';
  import type { CatData } from './types';

  import { base } from '$app/paths';

  export let catData: CatData;
  export let index: number;
</script>

<div class="wrapper" id="{catData.name}-{index}">
  <div class="column large-gap">
    <div class="cat-image-container">
      <CatImage image_url={catData.mobile_image_path} image_alt={catData.name} />
      <a href={catData.ig_link}>
        <img
          src="{base}/cat_stories/instagram_white.svg"
          alt="Instagram Logo"
          class="instagram-logo"
        />
      </a>
    </div>
    <div class="row">
      <div class="column">
        <Paw name={catData.name} />
        <p>
          {catData.desc}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  p {
    margin: 0;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .cat-image-container {
    position: relative;
  }

  .instagram-logo {
    position: absolute;
    right: 18px;
    bottom: 18px;
  }

  .wrapper {
    min-width: calc(100vw - 165px);
    scroll-snap-align: center;
  }

  .large-gap {
    gap: 24px;
    /*transform: scale(calc(max(0.5, 0)));*/
  }
</style>
