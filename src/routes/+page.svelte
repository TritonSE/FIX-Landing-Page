<script>
  import Footer from '$lib/footer.svelte';
  import Involved from '$lib/involved.svelte';
</script>

<div class="flex-container">
  <Involved />
  <Footer />
</div>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
  }
</style>
