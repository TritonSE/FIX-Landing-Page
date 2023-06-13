<!--
  +page.svelte:
    App entrypoint.
-->
<script>
  import NavbarManager from '$lib/navbar/navbar_manager.svelte';
  import Masthead from '$lib/masthead/masthead.svelte';
  import Stats from '$lib/stats/stats.svelte';
  import CatStories from '$lib/cat_stories/cat_stories.svelte';
  import TnrInfo from '$lib/roadmap/tnr_info.svelte';
  import CatSuperhero from '../lib/roadmap/cat_superhero.svelte';
  import ApplicationVideo from '$lib/roadmap/application_video.svelte';
  import GetInvolved from '../lib/get_involved/get_involved.svelte';
  import Footer from '$lib/footer/footer.svelte';
  import About from '$lib/about/about.svelte';
  import FindFixnation from '$lib/find_fixnation/find_fixnation.svelte';

  import '../app.css';
</script>

<NavbarManager />
<Masthead />
<About />
<Stats />
<CatStories />
<TnrInfo />
<CatSuperhero />
<ApplicationVideo />
<GetInvolved />
<FindFixnation />
<Footer />

<svelte:head>
  <title>FixNation</title>
  <meta
    name="description"
    content="Landing page for FixNation, a Los Angeles-based spay/neuter clinic"
  />
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
