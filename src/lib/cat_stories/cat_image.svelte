<!--
  cat_image.svelte:
    An image with a drop shadow that changes from blue to green on hover.
-->
<script>
  export let image_url = '';
  export let image_alt = '';
</script>

<img src={image_url} alt={image_alt} on:click on:keydown />

<style>
  img {
    border-radius: 25px;
    width: 100%;
    cursor: pointer;
  }
</style>
