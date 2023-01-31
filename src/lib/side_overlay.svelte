<script>
  /**
   * @type boolean
   */
  export let open;

  /**
   * @type {() => void}
   */
  export let onClose;

  /**
   * @param {{ key: string; }} event
   */
  function handleKeyPress(event) {
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
  @keyframes slide-overlay {
    from {
      right: -70%;
    }
    to {
      right: 0;
    }
  }

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
    width: 100%;
  }

  .overlay {
    position: absolute;
    right: 0;
    width: 70%;
    max-width: 70%;
    background-color: #f0f4f4;
    animation-name: slide-overlay;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
  }

  @media screen and (max-width: 600px) {
    .root {
      display: none;
    }
  }
</style>
