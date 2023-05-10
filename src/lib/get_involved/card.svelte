<!--
  card.svelte:
    A flippable card with an outbound link.
-->
<script lang="ts">
  import { onMount } from 'svelte';

  import { base } from '$app/paths';

  export let label = '';
  export let description = '';
  export let background_image_url = '';
  export let background_image_alt = '';
  export let light_shadow = false;
  export let link_url = '';

  let mobile = false;
  const detectMobile = () => {
    // Crude touchscreen detection via:
    //   https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
    mobile = !!('ontouchstart' in window || navigator.maxTouchPoints > 0);
  };
  onMount(detectMobile);
</script>

<svelte:window on:resize={detectMobile} />

<a class="container" href={!mobile ? link_url : 'javascript:void(0)'}>
  <div class="root">
    <img src={background_image_url} alt={background_image_alt} loading="lazy" />
    <div class="label">
      <p>{label}</p>
      <img
        class="chevron right"
        src="{base}/icons/ic_caretright.svg"
        alt="Right arrow"
        loading="lazy"
      />
    </div>
    <div class="description {light_shadow ? 'light' : 'dark'}">
      <p>{description}</p>
      <img
        class="chevron left"
        src="{base}/icons/ic_caretright.svg"
        alt="Left arrow"
        loading="lazy"
      />
      <a href={link_url} class="external">
        <div>Learn More:</div>
        &nbsp;
        <img src="{base}/icons/ic_external_link.svg" alt="External link indicator" loading="lazy" />
      </a>
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }

  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 20.5vw;
    max-height: 20.5vw;
    min-width: 32vw;
    max-width: 32vw;
    overflow: hidden;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  p {
    text-align: center;
    font-weight: 700;
    color: var(--color-white);
    z-index: 2;
    width: 90%;
    margin: 0 auto;
  }

  .label,
  .description {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
  .label {
    opacity: 1;
  }
  .description {
    opacity: 0;
  }
  .description.light {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(11, 129, 103, 0.73);
  }
  .description.dark {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(32, 82, 92, 0.78);
  }

  .container:hover .label {
    opacity: 0;
  }

  .container:hover .description {
    opacity: 1;
  }

  .label p {
    font-size: 2rem;
  }

  .description p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .external {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .external div {
    display: none;
  }
  .external img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
  }

  .container:hover .external {
    opacity: 1;
  }
  .chevron {
    display: none;
  }

  @media screen and (min-width: 750px) {
    .external img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .label p {
      font-size: 1.5rem;
    }

    .description p {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .label p {
      font-size: 1rem;
    }

    .description p {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 600px) {
    .root {
      min-height: 64vw;
      max-height: 64vw;
      min-width: 100vw;
      max-width: 100vw;
    }

    .label {
      transform: translateX(0);
    }
    .description {
      transform: translateX(100vw);
      opacity: 1;
    }
    .container:hover .description {
      transform: translateX(0);
    }

    p {
      width: 85%;
    }

    .label p {
      font-size: 1.25rem;
    }

    .description p {
      font-size: 1rem;
    }

    .external {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
    }
    .external div {
      display: block;
      color: var(--color-white);
      text-decoration: underline;
      font-size: 1rem;
    }
    .external img {
      width: 1.5rem;
      height: 1.5rem;
      position: static;
      margin-bottom: -1px; /* SVG viewbox/baseline fix */
    }
    .chevron {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      right: 0;
    }
    .chevron.left {
      left: 0;
      transform: rotate(180deg);
    }
  }
</style>
