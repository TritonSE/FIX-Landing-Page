<!--
  touch_card.svelte:
    Touchscreen variant of flippable card.
-->
<script lang="ts">
  import CardBody from './card_body.svelte';

  export let card = {};

  let flipped = false;
</script>

<button
  on:click={() => {
    flipped = !flipped;
  }}
  class="container"
>
  <CardBody {...card} {flipped} touch />
</button>

<style>
  button {
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
  }
</style>
