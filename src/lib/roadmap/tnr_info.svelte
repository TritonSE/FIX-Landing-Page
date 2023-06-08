<div class="root">
  <div class="bubbles centered">
    <div class="tnr-bubble centered">
      <img src="/roadmap/bubble.svg" alt="Speech bubble" loading="lazy" />
      <h1 class="text">Trap Neuter & Return?</h1>
    </div>
    <div class="what-is-it-bubble centered">
      <img src="/tnr_info/narrow_bubble.svg" alt="Narrow speech bubble" loading="lazy" />
      <h1 class="text">What is it?</h1>
    </div>
  </div>

  <img src="/tnr_info/person.svg" class="person-image" alt="A person pointing" loading="lazy" />
  <p>
    Trap-Neuter-Return (TNR) is is the most humane and effective way to manage community cat
    populations. Volunteers capture homeless cats and kittens in special traps, take them to a vet
    or spay/neuter clinic for surgery, then return them the next day to where they were found.
    During their procedure, cats also have one ear ‘tipped’. This easy-to-see marker tells other
    trappers that a cat is already “fixed”. Community cats that are sterilized are often healthier
    and live longer than other free-roaming kitties!
  </p>
</div>

<style>
  .root {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 120px 12% 120px 12%;
  }

  .bubbles {
    margin-bottom: -10px;
    position: absolute;
    top: 0;
    left: 280px;
    justify-content: start !important;
    gap: 65px;
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
    white-space: nowrap;
    position: relative;
    z-index: 3;
    font-size: 36px;
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
      font-size: 24px;
    }

    p {
      margin-left: 25px;
      margin-top: 32px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 675px) {
    .root {
      flex-direction: column;
    }

    .bubbles {
      top: 20px;
      right: 120px;
      flex-direction: column;
      gap: 50px;
    }

    .person-image {
      width: 200px;
    }

    .text {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 550px) {
    .person-image {
      margin-top: 120px;
    }
  }
</style>
