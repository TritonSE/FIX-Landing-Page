<script>
  import CatImage from './cat_image.svelte';
  import Paw from './paw.svelte';
  import CatOverlay from './cat_overlay.svelte';

  const CAT_DATA = [
    {
      name: 'Shadow',
      desc_abbreviated:
        'I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident mouser. I came to FixNation for spay surgery and was returned the next day to my home turf, where I’m back to patrolling the aisles of the garden center and making customers smile. I’ve been told I’m an excellent example of a healthy and thriving working cat.',
      desc_full:
        'I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident mouser. I came to FixNation for spay surgery and was returned the next day to my home turf, where I’m back to patrolling the aisles of the garden center and making customers smile. I’ve been told I’m an excellent example of a healthy and thriving working cat.',
      ig_link: 'https://www.instagram.com/shadowthehomedepotcat_/?hl=en',
      ig_username: 'shadowthehomedepotcat_',
      n_followers: 295
    },
    {
      name: 'Close Up',
      desc_abbreviated:
        'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery...',
      desc_full:
        'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery came to FixNation years ago and asked them to spay and neuter all the community cats living on the grounds. Pretty cool right? FixNation still provides these services. ',
      ig_link: 'https://www.instagram.com/closeupthecemeterycat/?hl=en',
      ig_username: 'closeupthecemeterycat',
      n_followers: 9873
    },
    {
      name: 'Almira',
      desc_abbreviated:
        'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has...',
      desc_full:
        'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has sterilized a number of the Disneyland Cats living within the famous theme park and resort. We’ve all been TNR’d and are now looked after by their own team of caregivers.',
      ig_link: 'https://www.instagram.com/disneylandcats/?hl=en',
      ig_username: 'disneylandcats',
      n_followers: 110000
    }
  ];

  let windowWidth = 0;

  let openOverlayIndex = -1;

  function closeCatOverlay() {
    openOverlayIndex = -1;
  }

  function openCatOverlay(index) {
    openOverlayIndex = index;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="root">
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h2>
  <div class="stories-grid">
    <div class="cat-image-container">
      <CatImage image_url="/cat_stories/shadow.png" image_alt="Shadow" />
      {#if windowWidth <= 600}
        <Paw name={CAT_DATA[0].name} />
        <a href={CAT_DATA[0].ig_link}>
          <img src="/cat_stories/instagram_white.svg" alt="Instagram Logo" class="instagram-logo" />
        </a>
      {/if}
    </div>
    <div class="column">
      {#if windowWidth > 600}<Paw name={CAT_DATA[0].name} />{/if}
      <p class="medium-margin-above">
        {CAT_DATA[0].desc_full}
      </p>
      {#if windowWidth > 600}
        <p class="underline-text" on:click={() => openCatOverlay(0)}>See more</p>
      {/if}
    </div>
    <div class="column large-gap">
      <div class="cat-image-container">
        {#if windowWidth <= 600}
          <CatImage image_url="/cat_stories/close_up_full.png" image_alt="Close Up" />
          <Paw name={CAT_DATA[1].name} />
          <a href={CAT_DATA[1].ig_link}>
            <img
              src="/cat_stories/instagram_white.svg"
              alt="Instagram Logo"
              class="instagram-logo"
            />
          </a>
        {:else}
          <CatImage image_url="/cat_stories/close_up_cropped.png" image_alt="Close Up" />
        {/if}
      </div>
      <div class="row">
        {#if windowWidth > 600}
          <Paw name={CAT_DATA[1].name} />
        {/if}
        <div class="column">
          {#if windowWidth > 600}
            <p>
              {CAT_DATA[1].desc_abbreviated}
            </p>
            <p class="underline-text" on:click={() => openCatOverlay(1)}>See more</p>
          {:else}
            <p>
              {CAT_DATA[1].desc_full}
            </p>
          {/if}
        </div>
      </div>
    </div>
    <div class="column large-gap">
      <div class="cat-image-container">
        {#if windowWidth <= 600}
          <CatImage image_url="/cat_stories/almira_full.png" image_alt="Almira" />
          <Paw name={CAT_DATA[2].name} />
          <a href={CAT_DATA[2].ig_link}>
            <img
              src="/cat_stories/instagram_white.svg"
              alt="Instagram Logo"
              class="instagram-logo"
            />
          </a>
        {:else}
          <CatImage image_url="/cat_stories/almira_cropped.png" image_alt="Almira" />
        {/if}
      </div>
      <div class="row">
        {#if windowWidth > 600}
          <Paw name={CAT_DATA[2].name} />
        {/if}
        <div class="column">
          {#if windowWidth > 600}
            <p>
              {CAT_DATA[2].desc_abbreviated}
            </p>
            <p class="underline-text" on:click={() => openCatOverlay(2)}>See more</p>
          {:else}
            <p>
              {CAT_DATA[2].desc_full}
            </p>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <CatOverlay
    open={openOverlayIndex !== -1}
    onClose={closeCatOverlay}
    catData={CAT_DATA[openOverlayIndex]}
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

  .stories-grid {
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
    text-decoration-line: underline;
  }

  p.underline-text:hover {
    cursor: pointer;
  }

  .instagram-logo {
    position: absolute;
    right: 18px;
    bottom: 18px;
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

    .stories-grid {
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
      padding: 16px;
    }

    .stories-grid {
      grid-template-columns: 100%;
      gap: 40px;
      padding-top: 16px;
    }

    .medium-margin-above {
      margin-top: -16px;
    }
  }
</style>
