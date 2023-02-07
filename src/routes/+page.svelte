<script>
  import Stats from '$lib/stats.svelte';
  import CatStories from '$lib/cat_stories/index.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
</script>

<Stats />
<CatStories />
<CatSuperhero />

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
</svelte:head>
