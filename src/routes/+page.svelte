<script>
  import Button from '../lib/button.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
</script>

<CatSuperhero />

<style global>
  /* CSS controlling font sizes and faces here */
  @font-face {
    font-family: 'ITC Avant Garde';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/ITC_Avant_Garde.woff);
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/Avenir.woff);
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: bold;
    src: url(/fonts/Avenir_Bold.otf);
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/Material_Icons.woff2); /* For IE6-8 */
  }

  /* Color palette */
  :root {
    --color-primary: #008e7e;
    --color-secondary: #58c3af;
    --color-accent: #bbd532;
    --color-secondary-accent: #20525c;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-gray: #f0f4f4;

    --color-primary-dark: #1f9c8e;
    --color-primary-darkest: #149788;
  }

  /* Margin and padding */
  html,
  body {
    margin: 0;
    padding: 0;
  }

  /* Fonts and sizing */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'ITC Avant Garde', sans-serif !important;
    line-height: 150%;
  }

  html * {
    font-family: 'Avenir', sans-serif;
  }

  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 18px;
  }

  h1.display {
    font-size: 120px;
  }
  h2.display {
    font-size: 96px;
  }
  h3.display {
    font-size: 80px;
  }
  h4.display {
    font-size: 64px;
  }

  p,
  span {
    font-size: 16px;
  }

  p.caption,
  span.caption {
    font-size: 12px;
  }

  /* Icons */
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
</style>
