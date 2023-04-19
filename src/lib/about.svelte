<!-- 
   about.svelte:
    A component that provides an overview of 
    FixNation's initiatives and impact on the community.
-->
<script>
  import { onMount } from 'svelte';
  import lax from 'lax.js';

  onMount(() => {
    lax.init();
    lax.addDriver('scrollY', () => window.scrollY);

    lax.addElements('#bottom-img', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY'],
          ['screenWidth/4', 0]
        ],
        translateY: [
          ['elInY', 'elCenterY'],
          ['-screenHeight/4', 0]
        ],
        scale: [
          ['elInY', 'elCenterY'],
          [0.4, 1]
        ],
        opacity: [
          ['elInY', 'elCenterY'],
          [0, 1]
        ]
      }
    });

    lax.addElements('#top-img', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY'],
          ['-screenWidth/4', 0]
        ],
        translateY: [
          ['elInY', 'elCenterY'],
          ['screenHeight/4', 0]
        ],
        scale: [
          ['elInY', 'elCenterY'],
          [0.4, 1]
        ],
        opacity: [
          ['elInY', 'elCenterY'],
          [0, 1]
        ]
      }
    });

    lax.addElements('#top-title', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY'],
          ['elWidth/2', 0]
        ],
        translateY: [
          ['elInY', 'elCenterY'],
          ['-elHeight', 0]
        ]
      }
    });

    lax.addElements('#top-par', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY'],
          ['-elWidth/2', 0]
        ],
        translateY: [
          ['elInY', 'elCenterY'],
          ['elHeight', 0]
        ]
      }
    });

    lax.addElements('#bottom-title', {
      scrollY: {
        translateX: [
          ['elInY', 'elCenterY'],
          ['-elWidth/2', 0]
        ],
        translateY: [
          ['elInY', 'elCenterY'],
          ['elHeight', 0]
        ]
      }
    });

    lax.addElements('#bottom-par', {
      scrollY: {
        translateY: [
          ['elInY', 'elCenterY'],
          ['elHeight', 0]
        ]
      }
    });
  });
</script>

<div class="desktop-view">
  <div class="about-container">
    <div class="text-wrapper">
      <h3>Thousands of cats are needlessly euthanized in Los Angeles each year,</h3>
      <p>
        their only fault being that they don’t have a home. Los Angeles is home to one of the
        nation’s largest populations of homeless cats with an estimated one to three million living
        on the streets.
      </p>
    </div>
  </div>
  <img class="about-header" src="/about/about_header.png" alt="cat header" />
  <div id="flex-container">
    <div class="row">
      <div class="text">
        <h3 id="top-title">“We need to do something!”</h3>
        <p id="top-par">
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
        <h3 id="bottom-title">For the love of cats</h3>
        <p id="bottom-par">
          At the heart of our high-volume, high-quality spay/neuter clinic is an experienced and
          expert team that genuinely cares about cats. In addition to free spay/neuter surgery,
          every homeless cat brought to FixNation receives vaccinations, fluids, antibiotics, pain
          medication and flea treatment.
        </p>
      </div>
    </div>
    <div class="mission-container">
      <div id="mission-text">
        <h3>Our mission</h3>
        <p id="mission-par">
          Our mission is to humanely reduce the population of homeless cats in Los Angeles by
          sterilizing as many as possible and allowing their numbers to naturally decline over time.
        </p>
      </div>
      <div class="logo-container">
        <img id="logo-blob" src="/about/logo_blob.svg" alt="blob accent" />
        <img id="logo-img" src="/about/logo.svg" alt="Fix Nation logo" />
      </div>
    </div>
  </div>
</div>

