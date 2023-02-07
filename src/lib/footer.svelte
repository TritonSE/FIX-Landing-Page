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
    line-height: 2vw;
    font-size: 1.5vw;
    text-align: center;
    vertical-align: bottom;
  }

  #blob-content {
    position: absolute;
    bottom: 12%;
    left: 5%;
  }

  #copyright {
    text-align: start;
    color: white;
    font-size: 1.7vw;
  }

  .btn {
    margin-right: 2vw;
    font-size: 1vw;
    padding: 0.7vw 2vw;
    border-radius: 4px;
    border: transparent;
    background-color: white;
    color: #008e7e;
  }

  @media screen and (max-width: 1200px) {
    #blob-content {
      position: absolute;
      bottom: 15%;
      left: 3%;
    }

    .btn {
      margin-right: 1vw;
    }

    #copyright {
      text-align: start;
      color: white;
      font-size: 1.5vw;
    }
  }
  @media screen and (max-width: 950px) {
    #blob-content {
      position: absolute;
      bottom: 20%;
      left: 3%;
    }

    #footer_blob {
      left: 50%;
      width: 60vw;
    }

    .btn {
      margin-right: 1rem;
      border-radius: 2px;
    }
  }
  @media screen and (max-width: 600px) {
    #blob-content {
      position: absolute;
      bottom: 12%;
      left: 6%;
    }

    #footer_blob {
      width: 65vw;
    }

    .btn {
      margin-right: 1vw;
      border-radius: 1px;
      font-size: 1.5vw;
    }

    #logo {
      width: 3vw;
      height: 4vw;
    }
  }
</style>
