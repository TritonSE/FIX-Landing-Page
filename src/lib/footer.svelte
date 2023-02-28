<script>
  import Button from '$lib/button.svelte';

  import blob from '$lib/icons/blob.svg';
  import logo from '$lib/icons/logo.svg';

  import animated_blob from '$lib/icons/animated_blob.svg';
  import { fly } from 'svelte/transition';

  let visible = false;
  let showForm = false;
  let submitted = false;
  let name = '';
  let email = '';

  // Function to validate name and email fields before submitting the form
  function handleSubmit() {
    if (name.length > 0 && email.length > 0 && email.includes('@')) {
      submitted = true;
      showForm = false;
    } else {
      // Handle case where both fields are not submitted
    }
  }
</script>

<div class="container">
  <img src={blob} alt="footer blob" id="footer_blob" />
  <div id="blob-content">
    <a href="https://fixnation.org">
      <Button secondary small fill>FixNation Website</Button>
    </a>
    <div class="spacer" />
    <Button secondary small fill <button on:click={() => ((visible = true), (showForm = true))}>
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
    <div class="animated_blob-container" transition:fly={{ x: 200, y: 200, duration: 500 }}>
      <div id="animated_blob">
        <img src={animated_blob} alt="animated footer blob" id="animated_footer_blob" />
      </div>
    </div>
  {/if}
  {#if showForm}
    <div id="newsletter_input" transition:fly={{ x: 200, y: 200, duration: 500 }}>
      <p>Sign up for our newsletter to stay in touch!</p>
      <input id="name-input" bind:value={name} placeholder="Name" />
      <input id="email-input" bind:value={email} placeholder="Email" />
      <Button id="signup-button" small fill <button on:click={handleSubmit}>Sign Up</Button>
    </div>
  {/if}
  {#if submitted}
    <div id="thank-you">
      <h1>Thank you,<br />{name}!</h1>
      <Button
        small
        fill
        <button
        on:click={() => ((visible = false), (showForm = false), (submitted = false))}>Done</Button
      >
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
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: transparent;
    height: 2vw;
    width: 18vw;
  }

  #newsletter_input,
  #thank-you {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 20vw;
    right: 40vw;
  }

  #thank-you {
    text-align: center;
    color: white;
  }

  #newsletter_input p {
    white-space: nowrap;
    color: var(--color-white);
    font-weight: 900 !important;
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
