<!--
  card.svelte:
    A flippable card with an outbound link.
-->
<script lang="ts">
  import CardBody from './card_body.svelte';

  export let card = {};
</script>

<a class="container" target="_blank" rel="noreferrer noopener" href={card.link_url}>
  <CardBody {...card} />
</a>

<style>
  a {
    text-decoration: none;
  }
</style>
