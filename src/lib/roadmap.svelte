<script lang="ts">
  import Road from '$lib/assets/img/SolidRoad.svg';
  import DashedLine from '$lib/assets/img/DashedRoad.svg';
  import Hero from '$lib/assets/img/GroupedHero.svg';
  import PointyTextBubble from '$lib/assets/img/PointyTextBubble.svg';
  import RoundTextBubble from '$lib/assets/img/RoundTextBubble.svg';
  import Pinpoint from '$lib/assets/img/Pinpoint.svg';
  import Cloud from '$lib/assets/img/Cloud.svg';
</script>

<div id="container">
  <div id="road-container">
    <img class="road" id="solid" src={Road} alt="" />
    <img class="road" id="dashed" src={DashedLine} alt="" />

    <div id="points-container">
      <div id="point1-container">
        <img class="pinpoint" id="point1" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud1" src={Cloud} alt="" />
        <h2 class="title" id="title1">1. Find</h2>
        <p class="text" id="text1">Find a cat who needs your help</p>
      </div>

      <div id="point2-container">
        <img class="pinpoint" id="point2" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud2" src={Cloud} alt="" />
        <h2 class="title" id="title2">2. Feed</h2>
        <p class="text" id="text2">Feed the cat in the afternoon and evening</p>
      </div>

      <div id="point3-container">
        <img class="pinpoint" id="point3" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud3" src={Cloud} alt="" />
        <h2 class="title" id="title3">3. Trap</h2>
        <p class="text" id="text3">Set trap, wait, trap cat and rejoice!</p>
      </div>

      <div id="point4-container">
        <img class="pinpoint" id="point4" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud4" src={Cloud} alt="" />
        <h2 class="title" id="title4">4. FixNation</h2>
        <p class="text" id="text4">Get free resources from Fix Nation and make an appointment</p>
      </div>

      <div id="point5-container">
        <img class="pinpoint" id="point5" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud5" src={Cloud} alt="" />
        <h2 class="title" id="title5">5. Hold</h2>
        <p class="text" id="text5">Hold cat overnight until next day’s surgery</p>
      </div>

      <div id="point6-container">
        <img class="pinpoint" id="point6" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud6" src={Cloud} alt="" />
        <h2 class="title" id="title6">6. Fix</h2>
        <p class="text" id="text6">Get cat fixed for free at FixNation!</p>
      </div>

      <div id="point7-container">
        <img class="pinpoint" id="point7" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud7" src={Cloud} alt="" />
        <h2 class="title" id="title7">7. Hold</h2>
        <p class="text" id="text7">Hold cat again overnight for recovery</p>
      </div>

      <div id="point8-container">
        <img class="pinpoint" id="point8" src={Pinpoint} alt="" />
        <img class="cloud" id="cloud8" src={Cloud} alt="" />
        <h2 class="title" id="title8">8. Return</h2>
        <p class="text" id="text8">Return cat to where it was trapped.</p>
      </div>
    </div>
  </div>

  <div id="hero-container">
    <img id="pointy-bubble" src={PointyTextBubble} alt="" />
    <h1 id="pointy-title">How To Become A</h1>
    <img id="round-bubble" src={RoundTextBubble} alt="" />
    <h1 id="cloud-title">cat SUPERHERO</h1>
    <img id="hero" src={Hero} alt="" />
  </div>
</div>

