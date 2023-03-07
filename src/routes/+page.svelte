<script>
  import Masthead from '$lib/masthead.svelte';
  import Stats from '$lib/stats.svelte';
  import CatStories from '$lib/cat_stories/index.svelte';
  import CatSuperhero from '../lib/cat_superhero.svelte';
  import Modal from '$lib/modal.svelte';
  let open = false;
  import Footer from '$lib/footer.svelte';
  import Involved from '$lib/involved.svelte';
</script>

<Masthead />
<Stats />
<CatStories />
<button
  on:click={() => {
    open = !open;
  }}
>
  Modal
</button>

<Modal {open} />

<CatSuperhero />
<Involved />
<Footer />

<svelte:head>
  <link rel="stylesheet" href="/global.css" />
  <title>FixNation</title>
</svelte:head>
