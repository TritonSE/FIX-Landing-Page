<script>
  export let name;
</script>

<div>
  <h2>{name}</h2>
  <img src="/cat_stories/paw.svg" />
</div>

<style>
  div {
    padding: 42px 0px 0px 50px;
    position: relative;
  }
  h2 {
    position: relative;
    font-size: 32px;
    font-weight: 700;
    z-index: 2;
    margin: 0;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
</style>