<style lang="css">
  @font-face {
    font-family: 'comics';
    src: url('$lib/assets/fonts/Comics Regular.woff') format('woff');
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

  :global(body) {
    margin: 0; /* Made the image fit the entire screen */
  }

  #road-container {
    align-items: center;
  }

  .road {
    position: absolute;
    align-self: center;
    width: 100%;
    height: auto;
    float: left;
    top: 15%;
  }

  #solid {
    z-index: -3;
    margin: auto;
    overflow: hidden;
  }

  #dashed {
    z-index: -2;
    margin: auto;
    margin-top: 2%;
  }

  #points-container {
    position: inherit;
  }

  .pinpoint {
    height: auto;
    width: 4%;
  }

  #point1,
  #cloud1 {
    position: absolute;

    left: 15%;
    margin-top: 12%;
    z-index: -1;
  }

  #point2,
  #cloud2 {
    position: absolute;

    left: 25%;
    margin-top: 23%;
    z-index: -1;
  }

  #point3,
  #cloud3 {
    position: absolute;

    left: 16%;
    margin-top: 40%;
    z-index: -1;
  }

  #point4,
  #cloud4 {
    position: absolute;

    left: 36%;
    margin-top: 35%;
    z-index: -1;
  }

  #point5,
  #cloud5 {
    position: absolute;

    right: 38%;
    margin-top: 19%;
    z-index: -1;
  }

  #point6,
  #cloud6 {
    position: absolute;

    right: 42%;
    margin-top: 50%;
    z-index: -1;
  }

  #point7,
  #cloud7 {
    position: absolute;

    right: 23%;
    margin-top: 36%;
    z-index: -1;
  }

  #point8,
  #cloud8 {
    position: absolute;

    right: 13%;
    margin-top: 46%;
    z-index: -1;
  }

  .cloud {
    height: auto;
    width: 12%;
  }

  #cloud1 {
    margin-top: 16%;
    left: 11%;
  }

  #cloud2 {
    margin-top: 27.5%;
    left: 20%;
    scale: 115%;
  }

  #cloud3 {
    margin-top: 45%;
    left: 12.5%;
    scale: 115%;
  }

  #cloud4 {
    left: 32%;
    margin-top: 40%;
    scale: 130%;
  }

  #cloud5 {
    right: 35%;
    margin-top: 23%;
    scale: 115%;
  }

  #cloud6 {
    right: 38%;
    margin-top: 55%;
    scale: 115%;
  }

  #cloud7 {
    right: 19.5%;
    margin-top: 41%;
    scale: 115%;
  }

  #cloud8 {
    right: 9.5%;
    margin-top: 51%;
    scale: 115%;
  }

  #pointy-title,
  #cloud-title {
    font-family: 'comics';
    font-size: 1.8vw;
  }

  #pointy-title {
    position: absolute;
    right: 30%;
    padding-right: 10.1vw;
    margin-top: 5.5%;
    z-index: 1;

    color: #20525c;
    transform: rotate(-0.07deg);
  }

  #cloud-title {
    position: absolute;
    right: 15.75%;
    width: 10%;
    text-align: center;
    padding-right: 10.1vw;
    margin-top: 4.5%;
    z-index: 1;

    color: #20525c;
    transform: rotate(-0.07deg);
  }

  .title {
    font-family: 'itc_avant_garde_gothic_ltdemi';
    font-style: normal;
    font-weight: 700;
    font-size: 2vh;
    line-height: 150%;
    position: absolute;
    z-index: 2;

    color: #20525c;
  }

  #title1 {
    left: 14%;
    margin-top: 18%;
    height: auto;
    width: 12%;
  }

  #title2 {
    left: 23%;
    margin-top: 29%;
    height: auto;
    width: 12%;
  }

  #title3 {
    margin-top: 47%;
    left: 15%;
    height: auto;
    width: 12%;
  }

  #title4 {
    margin-top: 41.5%;
    left: 34%;
    height: auto;
    width: 12%;
  }

  #title5 {
    margin-top: 25%;
    right: 33%;
    height: auto;
    width: 12%;
  }

  #title6 {
    margin-top: 57%;
    right: 36%;
    height: auto;
    width: 12%;
  }

  #title7 {
    margin-top: 43%;
    right: 17.5%;
    height: auto;
    width: 12%;
  }

  #title8 {
    margin-top: 53%;
    right: 7.5%;
    height: auto;
    width: 12%;
  }

  .text {
    font-family: 'avenir_lt_std45_book';
    font-style: normal;
    font-weight: 500;
    font-size: 130%;
    line-height: 150%;
    word-wrap: break-word;
    width: 8%;
    z-index: 2;
    position: absolute;

    color: #20525c;

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  #text1 {
    left: 14%;
    margin-top: 20%;
  }

  #text2 {
    left: 23%;
    margin-top: 31%;
  }

  #text3 {
    left: 15%;
    margin-top: 49%;
  }

  #text4 {
    left: 34%;
    margin-top: 43.5%;
    width: 10%;
  }

  #text5 {
    right: 35%;
    margin-top: 26.5%;
    width: 10%;
  }

  #text6 {
    right: 38%;
    margin-top: 58.5%;
    width: 10%;
  }

  #text7 {
    right: 19.5%;
    margin-top: 44.5%;
    width: 10%;
  }

  #text8 {
    right: 9.5%;
    margin-top: 54.5%;
    width: 10%;
  }

  #hero-container {
    float: right;
  }

  #hero {
    position: absolute;
    top: 25%;
    right: 13%;

    height: auto;
    width: 15%;
  }

  #pointy-bubble {
    z-index: -1;
    position: absolute;

    top: 5%;
    right: 37%;
    height: auto;
    width: 22%;
  }

  #round-bubble {
    position: absolute;

    top: 6%;
    right: 20%;
    height: auto;
    width: 20%;
  }
</style>
