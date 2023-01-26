<button on:click class:small={$$props.small} class:secondary={$$props.secondary}>
  <slot />
</button>

<style>
  button {
    background-color: var(--color-secondary);
    color: white;
    width: 100px;
    height: 48px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-dark);
  }

  button:disabled {
    background-color: var(--color-primary-darkest);
  }

  button:active {
    background-color: var(--color-gray);
  }

  .small {
    min-width: 84px;
    height: 40px;
  }

  .secondary {
    background-color: transparent;
    color: var(--color-primary);
    font-weight: bold;
  }

  .secondary:hover {
    background-color: var(--color-secondary);
    color: white;
  }

  .secondary:active {
    background-color: var(--color-gray);
  }
</style>
