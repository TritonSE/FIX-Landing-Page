<script>
  import header_img from '../../static/about/about_header.png';
  import { onMount } from 'svelte';
  import lax from 'lax.js';

  onMount(() => {
    lax.init();
    lax.addDriver('scrollY', () => window.scrollY);

    lax.addElements('#bottom-img', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY', 'elOutY'],
          [0, 'screenWidth/16', 'screenWidth/16']
        ],
        translateY: [
          ['elInY', 'elCenterY', 'elOutY'],
          ['screenWidth/6', 0, 0]
        ]
      }
    });

    lax.addElements('#top-img', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY', 'elOutY'],
          ['screenWidth/8', 0, 0]
        ],
        translateY: [
          ['elInY', 'elCenterY', 'elOutY'],
          [0, 'screenWidth/12', 'screenWidth/12']
        ]
      }
    });
  });
</script>

<div id="about-text">
  <div class="text-wrapper">
    <h2>Thousands of cats are needlessly<br />euthanized in Los Angeles each year,</h2>
    <p>
      their only fault being that they don’t have a home. Los Angeles is home to one of the nation’s<br
      />
      largest populations of homeless cats with an estimated one to three million living on the streets.
    </p>
  </div>
</div>
<img id="about-header" src="/about/about_header.png" alt="cat header" />
<div id="flex-container">
  <div class="row">
    <div class="text">
      <h3>“We need to do something!”</h3>
      <p>
        Eager to find a solution to the problem, Karn Myers and her husband Mark Dodge launched
        FixNation--the first full-time, permanent spay/neuter facility in Los Angeles. Now, their
        award-winning programs serve as a model for other communities and charities dealing with
        similar situations on a global scale.
      </p>
    </div>
    <div class="img-container" id="top-img">
      <img class="blob" src="/about/top_blob.svg" alt="blob accent" />
      <img class="img" src="/about/top_image.png" alt="volunteering" />
    </div>
  </div>
  <div class="row">
    <div class="img-container" id="bottom-img">
      <img class="blob" src="/about/bottom_blob.svg" alt="blob accent" />
      <img class="img" src="/about/bottom_image.png" alt="love cats" />
    </div>
    <div class="text">
      <h3>For the love of cats</h3>
      <p>
        At the heart of our high-volume, high-quality spay/neuter clinic is an experienced and
        expert team that genuinely cares about cats. In addition to free spay/neuter surgery, every
        homeless cat brought to FixNation receives vaccinations, fluids, antibiotics, pain
        medication and flea treatment.
      </p>
    </div>
  </div>
  <div id="mission-container">
    <div id="mission-text">
      <h3>Our mission</h3>
      <p>
        Our mission is to humanely reduce the population of homeless cats in Los Angeles by
        sterilizing as many as possible and allowing their numbers to naturally decline over time.
      </p>
    </div>
    <div id="logo-container">
      <img id="logo-blob" src="/about/logo_blob.svg" alt="blob accent" />
      <img id="logo-img" src="/about/logo.svg" alt="Fix Nation logo" />
    </div>
  </div>
</div>

<style>
  .img-container {
    display: grid;
    position: relative;
  }

  #mission-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  #logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #mission-text {
    margin-left: 10vw;
    margin-right: 5vw;
  }

  #logo-blob {
    grid-column: 1;
    grid-row: 1;
    padding-top: 15%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  #logo-img {
    position: absolute;
    z-index: 1;
  }

  .blob {
    grid-column: 1 / span 8;
    grid-row: 1;
    padding-top: 15%;
  }

  .img {
    padding-left: 15%;
    grid-row: 1;
    grid-column: 4/-1;
    z-index: 1;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  .text {
    width: 450px;
  }

  #flex-container {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
  }

  #about-header {
    width: 100%;
  }

  #about-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-wrapper {
    margin: 2rem 0rem 1rem 0rem;
    text-align: left;
    width: 50vw;
  }
</style>
