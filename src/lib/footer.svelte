<script>
  import blob from '$lib/icons/blob.svg';
  import logo from '$lib/icons/logo.svg';
</script>

<div class="container">
  <div class="blob-image">
    <img src={blob} alt="footer blob" id="footer_blob" />
  </div>
  <div id="blob-content">
    <button class="btn">FixNation Website</button>
    <button class="btn">Sign up for Newsletter</button>
    <p id="copyright">© 2020 FixNation, Inc. All Rights Reserved.</p>
  </div>
  <div id="banner">
    <img src={logo} alt="TSE logo" id="logo" /> Built for free by
    <a href="https://tse.ucsd.edu/">Triton Software Engineering</a>
  </div>
</div>

<style>
  .container {
    position: relative;
  }

  #footer_blob {
    width: 57%;
    margin: 0;
    vertical-align: bottom;
    z-index: -1;
  }

  #logo {
    vertical-align: middle;
  }

  #banner {
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    line-height: 44px;
    text-align: center;
    vertical-align: bottom;
  }

  #blob-content {
    position: absolute;
    bottom: 15%;
    left: 6%;
  }

  #copyright {
    text-align: center;
    color: white;
    font-size: 24px;
  }

  .btn {
    margin-right: 2rem;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    border: transparent;
    background-color: white;
    color: #008e7e;
  }

  @media screen and (max-width: 950px) {
  }
  @media screen and (max-width: 650px) {
  }
</style>
