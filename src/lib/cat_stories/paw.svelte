<script>
  export let name = '';
</script>

<div>
  <h2>{name}</h2>
  <img src="/cat_stories/paw.svg" alt="" />
</div>

<style>
  @font-face {
    font-family: 'itc_avant_garde_gothic_ltdemi';
    src: url('$lib/assets/fonts/itc_avant_garde_gothic_lt_demi_regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  div {
    padding: 42px 0px 0px 50px;
    position: relative;
  }
  h2 {
    position: relative;
    font-size: 32px;
    font-weight: 700;
    z-index: 2;
    margin: 0;
    color: #0c2b35;
    font-family: 'itc_avant_garde_gothic_ltdemi';
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100px;
    height: 87px;
  }

  @media screen and (max-width: 900px) {
    div {
      padding: 14px 0px 0px 24px;
    }

    h2 {
      font-size: 18px;
    }

    img {
      width: 48px;
      height: 43px;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      position: absolute;
      left: 16px;
      bottom: 16px;
      padding: 24px 0px 0px 24px;
    }

    h2 {
      color: white;
    }
  }
</style>
