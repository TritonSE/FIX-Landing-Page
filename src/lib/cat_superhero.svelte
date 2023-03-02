<!--
  cat_superhero.svelte:
    A roadmap with Trap-Neuter-Return information.
-->
<script lang="ts">
  type row = {
    title: string;
    text: string;
  };

  const rows: row[] = [
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
    <div class="crop">
      <img src="/roadmap/bubble.svg" alt="Speech bubble" />
    </div>
    <div class="header">
      <h1 class="main">how to become a</h1>
      <h1 class="comics">CAT SUPERHERO</h1>
      <img class="cat" src="/roadmap/hero.svg" alt="Cat superhero" />
    </div>
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
          <p class:first={i == 0}>{text}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @font-face {
    font-family: 'Comics';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/Comics.ttf);
  }

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
    .bubble {
      margin-bottom: -6rem;
    }
    .bubble .crop {
      position: absolute;
      z-index: 1;
      width: 100vw;
      overflow: hidden;
    }
    .crop img {
      width: 110%;
    }
    .bubble .header {
      position: relative;
      z-index: 2;
      height: 40vw;
      box-sizing: border-box;
      padding: 11vw 0 0 3vw;
    }
    .header .main {
      font-size: 6vw;
      margin: 0 0 0 20vw;
      white-space: nowrap;
      font-family: 'Comics', sans-serif !important;
    }
    .header .comics {
      font-family: 'Comics', sans-serif !important;
      font-size: 6vw;
      margin: 0 4rem 0 32vw;
      white-space: nowrap;
    }
    .header .cat {
      position: absolute;
      z-index: 1;
      width: 25vw;
      height: auto;
      top: 38vw;
      right: 2vw;
    }

    /* Roadmap, markers, and text */
    .roadmap {
      background-image: url(/roadmap/road.svg);
      background-repeat: no-repeat;
      background-size: auto 100%;
      padding-top: 6rem;
      margin: 0 1rem;
    }
    .roadmap .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .row .marker {
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
    .row .text {
      flex: 1;
      padding-left: 1rem;
    }
    .text h1 {
      font-family: 'Comics', sans-serif !important;
      font-size: 20px;
      margin: 0;
      text-transform: uppercase;
    }
    .text p {
      font-size: 14px;
      margin: 0 0 1.375rem 0;
    }
    .text p.first {
      width: 50vw;
    }
  }
</style>
