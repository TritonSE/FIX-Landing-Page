<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="root">
  <div class="bubbles centered">
    <div class="tnr-bubble centered">
      <img src="{base}/roadmap/bubble.svg" alt="Speech bubble" loading="lazy" />

      <h1 class="text">TRAP NEUTER & RETURN?</h1>
    </div>
    <div class="what-is-it-bubble centered">
      <img src="{base}/tnr_info/narrow_bubble.svg" alt="Narrow speech bubble" loading="lazy" />
      <h1 class="text">WHAT IS IT?</h1>
    </div>
  </div>

  <img
    src="{base}/tnr_info/person.svg"
    class="person-image"
    alt="A person pointing"
    loading="lazy"
  />
  <p>
    Lorem ipsum dolor sit amet consectetur. In sit et orci pellentesque tellus. Id ut elementum hac
    enim arcu. Dolor bibendum pulvinar viverra condimentum tellus enim. Nec ut risus vel lobortis
    non. Netus turpis nunc curabitur sed tincidunt tellus quis eros. Proin pellentesque elit felis
    morbi donec vulputate habitasse nulla. Mauris venenatis amet at morbi commodo penatibus eget
    eget faucibus.
  </p>
</div>

<style>
  .root {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 120px 120px 120px 50px;
  }

  .bubbles {
    margin-bottom: -10px;
    position: absolute;
    top: 0;
    left: 280px;
    justify-content: start !important;
    width: 100vw;
    gap: 20px;
  }

  .centered {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .tnr-bubble {
    position: relative;
    z-index: 2;
  }

  .tnr-bubble img {
    position: absolute;
    width: 575px;
  }

  .text {
    position: relative;
    z-index: 3;
    font-size: 30px;
    color: var(--color-secondary-accent);
    font-family: 'Comics', sans-serif !important;
  }

  .what-is-it-bubble {
    position: relative;
    z-index: 1;
  }

  .what-is-it-bubble img {
    position: absolute;
    width: 400px;
  }

  p {
    margin-left: 75px;
    margin-top: 75px;
    font-size: 24px;
  }

  @media screen and (max-width: 1100px) {
    .root {
      padding: 80px 60px 60px 20px;
    }

    .bubbles {
      left: 150px;
    }

    .person-image {
      width: 250px;
    }

    .tnr-bubble img {
      width: 375px;
    }

    .what-is-it-bubble img {
      width: 275px;
    }

    .text {
      font-size: 20px;
    }

    p {
      margin-left: 25px;
      margin-top: 25px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 675px) {
    .root {
      flex-direction: column;
    }

    .bubbles {
      top: 20px;
      left: 80px;
      flex-direction: column;
      gap: 50px;
    }

    .person-image {
      width: 200px;
    }

    .text {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
</style>
