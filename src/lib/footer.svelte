<!--
  footer.svelte:
    A footer component with outbound links and TSE info.
-->
<script>
  import Button from '$lib/button.svelte';
</script>

<div class="container">
  <div class="blob-image">
    <img src="/icons/blob.svg" alt="footer blob" id="footer_blob" />
  </div>
  <div id="blob-content">
    <a href="https://fixnation.org">
      <Button secondary small fill>FixNation Website</Button>
    </a>
    <div class="spacer" />
    <a href="https://fixnation.org/#fca_eoi_form_8649">
      <Button secondary small fill>Sign up for Newsletter</Button>
    </a>
    <p id="copyright">© 2020 FixNation, Inc. All Rights Reserved.</p>
  </div>
  <div id="banner">
    <img src="/icons/logo.svg" alt="TSE logo" id="logo" />
    <span>Built for free by&nbsp;</span>
    <a href="https://tse.ucsd.edu/">Triton Software Engineering</a>
  </div>
</div>

<style>
  .container {
    position: relative;
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
