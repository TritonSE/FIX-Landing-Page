<script>
  import { base } from '$app/paths';
  import Button from './button.svelte';
</script>

<div class="root">
  <div class="bubble">
    <img src="{base}/roadmap/bubble.svg" alt="Speech bubble" loading="lazy" />
    <h1 class="text">Sign up to be a CAT SUPER HERO!</h1>
    <div class="button-wrapper"><Button fill>Transfer Application</Button></div>
  </div>

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/JgatHzlxnv0"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
  />
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 100px 150px 150px 80px;
  }

  .bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    margin: 0 175px;
  }

  .bubble img {
    position: absolute;
    z-index: 1;
    height: 175%;
    width: 175%;
  }

  .text {
    font-size: 36px;
    color: var(--color-secondary-accent);
    font-family: 'Comics', sans-serif;
    z-index: 2;
    max-width: 480px;
    text-align: center;
  }

  .button-wrapper {
    z-index: 2;
  }

  @media screen and (max-width: 675px) {
    .root {
      flex-direction: column;
      padding: 50px;
    }
  }
</style>
