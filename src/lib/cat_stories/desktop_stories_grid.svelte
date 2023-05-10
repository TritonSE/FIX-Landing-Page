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

  function closeCatOverlay() {
    openOverlayIndex = -1;
  }

  function openCatOverlay(index: number) {
    openOverlayIndex = index;
  }
</script>

<div class="stories-container">
  <div class="cat-image-container">
    <CatImage
      image_url="{base}/cat_stories/shadow.avif"
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
        image_url="{base}/cat_stories/close_up_cropped.avif"
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
        image_url="{base}/cat_stories/almira_cropped.avif"
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
    padding-top: 80px;
  }

  .cat-image-container {
    position: relative;
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

  .medium-margin-above {
    margin-top: 36px;
  }

  .large-gap {
    gap: 35px;
  }

  @media screen and (max-width: 900px) {
    p {
      font-size: 12px;
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
</style>
