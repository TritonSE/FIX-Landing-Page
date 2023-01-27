<script lang="ts">
  import { fade } from 'svelte/transition';
  import BgCatHenri from '$lib/assets/img/background_cat_henri.png';
  import BgCatPopPop from '$lib/assets/img/background_cat_poppop.png';
  import BgCatLucky from '$lib/assets/img/background_cat_lucky.png';
  import FixNationLogo from '$lib/assets/img/fixnation_logo.svg';
  import text_background_blob from '$lib/assets/img/title_blob.svg';
  import Facebook from '$lib/assets/img/facebook.svg';
  import Instagram from '$lib/assets/img/instagram.svg';
  import Twitter from '$lib/assets/img/twitter.svg';
  import Youtube from '$lib/assets/img/youtube.svg';
  import Yelp from '$lib/assets/img/yelp.svg';
  import WhiteArrow from '$lib/assets/img/white_arrow.png';

  const background_images: string[] = [BgCatHenri, BgCatPopPop, BgCatLucky];
  let index = 0;

  const next = () => {
    index = (index + 1) % background_images.length;
    setTimeout(next, 5000);
  };

  next();
</script>

{#each [background_images[index]] as src (index)}
  <img id="background" transition:fade {src} alt="" />
{/each}

<div id="masthead">
  <img src={FixNationLogo} alt="logo for fixnation" id="logo" />
  <div id="masthead_content_container">
    <div id="action_container">
      <img src={text_background_blob} alt="blue blob" id="text_background_blob" />
      <div id="words_container">
        <h1 id="subtitle_text">Compassionate Care for Community Cats</h1>
        <p id="subtitle_description">
          Reducing the population of homeless cats in Los Angeles in the most humane way, start your
          TNR journey today.
        </p>
      </div>
      <div id="button_container">
        <button id="involveButton">Get Involved</button>
        <button id="donateButton">Donate Now</button>
      </div>
    </div>

    <div id="icons">
      <a
        href="https://www.facebook.com/FixNationLA/"
        target="_blank"
        rel="noreferrer noopener"
        class="icon_item"
      >
        <img src={Facebook} alt="facebook logo" class="icon" />
      </a>
      <a
        href="https://www.instagram.com/fixnation/"
        target="_blank"
        rel="noreferrer noopener"
        class="icon_item"
      >
        <img src={Instagram} alt="instagram logo" class="icon" />
      </a>
      <a
        href="https://twitter.com/fixnation"
        target="_blank"
        rel="noreferrer noopener"
        class="icon_item"
      >
        <img src={Twitter} alt="twitter logo" class="icon" />
      </a>
      <a
        href="https://www.youtube.com/user/FixNationClinic"
        target="_blank"
        rel="noreferrer noopener"
        class="icon_item"
      >
        <img src={Youtube} alt="youtube logo" class="icon" />
      </a>
      <a
        href="https://www.yelp.com/biz/fixnation-los-angeles"
        target="_blank"
        rel="noreferrer noopener"
        class="icon_item"
      >
        <img src={Yelp} alt="yelp logo" class="icon" />
      </a>
    </div>
  </div>

  <div id="arrow_animation_container">
    <div id="arrow_container">
      <div class="arrow_set">
        <img src={WhiteArrow} alt="white arrow" class="white_arrow one" />
      </div>
      <div class="arrow_set">
        <img src={WhiteArrow} alt="white arrow" class="white_arrow two" />
      </div>
      <div class="arrow_set">
        <img src={WhiteArrow} alt="white arrow" class="white_arrow three" />
      </div>
    </div>
  </div>
</div>

<style lang="css">
  :global(body) {
    margin: 0; /* Made the image fit the entire screen */
  }

  #background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    margin: 0;
    z-index: -2;
    box-shadow: inset 0px 200px 200px 100px rgba(0, 0, 0, 0.4);
  }

  #logo {
    margin-top: 25px;
    display: block;
  }

  @font-face {
    font-family: 'itc_avant_garde_gothic_ltdemi';
    src: url('$lib/assets/fonts/itc_avant_garde_gothic_lt_demi_regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'avenir_lt_std45_book';
    src: url('$lib/assets/fonts/avenirltstd-book-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  #text_background_blob {
    position: absolute;
    left: 0px;
    z-index: -1;
    width: 50%;
    bottom: 8%;
  }

  #masthead {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  #masthead_content_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0px 25px 0px 25px;
  }

  #action_container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 15vh;
  }

  #words_container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 60%;
  }

  #subtitle_text {
    font-family: 'itc_avant_garde_gothic_ltdemi';
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 150%;
    margin-top: auto;
    letter-spacing: 0.02em;

    color: #ffffff;

    box-sizing: border-box;
    width: 80%;
  }

  #subtitle_description {
    font-family: 'avenir_lt_std45_book';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 150%;

    letter-spacing: 0.02em;

    box-sizing: border-box;
    width: 90%;

    color: #f9f9f9;
  }

  #button_container {
    margin-top: 3vh;
  }

  #involveButton,
  #donateButton {
    width: 145px;
    height: 48px;
    left: 32px;
    top: 463px;

    margin-right: 25px;

    background: #f9f9f9;
    border-radius: 4px;
    border-color: white;
    border: 0;

    /* Body/Medium (Bold) */
    font-family: 'avenir_lt_std45_book';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;

    text-align: center;

    color: #008e7e;

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  #involveButton:hover,
  #donateButton:hover {
    cursor: pointer;
  }

  .icon_item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 10px;

    margin: 1vw;
    width: 40px;
    height: 40px;

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
    scale: 150%;
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
  /* Source:  https://codepen.io/rightblog/pen/EagNMN/*/
  #arrow_container {
    padding-bottom: 25px;
  }
  .arrow_set {
    box-sizing: border-box;
    width: 10%;
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
    margin-top: -6px;
  }
  .three {
    animation-delay: 0.3s;
    margin-top: -6px;
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
</style>
