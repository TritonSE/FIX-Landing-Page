<script>
  import { fade, fly } from 'svelte/transition';

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

<svelte:window on:keydown={handleKeyPress} />

{#if open}
  <div class="root" on:keypress={handleKeyPress}>
    <div
      class="background-shadow"
      on:click={onClose}
      on:keypress={handleKeyPress}
      transition:fade
    />
    <div class="overlay" transition:fly={{ x: 200 }}>
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
    width: 100%;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    right: 0;
    width: 70%;
    max-width: 70%;
    background-color: #f0f4f4;
  }

  @media screen and (max-width: 1000px) {
    .overlay {
      width: 100%;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    .root {
      display: none;
    }
  }
</style>
