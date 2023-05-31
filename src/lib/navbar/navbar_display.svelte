<!--
  navbar_display.svelte: 
    Manages the display/UI of the navbar, decoupled from the scrolling logic in the NavbarManager
-->

<script lang="ts">
  import { base } from '$app/paths';
  /**
   * Current step (which cat face to display, based on how far scrolled the user is)
   */
  export let step: number;

  /**
   * The user's current percentage (0 to 100) scrolled through the website
   */
  export let scrollPercentage: number;
</script>

<div class="container">
  <div class="filled" style="width: {scrollPercentage}%" />
  <img
    class="cat-face"
    src="{base}/navbar_icons/navbar{step}.svg"
    alt="A cat face"
    style="left: {scrollPercentage}%"
  />
</div>

<style>
  .container {
    position: fixed;
    top: 30px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 44px;
    border-radius: 10px;
    background-color: #f1b29e;
  }

  .filled {
    background-color: #b24000;
    height: 100%;
    border-radius: 10px;
  }

  .cat-face {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
