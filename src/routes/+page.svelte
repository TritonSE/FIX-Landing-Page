<script>
  import Masthead from '$lib/masthead.svelte';
  import Stats from '$lib/stats.svelte';
  import CatStories from '$lib/cat_stories/index.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
  import GetInvolved from '../lib/get_involved/index.svelte';
  import Footer from '$lib/footer.svelte';
  // MVP "Get Involved" section:
  // import Involved from '$lib/involved.svelte';
</script>

<Masthead />
<Stats />
<CatStories />
<CatSuperhero />
<GetInvolved />
<!-- <Involved /> -->
<Footer />

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
  <title>FixNation</title>
</svelte:head>
