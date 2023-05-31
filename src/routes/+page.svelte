<!--
  +page.svelte:
    App entrypoint.
-->
<script>
  import Masthead from '$lib/masthead.svelte';
  import Stats from '$lib/stats/stats.svelte';
  import CatStories from '$lib/cat_stories/index.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
  import GetInvolved from '../lib/get_involved/index.svelte';
  import Footer from '$lib/footer.svelte';
  import About from '$lib/about.svelte';
  import FindFixnation from '$lib/find_fixnation.svelte';

  import '../app.css';
  import NavbarManager from '$lib/navbar/navbar_manager.svelte';
</script>

<NavbarManager />
<Masthead />
<About />
<Stats />
<CatStories />
<CatSuperhero />
<GetInvolved />
<FindFixnation />
<Footer />

<svelte:head>
  <title>FixNation</title>
</svelte:head>

<style global>
  /*
   * Note: SvelteKit complains about non-scopable styles here,
   *   but the URL substitution used for fonts requires styles
   *   to be present in .svelte files (rather than .css files)
   */
  @font-face {
    font-family: 'ITC Avant Garde';
    font-style: normal;
    font-weight: normal;
    src: url(@base/fonts/ITC_Avant_Garde.woff);
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    src: url(@base/fonts/Avenir.woff);
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: Bold;
    src: url(@base/fonts/Avenir_Bold.otf);
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: url(@base/fonts/Rubik_Bold.ttf);
  }

  @font-face {
    font-family: 'Comics';
    font-style: normal;
    font-weight: normal;
    src: url(@base/fonts/Comics.woff);
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(@base/fonts/Material_Icons.woff2); /* For IE6-8 */
  }
</style>
