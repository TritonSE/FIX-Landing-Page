<script>
  import Button from '$lib/button.svelte';

  import blob from '$lib/icons/blob.svg';
  import logo from '$lib/icons/logo.svg';

  import animated_blob from '$lib/icons/animated_blob.svg';
  import { fly } from 'svelte/transition';

  let visible = false;
  let name = '';
  let email = '';
</script>

<div class="container">
  <img src={blob} alt="footer blob" id="footer_blob" />
  <div id="blob-content">
    <a href="https://fixnation.org">
      <Button secondary small fill>FixNation Website</Button>
    </a>
    <div class="spacer" />
    <Button secondary small fill <button on:click={() => (visible = true)}>
      Sign up for Newsletter</Button
    >
    <p id="copyright">© 2020 FixNation, Inc. All Rights Reserved.</p>
  </div>
  <div id="banner">
    <img src={logo} alt="TSE logo" id="logo" />
    <span>Built for free by&nbsp;</span>
    <a href="https://tse.ucsd.edu/">Triton Software Engineering</a>
  </div>

  {#if visible}
    <div id="newsletter_input" transition:fly={{ x: 200, y: 200, duration: 500 }}>
      <p>Sign up for our newsletter to stay in touch!</p>
      <input id="name-input" bind:value={name} placeholder="Name" />
      <input id="email-input" bind:value={email} placeholder="Email" />
      <Button id="signup-button" small fill <button on:click={() => (visible = true)}
        >Sign Up</Button
      >
    </div>
    <div class="animated_blob-container" transition:fly={{ x: 200, y: 200, duration: 500 }}>
      <div id="animated_blob">
        <img src={animated_blob} alt="animated footer blob" id="animated_footer_blob" />
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
    z-index: 0;
    height: 800px;
  }

  input {
    margin: 0.5rem;
    text-align: center;
  }

  #newsletter_input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 20vw;
    right: 40vw;
  }

  #newsletter_input p {
    white-space: nowrap;
    color: var(--color-white);
    font-weight: 900 !important;
  }

  #newsletter_input input {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: transparent;
    height: 2vw;
    width: 18vw;
  }

  #name-input {
    margin-top: 1rem;
  }

  #email-input {
    margin-bottom: 2rem;
  }

  .animated_blob-container {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -3;
    width: 50%;
    height: 100%;
  }

  #footer_blob {
    overflow: hidden;
    width: 65vw;
    margin: 0;
    position: absolute;
    bottom: 0;
    vertical-align: bottom;
    z-index: -1;
    max-width: 50rem;
    min-width: 35rem;
  }

  #animated_footer_blob {
    max-width: calc(100vw - 24px);
    vertical-align: bottom;
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
  }

  /* #blob_close {
    position: absolute;
    top: 70px;
    right: 20px;
    border: none;
    background-color: transparent;
    z-index: 1;
  } */

  #logo {
    margin-right: 0.5rem;
  }

  #banner {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 48px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  }

  #blob-content {
    position: absolute;
    bottom: 52px;
    left: 12px;
  }

  .spacer {
    display: inline-block;
    width: 2rem;
  }

  #copyright {
    text-align: left;
    color: var(--color-white);
    font-size: 16px;
    margin: 0;
  }

  @media only screen and (min-width: 1000px) {
    #blob-content {
      bottom: 72px;
      left: 32px;
    }
  }
  @media only screen and (max-width: 400px) {
    #blob-content {
      bottom: 90px;
    }
    #banner {
      flex-direction: column;
      min-height: 85px;
    }
  }
</style>
