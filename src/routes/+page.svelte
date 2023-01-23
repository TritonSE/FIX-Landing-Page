<script>
  import Button from '../lib/button.svelte';
</script>

<div>
  <Button>default</Button>
  <Button class="small" on:click={() => console.log('Clicked')}>small</Button>
  <Button class="secondary">secondary</Button>
  <Button class="secondary small">secondary sm</Button>
</div>

<span class="material-icons">face</span>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style global>
  /* CSS controlling font sizes and faces here */
  @font-face {
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: normal;
    src: url(/CenturyGothic.ttf);
  }

  @font-face {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: normal;
    src: url(/Metropolis-Regular.otf);
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/MaterialIcons-Regular.woff2); /* For IE6-8 */
  }

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Century Gothic' !important;
  }

  p,
  span {
    font-family: 'Metropolis';
  }

  html * {
    font-family: 'Metropolis';
  }
</style>