<div class="mobile-view">
  <div class="about-container">
    <div id="about-img">
      <img class="about-header" src="/about/mobile-about.png" alt="cat header" />
    </div>
    <div class="text-wrapper">
      <h3>Thousands of cats are<br />needlessly euthanized in Los<br />Angeles each year,</h3>
      <p>
        their only fault being that they don’t have a home. Los Angeles is home to one of the
        nation’s largest populations of homeless cats with an estimated one to three million living
        on the streets.
      </p>
    </div>
  </div>
  <div id="volunteer-container">
    <img class="img" src="/about/top_image.png" alt="volunteering" />
    <div class="text-block">
      <h3 class="title">“We need to do something!”</h3>
      <p>
        Eager to find a solution to the problem, Karn Myers and her husband Mark Dodge launched
        FixNation--the first full-time, permanent spay/neuter facility in Los Angeles. Now, their
        award-winning programs serve as a model for other communities and charities dealing with
        similar situations on a global scale.
      </p>
    </div>
  </div>
  <div id="cats-container">
    <img class="img" src="/about/bottom_image.png" alt="love cats" />
    <div class="text-block">
      <h3 class="title">For the love of cats</h3>
      <p>
        At the heart of our high-volume, high-quality spay/neuter clinic is an experienced and
        expert team that genuinely cares about cats. In addition to free spay/neuter surgery, every
        homeless cat brought to FixNation receives vaccinations, fluids, antibiotics, pain
        medication and flea treatment.
      </p>
    </div>
  </div>
  <div class="logo-container">
    <img id="mobile-logo" src="/about/mobile-logo.svg" alt="Fix Nation logo" />
  </div>
  <div class="mission-container">
    <img id="mobile-blob" src="/about/mobile_blob.svg" alt="mobile blob" />
    <div class="mission-text">
      <p>
        Our mission is to humanely reduce the population of homeless cats in Los Angeles by
        sterilizing as many as possible and allowing their numbers to naturally decline over time.
      </p>
    </div>
  </div>
</div>

<style>
  .img-container {
    display: grid;
    position: relative;
  }

  .desktop-view .mission-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .logo-container {
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

  #mobile-logo {
    text-align: center;
    width: 25vw;
  }

  .desktop-view .blob {
    grid-column: 1 / span 8;
    grid-row: 1;
    padding-top: 15%;
  }

  .desktop-view .img {
    padding-left: 15%;
    grid-row: 1;
    grid-column: 4/-1;
    z-index: 1;
  }

  .blob,
  .img,
  #logo-blob {
    max-width: 30vw;
    max-height: 30vw;
  }

  #logo-img {
    max-width: 20vw;
    max-height: 20vw;
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

  .about-header {
    width: 100%;
    margin-bottom: 5rem;
  }

  .desktop-view .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .desktop-view .text-wrapper {
    margin: 2rem 0rem 1rem 0rem;
    width: 60vw;
  }

  .mobile-view {
    display: none;
  }

  .mobile-view .about-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .mobile-view .text-wrapper,
  .mobile-view .mission-text {
    position: absolute;
    text-align: center;
    color: var(--color-white);
    margin-bottom: 6rem;
  }

  .mobile-view .about-header {
    position: relative;
    margin-top: 6rem;
  }

  .mobile-view #mobile-blob {
    position: relative;
  }

  .mobile-view #volunteer-container,
  .mobile-view #cats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .mobile-view .text-block {
    max-width: 90%;
  }

  .mobile-view .text-block h3 {
    margin-left: 1rem;
  }

  .mobile-view p {
    margin: 0rem 1rem;
    margin-bottom: 1rem;
  }

  .mobile-view .about-container p,
  h3 {
    size: 20vw;
  }

  .mobile-view .mission-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .mobile-view .mission-text p {
    font-weight: bold;
    font-size: 5vw !important;
  }

  .mobile-view .mission-text {
    margin-bottom: 20vw;
  }

  .mobile-view .logo-container {
    margin: 2rem;
  }

  .mobile-view #cats-container .img {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 640px) {
    p {
      font-size: 12px;
    }

    h3 {
      font-size: 18px;
    }

    #mission-par {
      font-size: 16px;
    }

    .text {
      margin: 2rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    p {
      font-size: 24px;
    }

    h3 {
      font-size: 48px;
    }

    #mission-par {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 430px) {
    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: block;
    }
    .blob,
    .img,
    #logo-img,
    #logo-blob {
      max-width: 80%;
      max-height: 80%;
    }

    #mobile-blob {
      width: 100%;
    }

    p {
      font-size: 4vw;
    }

    h3 {
      font-size: 6vw;
    }
  }
</style>
