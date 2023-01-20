<script>
  import CatImage from './cat_image.svelte';
  import Shadow from '$lib/assets/cat_stories/shadow.png';
  import Paw from './paw.svelte';
</script>

<div>
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h2>
  <div class="stories-grid">
    <CatImage image_url="/cat_stories/shadow.png" />
    <Paw name="Shadow" />
  </div>
</div>

<style>
  h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
