<!--
  masthead.svelte:
    Hero masthead component, showing cat images and
    two call-to-action buttons.
-->
<script lang="ts">
  import { fade } from 'svelte/transition';

  const n_backgrounds = 6;
  const alts = [
    'Cat with a sunset',
    'Cat kneeling',
    'Broccoli',
    'Cat with large eyes',
    'Shelby',
    'Bobby'
  ];
  let index = 0;
  const next = () => {
    index = (index + 1) % n_backgrounds;
    setTimeout(next, 5000);
  };
  next();

  const socials = {
    facebook: 'https://www.facebook.com/FixNationLA',
    instagram: 'https://www.instagram.com/fixnation',
    twitter: 'https://www.twitter.com/fixnation',
    youtube: 'https://www.youtube.com/user/FixNationClinic',
    yelp: 'https://www.yelp.com/biz/fixnation-los-angeles'
  };
</script>

<div id="masthead">
  {#each new Array(n_backgrounds) as _, i}
    {#if index === i}
      <img id="background" transition:fade src={`/masthead/backgrounds/bg${i}.png`} alt={alts[i]} />
    {/if}
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
          <button id="involveButton">Get Involved</button>
          <button id="donateButton">Donate</button>
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
        <img src="/masthead/white_arrow.png" alt="white arrow" class="white_arrow one" />
        <img src="/masthead/white_arrow.png" alt="white arrow" class="white_arrow two" />
        <img src="/masthead/white_arrow.png" alt="white arrow" class="white_arrow three" />
      </div>
    </div>
  </div>
</div>

<style>
  #background {
    position: absolute;
    box-sizing: border-box;
    height: auto;
    width: 100vw;
    z-index: 0;
    box-shadow: inset 0px 200px 200px 100px rgba(0, 0, 0, 0.4);
    margin: 0;
    padding: 0;
    top: 0;
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
  }
  #masthead_main_container {
    position: absolute;
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
    height: 100%;
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
    width: 88%;
    color: #f9f9f9;
  }
  #button_container {
    padding-left: 2vw;
    display: flex;
    justify-self: center;
    z-index: 1;
  }
  #involveButton,
  #donateButton {
    width: 12vw;
    height: 4vw;
    left: 1.485vw;
    top: 21.495vw;
    margin-right: 2vw;
    border-radius: 0.25vw;
    border-color: white;
    border: 0;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 300;
    font-size: 1.3vw;
    line-height: auto;
    text-align: center;
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
  }
  #involveButton {
    color: var(--color-primary);
  }
  #donateButton {
    background: var(--color-primary);
    color: white;
    border: 1.5px solid var(--color-white);
  }
  #involveButton:hover {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  #donateButton:hover {
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
    width: 3vw;
  }
  .white_arrow {
    height: 2vw;
  }
  .one,
  .two,
  .three {
    animation: mouse-scroll 0.7s infinite;
    animation-direction: alternate;
  }
  .one {
    animation-delay: alternate;
  }
  .two {
    animation-delay: 0.2s;
  }
  .three {
    animation-delay: 0.3s;
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

  @media only screen and (max-width: 1750px) {
    #masthead {
      justify-content: center;
    }
    #involveButton,
    #donateButton {
      width: 13vw;
      height: 4vw;
      font-size: 1.7vw;
    }
  }

  @media only screen and (max-width: 1473px) {
    #background {
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
      margin-bottom: -6rem;
    }
    #button_container {
      margin-top: 0.01vh;
      padding-left: 0;
    }
    #text_background_blob {
      width: 90vw;
    }

    #logo_container {
      padding-top: 20px;
    }

    #logo {
      height: 45px;
    }

    #masthead_content_container {
      position: relative;
      top: -60px;
    }
    #subtitle_text {
      width: 97%;
      font-size: 4.5vw;
    }
    #action_container {
      position: relative;
      top: 35vw;
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

    #involveButton,
    #donateButton {
      height: 9vw;
      font-size: 12px;
      border-radius: 4px;
      margin-right: 10vw;
    }

    #involveButton,
    #donateButton {
      width: 25vw;
      min-width: 90px;
    }

    #arrow_animation_container {
      display: none;
    }
  }
</style>
