<!--
  button.svelte:
    A reusable button component.
    Comes in small, secondary, and fill (non-wrapping) variants.
-->
<script>
  export let small = false;
  export let secondary = false;
  export let fill = false;
  export let style = '';
</script>

<button on:click class:small class:secondary class:fill {style}>
  <slot />
</button>

<style>
  button {
    background-color: var(--color-secondary);
    color: white;
    width: 100px;
    height: 48px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-dark);
  }

  button:disabled {
    background-color: var(--color-primary-darker);
  }

  button:active {
    background-color: var(--color-gray);
  }

  .small {
    min-width: 84px;
    height: 40px;
  }

  .secondary {
    background-color: var(--color-gray-lightest);
    color: var(--color-primary);
    font-weight: 400;
  }

  .secondary:hover {
    background-color: var(--color-secondary);
    color: white;
  }

  .secondary:active {
    background-color: var(--color-gray);
  }

  .fill {
    width: unset !important;
    padding: 12px 24px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 600px) {
    button {
      font-size: 12px;
    }
  }
</style>
