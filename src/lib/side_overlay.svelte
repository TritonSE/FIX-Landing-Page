<script>
  /**
   * @type boolean
   */
  export let open;
  /**
   * @type any
   */
  export let onClose;

  /**
   * @param {{ key: string; }} event
   */
  function handleKeyPress(event) {
    console.log('Pressed', event);
    if (event.key === 'Escape') {
      onClose();
    }
  }
</script>

{#if open}
  <div class="root" on:keypress={handleKeyPress}>
    <div class="background-shadow" on:click={onClose} on:keypress={handleKeyPress} />
    <div class="overlay">
      <slot />
    </div>
  </div>
{/if}

<style>
  .root {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    z-index: 100;
  }

  .background-shadow {
    background: rgba(0, 0, 0, 0.25);
    flex-basis: 30%;
  }

  .overlay {
    flex-basis: 70%;
    background-color: #f0f4f4;
  }

  @media screen and (max-width: 600px) {
    .root {
      display: none;
    }
  }
</style>
