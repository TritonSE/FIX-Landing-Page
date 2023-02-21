<script>
  import Stats from '$lib/stats.svelte';
  import CatStories from '$lib/cat_stories/index.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
  import Footer from '$lib/footer.svelte';
  import Involved from '$lib/involved.svelte';
</script>

<Stats />
<CatStories />
<CatSuperhero />
<Involved />
<Footer />

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
</svelte:head>
