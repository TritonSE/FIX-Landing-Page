<script>
  import Button from '$lib/button.svelte';

  import blob from '$lib/icons/blob.svg';
  import logo from '$lib/icons/logo.svg';
  import road from '$lib/icons/mobile_footer.svg';

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

<div class="container" style="height: {visible ? '150vh' : '70vh'}">
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
  <img src={road} alt="footer road" id="road" style="top: {visible ? '38rem' : '15rem'}" />
  <div
    id="road-content"
    style="top: {visible ? '770px' : '450px'}; left: {visible ? '120px' : '120px'}"
  >
    <a href="https://fixnation.org">
      <Button small fill>FixNation Website</Button>
    </a>
    <div class="spacer" />
    <Button small secondary fill <button on:click={() => ((visible = true), (showForm = true))}>
      Sign up for Newsletter</Button
    >
  </div>
  <div id="banner">
    <img src={logo} alt="TSE logo" id="logo" />
    <span>Built for free by&nbsp;</span>
    <a href="https://tse.ucsd.edu/">Triton Software Engineering</a>
  </div>

  {#if visible}
    <div class="animated_blob-container" transition:fly={{ x: 200, y: 200, duration: 700 }}>
      <div id="animated_blob">
        <img src={animated_blob} alt="animated footer blob" id="animated_footer_blob" />
      </div>
    </div>
  {/if}
  {#if showForm && !submitted}
    <div id="newsletter_input" in:fly={{ x: 200, y: 200, duration: 500 }}>
      <h4>Sign up for our newsletter to stay in touch!</h4>
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
    overflow: hidden;
    position: relative;
    z-index: 0;
    transition: height 0s;
  }

  input {
    margin: 0.5rem;
    text-align: center;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: transparent;
    height: 2rem;
    width: 18rem;
  }

  #newsletter_input,
  #thank-you {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 45rem;
    right: 30rem;
  }

  #thank-you {
    text-align: center;
    color: var(--color-white);
  }

  #newsletter_input h4 {
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

  #animated_footer_blob {
    vertical-align: bottom;
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
    max-width: 90vw;
    min-width: 40rem;
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

  #road {
    width: 50rvw;
    margin: 0;
    z-index: -4;
    max-width: 50rem;
    min-width: 35rem;
    width: 100%;
    position: relative;
    display: none;
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

  #blob-content,
  #road-content {
    overflow: hidden;
    position: absolute;
    bottom: 52px;
    left: 12px;
  }

  #road-content {
    display: none;
    left: 120px;
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

  @media only screen and (min-width: 1200px) {
    #blob-content {
      bottom: 72px;
      left: 32px;
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1200px) {
    #blob-content {
      bottom: 72px;
      left: 32px;
    }
    #newsletter_input,
    #thank-you {
      top: 50rem;
      right: 20rem;
    }
  }
  @media only screen and (max-width: 1000px) {
    #newsletter_input,
    #thank-you {
      top: 55rem;
      right: 12rem;
    }
    #newsletter_input h4 {
      font-size: 18px !important;
    }
  }
  @media only screen and (max-width: 700px) {
    #newsletter_input,
    #thank-you {
      top: 56rem;
      right: 2rem;
    }
    #newsletter_input h4 {
      margin-bottom: 0;
      font-size: 18px !important;
    }
  }
  @media screen and (max-width: 600px) {
    #newsletter_input,
    #thank-you {
      top: 60rem;
    }
    #thank-you {
      right: 5rem;
    }
    #footer_blob,
    #blob-content {
      display: none;
    }
    #road,
    #road-content {
      display: block;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 0rem 1rem;
    }
    #animated_footer_blob {
      bottom: -10;
    }
  }

  @media only screen and (max-width: 400px) {
    #road-content {
      bottom: 400px;
    }
    #banner {
      flex-direction: column;
      min-height: 85px;
    }
    #newsletter_input input {
      margin: 0.5rem;
    }
  }
</style>
