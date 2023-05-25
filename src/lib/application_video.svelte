<script>
  import { base } from '$app/paths';
  import Button from './button.svelte';

  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="root">
  <div class="bubble">
    <img src="{base}/roadmap/bubble.svg" alt="Speech bubble" loading="lazy" />
    <h1 class="text">Sign up to be a CAT SUPERHERO!</h1>
    <div class="button-wrapper">
      <a
        href="https://fixnation.org/about-tnr/free-feral-application/"
        target="_blank"
        rel="noreferrer noopener"><Button fill>Trapper Application</Button></a
      >
    </div>
  </div>

  <div class="video-container">
    <iframe
      width={windowWidth < 620 ? 'auto' : windowWidth < 1000 || windowWidth > 1300 ? 560 : 280}
      height={windowWidth < 620 ? 'auto' : windowWidth < 1000 || windowWidth > 1300 ? 315 : 158}
      src="https://www.youtube.com/embed/JgatHzlxnv0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
    />
  </div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 100px 50px 150px 40px;
  }

  .bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 75px;
    width: 100%;
  }

  .bubble img {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  .text {
    font-size: 36px;
    color: var(--color-secondary-accent);
    font-family: 'Comics', sans-serif;
    z-index: 2;
    max-width: 480px;
    text-align: center;
    margin: 0;
  }

  .button-wrapper {
    z-index: 2;
  }

  .video-container {
    border-radius: 12px;
    overflow: hidden;
    filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.3));
    min-width: 560px;
    min-height: 315px;
  }

  @media screen and (max-width: 1300px) {
    .text {
      font-size: 24px;
    }

    .video-container {
      min-width: 280px;
      min-height: 158px;
    }
  }

  @media screen and (max-width: 1000px) {
    .text {
      font-size: 18px;
    }

    .root {
      flex-direction: column;
      padding: 50px;
    }

    .bubble {
      padding: 120px 80px;
      width: 80%;
    }

    .bubble img {
      height: auto;
    }
  }
</style>
