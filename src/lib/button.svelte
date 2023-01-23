<script>
</script>

<button on:click class={$$props.class}>
  <slot />
</button>

<style>
  button {
    background-color: #58c3af;
    color: white;
    width: 100px;
    height: 48px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
  }

  button:hover {
    background-color: #1f9c8e;
  }

  button:disabled {
    background-color: #149788;
  }

  button:active {
    background-color: #f0f4f4;
  }

  .small {
    width: 84px;
    height: 40px;
  }

  .secondary {
    background-color: transparent;
    color: #008e7e;
  }

  .secondary:hover {
    background-color: #58c3af;
    color: white;
  }
</style>
