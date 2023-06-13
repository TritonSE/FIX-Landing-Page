<!--
  footer.svelte:
    A footer component with outbound links and TSE info.
-->
<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  import Button from '$lib/button.svelte';

  import AnimatedBlob from './animated_blob.svelte';

  const NEWSLETTER_ENDPOINT = 'https://fixnation.org/wp-admin/admin-ajax.php';

  let ref;
  let newsletter = false,
    done = false;
  let email = '';
  let emailError = false,
    failed = false;

  function clickOutside(element) {
    const handleClick = (event) => {
      if (checkClickOutsideBlob(event)) {
        newsletter = false;
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  const checkClickOutsideBlob = (event) => {
    const blobSvg = document.getElementById('newsletter-blob');
    const newsletterContainer = document.querySelector('.newsletter-content');
    if (event.target === blobSvg.children[0] || newsletterContainer.contains(event.target)) {
      return false;
    }
    event.preventDefault();
    return true;
  };
</script>

{#if newsletter}
  <div
    class="cover"
    transition:fade
    on:click={() => {
      newsletter = false;
    }}
  />
{/if}
<div class="container">
  <div class="desktop">
    <div class="blob-image">
      <img src="/icons/blob.svg" alt="footer blob" id="footer_blob" loading="lazy" />
    </div>
    <div id="blob-content">
      <a href="https://fixnation.org">
        <Button secondary small fill>FixNation Website</Button>
      </a>
      <div class="spacer" />
      <Button
        secondary
        small
        fill
        on:click={() => {
          email = '';
          done = false;
          newsletter = true;
        }}>Sign Up for Newsletter</Button
      >
      <p id="copyright">© 2020 FixNation, Inc. All Rights Reserved.</p>
    </div>
    <div id="banner">
      <img src="/icons/logo.svg" alt="TSE logo" id="logo" loading="lazy" />
      <span>Built for free by&nbsp;</span>
      <a href="https://tse.ucsd.edu/" target="_blank" rel="noreferrer"
        >Triton Software Engineering</a
      >
    </div>
  </div>

  <div class="mobile">
    <img src="/icons/road.svg" alt="footer road" class="road" loading="lazy" />
    <div class="buttons">
      <a href="https://fixnation.org" target="_blank" rel="noreferrer noopener">
        <Button style="width: 14rem; margin-bottom: 1rem">FixNation Website</Button>
      </a>
      <div class="spacer" />
      <Button
        secondary
        style="width: 14rem; border: 1.5px solid var(--color-primary)"
        on:click={() => {
          newsletter = true;
        }}
      >
        Sign Up for Newsletter
      </Button>
    </div>
  </div>

  {#if newsletter}
    <div
      bind:this={ref}
      in:fly={{ x: 100, y: 100 }}
      out:fly={{ delay: 500, x: 100, y: 100 }}
      class="newsletter"
    >
      <div class="newsletter-content">
        {#if !done}
          <div transition:fade={{ duration: 200 }} use:clickOutside>
            <h1>Sign up for our newsletter to stay in touch!</h1>
            <form
              on:submit={async (e) => {
                e.preventDefault();

                failed = false;
                emailError = !email.trim() || !email.includes('@');
                if (emailError) return;

                try {
                  const body = new URLSearchParams();
                  body.append('email', email);
                  body.append('name', '');
                  body.append('action', 'fca_eoi_subscribe');
                  body.append('list_id', '9a24fade51');
                  body.append('form_id', '8649');
                  body.append('nonce', 'b17279bdd6');
                  body.append('timezone', 'America/Los_Angeles');
                  body.append('content_granted', 'unknown');
                  const response = await fetch(NEWSLETTER_ENDPOINT, {
                    method: 'POST',
                    body
                  });
                  if (response.ok) {
                    done = true;
                    setTimeout(() => {
                      newsletter = false;
                    }, 400);
                  } else {
                    failed = true;
                  }
                } catch (e) {
                  failed = true;
                }
              }}
            >
              <p class="error" class:visible={failed}>Failed to load, please try again.</p>
              <input
                placeholder="Email"
                type="email"
                bind:value={email}
                style="border: {emailError ? '1px solid red' : '1px solid transparent'}"
              />
              <br />
              <Button small fill>Sign Up</Button>
            </form>
          </div>
        {/if}
        <div
          class="thanks"
          style="opacity: {done ? 1 : 0}; transition: opacity 0.2s; transition-delay: 0.2s"
        >
          <h1>Thank you!</h1>
        </div>
      </div>
      <div class="newsletter-blob-image"><AnimatedBlob /></div>
    </div>
  {/if}
</div>

<style>
  .cover {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .container {
    position: relative;
    overflow: hidden;
  }

  .newsletter {
    position: fixed;
    bottom: -18vw;
    right: -50vw;
    z-index: 999;

    width: 200vw;
    height: 72vw;
    min-height: 25rem;
    max-height: 50rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .newsletter-content {
    position: relative;
    z-index: 2;
  }
  .newsletter-blob-image {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
  }

  .newsletter > div {
    width: 10rem;
    margin: 0 auto;
  }
  .newsletter .thanks {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    position: relative;
    top: -4rem;
    z-index: -1;
  }
  .newsletter h1 {
    font-size: 18px;
    color: var(--color-white);
  }
  .newsletter p.error {
    color: red;
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 8pt;
  }
  .newsletter p.error.visible {
    opacity: 1;
  }
  .newsletter input {
    width: 10rem;
    height: 2rem;
    margin-bottom: 0.5rem;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: transparent;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  @media only screen and (min-width: 1600px) {
    .newsletter {
      bottom: -10vw;
    }
  }

  .mobile {
    display: none;
    position: relative;
  }
  .mobile .road {
    width: 100vw;
  }
  .mobile .buttons {
    position: absolute;
    top: 22vw;
    left: 22vw;
    margin-right: 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }

  .blob-image {
    overflow: hidden;
  }

  #footer_blob {
    width: 65vw;
    margin: 0;
    vertical-align: bottom;
    z-index: -1;
    max-width: 50rem;
    min-width: 35rem;
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
