<!--
  desktop_stories_grid.svelte:
    Grid display of cat stories for desktop & tablet.
-->
<script lang="ts">
  import { base } from '$app/paths';
  import CatImage from './cat_image.svelte';
  import CatOverlay from './cat_overlay.svelte';
  import { CAT_DATA } from './constants';
  import Paw from './paw.svelte';

  /**
   * Index of the carousel item for which the overlay should be open.
   * -1 if the overlay is not open.
   * Only used on desktop and tablet, not mobile.
   */
  let openOverlayIndex = -1;

  let middleIndex = Math.floor(CAT_DATA.length / 2);

  function closeCatOverlay() {
    openOverlayIndex = -1;
  }

  function openCatOverlay(index: number) {
    openOverlayIndex = index;
  }

  const n_backgrounds = 4;
  let index = 0;
  const next = () => {
    index = (index + 1) % n_backgrounds;
    setTimeout(next, 5000);
  };
  next();
</script>

<div class="stories-container">
  {#each CAT_DATA as data, j}
    <div class="cat-image-container">
      {#each new Array(n_backgrounds) as _, i}
        {#if index === i}
          <CatImage
            image_url={data['image_path' + i]}
            image_alt="Cat Image"
            on:click={() => openCatOverlay(j)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                openCatOverlay(j);
              }
            }}
          />
        {/if}
      {/each}
    </div>
    <div class="column">
      <Paw name={data.name} />
      <p class="medium-margin-above">
        {data.desc}
      </p>
      <button
        class="read-more-button"
        on:click={() => openCatOverlay(j)}
        on:keydown={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            openCatOverlay(j);
          }
        }}
      >
        <img src="{base}\cat_stories\insta-white.png" alt="insta icon" />
        Read More!
      </button>
    </div>
  {/each}
</div>

<CatOverlay
  data={CAT_DATA[openOverlayIndex]}
  open={openOverlayIndex !== -1}
  onClose={closeCatOverlay}
/>

<style>
  p {
    margin: 0;
  }

  .stories-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    padding: 0;
    height: 180vw;
    align-items: center;
  }

  .cat-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  }

  .read-more-button {
    color: var(--color-white);
    background: #58c3af;
    font-size: 12px;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
    border-radius: 0.3rem;
    width: 6.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  .read-more-button:active {
    color: var(--color-black);
  }

  .column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  .medium-margin-above {
    margin-top: 36px;
  }

  .large-gap {
    gap: 35px;
  }

  @media screen and (max-width: 990px) {
    p {
      font-size: 12px;
    }

    .stories-container {
      padding-top: 40px;
      height: 160vw;
    }

    .medium-margin-above {
      margin-top: 16px;
    }

    .large-gap {
      gap: 24px;
    }
  }
</style>
