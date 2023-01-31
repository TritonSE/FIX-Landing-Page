<script>
  export let image_url = '';
  export let image_alt = '';
</script>

<img src={image_url} alt={image_alt} />

<style>
  img {
    filter: drop-shadow(16px 16px 0px var(--color-secondary));
    width: 100%;
    cursor: pointer;
  }

  img:hover {
    filter: drop-shadow(16px 16px 0px var(--color-accent));
  }

  @media screen and (max-width: 900px) {
    img {
      filter: drop-shadow(8px 8px 0px var(--color-secondary));
    }

    img:hover {
      filter: drop-shadow(8px 8px 0px var(--color-accent));
    }
  }
</style>
