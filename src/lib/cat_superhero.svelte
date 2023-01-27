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

  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="bubble">
  <h1 class="header-main">How to Become a</h1>
  <h1 class="header-comics">Cat Superhero</h1>
  <img class="cat" src="/roadmap/hero.svg" alt="Cat superhero" />
</div>

<div class="roadmap">
  <div class="list">
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

  <svg
    class="road"
    width="37"
    height={windowWidth >= 350 ? '650' : '750'}
    viewBox={windowWidth >= 350 ? '0 0 37 650' : '0 0 37 750'}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="37" height={windowWidth >= 350 ? '645' : '745'} rx="18.5" fill="#008E7E" />
    <line x1="18" y1="750" x2="18" y2="0" stroke="white" stroke-width="2" stroke-dasharray="8 10" />
  </svg>
</div>

<style>
  @media screen and (max-width: 600px) {
    h1,
    p {
      color: var(--color-secondary-accent);
    }

    .header-main,
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

    .bubble {
      width: 100vw;
    }

    .road {
      position: absolute;
      top: -6rem;
      left: 1rem;
      z-index: -2;
    }

    .roadmap {
      position: relative;
      top: -4rem;
    }

    .cat {
      height: auto;
      width: 5rem;
      float: right;
    }

    .list {
      margin: 8rem 0 0 1.25rem;
    }

    .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    .row img {
      width: 1.625rem;
    }

    .row img.shadow {
      position: relative;
      left: -1.5rem;
      top: 0.125rem;
      z-index: -1;
    }

    .row .text {
      flex: 1;
    }
    .row .text h1 {
      font-size: 20px;
      margin: 0;
      text-transform: uppercase;
    }
    .row .text p {
      font-size: 14px;
      margin: 0 0 1.375rem 0;
    }
  }
</style>
