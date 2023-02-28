<script lang="ts">
  import { fade } from 'svelte/transition';

  const background_images: string[] = [
    '/masthead/background_cat_henri.png',
    '/masthead/background_cat_poppop.png',
    '/masthead/background_cat_lucky.png'
  ];
  let index = 0;
  const next = () => {
    index = (index + 1) % background_images.length;
    setTimeout(next, 5000);
  };
  next();
</script>

<div id="masthead">
  {#each [background_images[index]] as src (index)}
    <img id="background" transition:fade {src} alt="" />
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
        <a
          href="https://www.facebook.com/FixNationLA/"
          target="_blank"
          rel="noreferrer noopener"
          class="icon_item"
        >
          <img src="/masthead/facebook.svg" alt="facebook logo" class="icon" />
        </a>
        <a
          href="https://www.instagram.com/fixnation/"
          target="_blank"
          rel="noreferrer noopener"
          class="icon_item"
        >
          <img src="/masthead/instagram.svg" alt="instagram logo" class="icon" />
        </a>
        <a
          href="https://twitter.com/fixnation"
          target="_blank"
          rel="noreferrer noopener"
          class="icon_item"
        >
          <img src="/masthead/twitter.svg" alt="twitter logo" class="icon" />
        </a>
        <a
          href="https://www.youtube.com/user/FixNationClinic"
          target="_blank"
          rel="noreferrer noopener"
          class="icon_item"
        >
          <img id="youtube_logo" src="/masthead/youtube.svg" alt="youtube logo" class="icon" />
        </a>
        <a
          href="https://www.yelp.com/biz/fixnation-los-angeles"
          target="_blank"
          rel="noreferrer noopener"
          class="icon_item"
        >
          <img src="/masthead/yelp.svg" alt="yelp logo" class="icon" />
        </a>
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
    top: 2.5vh;
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
    font-size: 3.1569173630454967vw;
    line-height: 150%;
    margin: 0;
    letter-spacing: 0.02em;
    color: #ffffff;
    box-sizing: border-box;
    width: 80%;
  }
  #subtitle_description {
    font-size: 1.392757660167131vw;
    line-height: 150%;
    letter-spacing: 0.02em;
    box-sizing: border-box;
    width: 90%;
    color: #f9f9f9;
  }
  #button_container {
    margin-top: 3vh;
    padding-left: 2vw;
    display: flex;
    justify-self: center;
    z-index: 1;
  }
  #involveButton,
  #donateButton {
    width: 6.73vw;
    height: 2.22vw;
    left: 1.485vw;
    top: 21.495vw;
    margin-right: 2vw;
    border-radius: 0.25vw;
    border-color: white;
    border: 0;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 900;
    font-size: 0.75vw;
    line-height: auto;
    text-align: center;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  #involveButton {
    color: var(--color-primary);
    background: #f9f9f9;
  }

  #donateButton {
    color: white;
    background: var(--color-primary);
    border: 2px solid white;
  }

  #involveButton:hover,
  #donateButton:hover {
    cursor: pointer;
  }
  .icon_item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.3714020427112349vw;
    gap: 10px;
    margin: 1vw;
    width: 1.8570102135561746vw;
    height: 1.8570102135561746vw;
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
  #youtube_logo {
    width: 2vw;
  }
  /* Arrow Animation */
  /* Source:  https://codepen.io/rightblog/pen/EagNMN/*/
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

  @media only screen and (min-width: 1474px) {
    #background {
      position: absolute;
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 1750px) {
    #masthead {
      justify-content: center;
    }
    #text_background_blob {
      top: 8vh;
    }
    #involveButton,
    #donateButton {
      width: 9vw;
      height: 3vw;
      font-size: 1vw;
    }
  }

  @media only screen and (max-width: 1473px) {
    #text_background_blob {
      top: 4vh;
    }
    #arrow_animation_container {
      min-height: 20vw;
    }
    #masthead {
      height: fit-content;
      min-height: 60vw;
    }
  }

  @media only screen and (max-width: 850px) {
    #button_container {
      margin-top: 1.5vh;
    }
  }

  @media only screen and (max-width: 600px) {
    #button_container {
      margin-top: 0.75vh;
    }
  }

  @media only screen and (max-width: 450px) {
    #masthead {
      min-height: 140vw;
    }
    #button_container {
      margin-top: 0.01vh;
      padding-left: 0;
    }
    #text_background_blob {
      top: 6vw;
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
      font-weight: 600;
      margin-right: 10vw;
    }

    #involveButton {
      width: 90px;
    }

    #donateButton {
      width: 80px;
    }

    #arrow_animation_container {
      display: none;
    }
  }
</style>
