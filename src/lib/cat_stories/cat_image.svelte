<script>
  export let image_url = '';
</script>

<img src={image_url} alt="" />

<style>
  img {
    filter: drop-shadow(16px 16px 0px #58c3af);
    width: 100%;
  }

  img:hover {
    filter: drop-shadow(16px 16px 0px #bbd532);
  }

  @media screen and (max-width: 900px) {
    img {
      filter: drop-shadow(8px 8px 0px #58c3af);
    }

    img:hover {
      filter: drop-shadow(8px 8px 0px #bbd532);
    }
  }
</style>
