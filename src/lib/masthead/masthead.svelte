<!--
  masthead.svelte:
    Hero masthead component, showing cat images and
    two call-to-action buttons.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import bg0 from './img/desktop/bg0.png?format=avif';
  import bg1 from './img/desktop/bg1.png?format=avif';
  import bg2 from './img/desktop/bg2.png?format=avif';
  import bg3 from './img/desktop/bg3.png?format=avif';
  import bg4 from './img/desktop/bg4.png?format=avif';

  import bg0_mobile from './img/mobile/bg0.png?format=avif';
  import bg1_mobile from './img/mobile/bg1.png?format=avif';
  import bg2_mobile from './img/mobile/bg2.png?format=avif';
  import bg3_mobile from './img/mobile/bg3.png?format=avif';
  import bg4_mobile from './img/mobile/bg4.png?format=avif';

  const alts = [
    'Cat with a sunset',
    'Cat kneeling',
    'Broccoli',
    'Cat with large eyes',
    'Shelby',
    'Bobby'
  ];
  const bgs = [bg0, bg1, bg2, bg3, bg4];
  const mobile_bgs = [bg0_mobile, bg1_mobile, bg2_mobile, bg3_mobile, bg4_mobile];
  const n_backgrounds = bgs.length;
  let index = 0;
  onMount(() => {
    setInterval(() => {
      index = (index + 1) % n_backgrounds;
    }, 5000);
  });

  const socials = {
    facebook: 'https://www.facebook.com/FixNationLA',
    instagram: 'https://www.instagram.com/fixnation',
    twitter: 'https://www.twitter.com/fixnation',
    youtube: 'https://www.youtube.com/user/FixNationClinic',
    tiktok: 'https://www.tiktok.com/@fixnationla',
    yelp: 'https://www.yelp.com/biz/fixnation-los-angeles'
  };

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div id="masthead">
  {#each new Array(n_backgrounds) as _, i}
    <img
      class="background"
      style="opacity: {index === i ? 1 : 0}"
      src={innerWidth > 600 ? bgs[i] : mobile_bgs[i]}
      alt={alts[i]}
    />
  {/each}
  <div id="masthead_main_container">
    <div id="logo_container">
      <img src="/masthead/fixnation_logo.svg" alt="logo for fixnation" id="logo" />
    </div>
    <div id="masthead_content_container">
      <div id="action_container">
        <img src="/masthead/title_blob.svg" alt="blue blob" id="text_background_blob" />
        <div id="words_container">
          <h1 id="subtitle_text">Compassionate Care for Community Cats</h1>
          <p id="subtitle_description">
            Reducing the population of homeless cats in Los Angeles in the most humane way, start
            your TNR journey today.
          </p>
        </div>
        <div id="button_container">
          <a href="#get_involved"><button id="involve_button">Get Involved</button></a>
          <a
            href="https://fixnation.networkforgood.com/projects/182719-helping-cats-and-communities-through-tnr-2023"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button id="donate_button">Donate</button>
          </a>
        </div>
      </div>

      <div id="icons">
        {#each Object.entries(socials) as [site, href]}
          <a {href} target="_blank" rel="noreferrer noopener" class="icon_item">
            <img src="/masthead/{site}.svg" alt="{site} logo" class="icon" />
          </a>
        {/each}
      </div>
    </div>

    <div id="arrow_animation_container">
      <div id="arrow_container">
        {#each new Array(3) as _, i}
          <span class="material-icons white_arrow arrow_{i}">expand_more</span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .background {
    position: absolute;
    box-sizing: border-box;
    height: auto;
    width: 100vw;
    z-index: 0;
    box-shadow: inset 0px 200px 200px 100px rgba(0, 0, 0, 0.4);
    margin: 0;
    padding: 0;
    top: 0;
    transition: opacity 1s;
  }
  #logo_container {
    box-sizing: border-box;
    height: 15%;
    width: 100%;
    min-height: 10vw;
    display: flex;
    justify-content: center;
  }
  #logo {
    margin-top: 2vh;
    display: block;
    height: 7vw;
    width: auto;
  }
  #text_background_blob {
    position: absolute;
    left: 0px;
    z-index: 0;
    width: 50%;
    top: 8%;
  }
  #masthead {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
  }
  #masthead_main_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    height: fit-content;
  }
  #masthead_content_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 70%;
    min-height: 35vw;
    width: 100vw;
  }
  #action_container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    flex: 1;
  }
  #words_container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 60%;
    padding: 2vw;
    z-index: 1;
  }
  #subtitle_text {
    font-size: 3vw;
    line-height: 150%;
    margin: 0;
    letter-spacing: 0.02em;
    color: #ffffff;
    box-sizing: border-box;
    width: 63%;
  }
  #subtitle_description {
    font-size: 1.8vw;
    line-height: 150%;
    letter-spacing: 0.02em;
    box-sizing: border-box;
    width: 80%;
    color: #f9f9f9;
  }
  #button_container {
    padding-left: 2vw;
    display: flex;
    justify-self: center;
    z-index: 1;
  }
  #involve_button,
  #donate_button {
    left: 1.485vw;
    top: 21.495vw;
    margin-right: 2vw;
    border-radius: 0.25vw;
    border-color: white;
    border: 0;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 300;
    font-size: 1.7vw;
    line-height: auto;
    text-align: center;
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
    width: 13vw;
    height: 4vw;
  }
  #involve_button {
    background: var(--color-white);
    color: var(--color-primary);
  }
  #donate_button {
    background: var(--color-primary);
    color: white;
    border: 1.5px solid var(--color-white);
  }
  #involve_button:hover {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  #donate_button:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
  }
  .icon_item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.38vw;
    gap: 10px;
    margin: 1vw;
    width: 1.86vw;
    height: 1.86vw;
    min-width: 1.5rem;
    min-height: 1.5rem;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    order: 0;
    flex-grow: 0;
    z-index: -1;
  }
  .icon {
    position: inherit;
    left: 29.17%;
    right: 27.08%;
    top: 8.33%;
    bottom: 8.33%;
    z-index: 1;
    scale: 100%;
  }
  .icon_item:hover .icon {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(354deg) brightness(200%) contrast(101%);
  }
  .icon_item:hover {
    background: #58c3af;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  /* Arrow Animation */
  /* Source:  https://codepen.io/rightblog/pen/EagNMN */
  #arrow_animation_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    height: 15%;
    min-height: 25vw;
  }
  #arrow_container {
    padding-bottom: 1vw;
    display: flex;
    flex-direction: column;
  }
  .white_arrow {
    margin: -1.5vw;
    color: var(--color-white);
    font-size: 5vw;
    animation: mouse-scroll 0.7s infinite linear;
    animation-direction: alternate;
  }
  .arrow_0 {
    animation-delay: 0s;
  }
  .arrow_1 {
    animation-delay: 0.1s;
  }
  .arrow_2 {
    animation-delay: 0.2s;
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1400px) {
    #involve_button,
    #donate_button {
      padding: 1vw;
    }
  }

  @media only screen and (max-width: 1750px) {
    #masthead {
      justify-content: center;
    }
    #involve_button,
    #donate_button {
      width: 13vw;
      height: 4vw;
      font-size: 1.7vw;
    }
  }

  @media only screen and (max-width: 1473px) {
    .background {
      position: absolute;
      width: 100%;
      height: auto;
    }
    #arrow_animation_container {
      min-height: 20vw;
    }
    #masthead {
      height: fit-content;
      min-height: 60vw;
    }
  }

  @media only screen and (max-width: 600px) {
    #masthead {
      min-height: 140vw;
      margin-bottom: -2rem;
    }

    #icons {
      margin-bottom: 25px;
    }

    #button_container {
      margin-top: 0.01vh;
      padding-left: 0;
    }

    #text_background_blob {
      width: 90vw;
      z-index: 1;
    }

    #logo_container {
      position: absolute;
      top: 0;
      padding-top: 20px;
    }

    #logo {
      height: 45px;
    }

    #masthead_content_container {
      position: relative;
      top: 10px;
    }
    #subtitle_text {
      width: 97%;
      font-size: 4.5vw;
    }
    #action_container {
      position: relative;
      top: 51vw;
      padding-top: 17vw;
      padding-left: 1rem;
    }
    #text_background_blob {
      top: 0;
    }
    #words_container {
      width: 80%;
      padding: 1vw;
    }
    #subtitle_description {
      font-size: 3.5vw;
      width: 100%;
    }

    .icon_item {
      margin: 2vw;
      width: 6vw;
      height: 6vw;
      padding: 0;
    }

    .icon {
      min-width: 4vw;
      min-height: 4vw;
      width: 4vw;
      height: 4vw;
      margin: auto;
    }

    #involve_button,
    #donate_button {
      height: 9vw;
      font-size: 13px;
      border-radius: 4px;
      margin-right: 10vw;
      width: 25vw;
      min-width: 100px;
    }

    #arrow_animation_container {
      display: none;
    }
  }

  @media only screen and (max-width: 300px) {
    #involve_button,
    #donate_button {
      font-size: 12px;
      min-width: 90px;
    }
  }

  #icons {
    position: absolute;
    right: 0;
  }
</style>
