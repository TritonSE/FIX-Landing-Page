<script>
  const rows = [
    {
      title: 'Find',
      text: 'Find a cat who needs your help'
    },
    {
      title: 'Feed',
      text: 'Feed the cat in the afternoon and evening'
    },
    {
      title: 'Trap',
      text: 'Set trap, wait, trap cat and rejoice!'
    },
    {
      title: 'FixNation',
      text: 'Get free resources from FixNation and make an appointment'
    },
    {
      title: 'Hold',
      text: "Hold cat overnight until next day's surgery"
    },
    {
      title: 'Fix',
      text: 'Fix cat for free at FixNation'
    },
    {
      title: 'Hold',
      text: 'Hold cat overnight for recovery'
    },
    {
      title: 'Return',
      text: 'Return cat to where it was trapped'
    }
  ];
</script>

<div class="container">
  <div class="bubble">
    <h1 class="header-main">How to Become a</h1>
    <h1 class="header-comics">Cat Superhero</h1>
    <img class="cat" src="/roadmap/hero.svg" alt="Cat superhero" />
  </div>

  <div class="roadmap">
    {#each rows as { title, text }, i}
      <div class="row">
        <div class="marker">
          <img src="/roadmap/marker.svg" alt="Roadmap marker" />
          <img class="shadow" src="/roadmap/marker_shadow.svg" alt="Roadmap marker shadow" />
        </div>
        <div class="text">
          <h1>{i + 1}. {title}</h1>
          <p>{text}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Mobile variant only */
  @media screen and (max-width: 600px) {
    h1,
    p {
      color: var(--color-secondary-accent);
    }

    .container {
      position: relative;
      background: var(--color-gray);
    }

    /* Text bubble and cat image */
    .header-main {
      font-size: 2rem;
    }
    .header-comics {
      font-size: 2.5rem;
    }
    .header-main {
      margin: 0 0 0 4rem;
    }
    .header-comics {
      text-align: right;
      margin: 0 4rem 0 0;
    }
    .cat {
      height: auto;
      width: 5rem;
      float: right;
    }

    /* Roadmap, markers, and text */
    .roadmap {
      background-image: url(/roadmap/road.svg);
      background-repeat: no-repeat;
      background-size: auto 100%;
      padding-top: 6rem;
      margin: 0 1rem;
    }
    .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .marker {
      width: 2.3125rem;
      position: relative;
      z-index: 1;
    }
    .marker img {
      width: 1.625rem;
      position: absolute;
      left: 0.3rem;
    }
    .marker img.shadow {
      position: absolute;
      left: 0.675rem;
      top: 0.125rem;
      z-index: -1;
    }
    .text {
      flex: 1;
      padding-left: 1rem;
    }
    .text h1 {
      font-size: 20px;
      margin: 0;
      text-transform: uppercase;
    }
    .text p {
      font-size: 14px;
      margin: 0 0 1.375rem 0;
    }
  }
</style>
