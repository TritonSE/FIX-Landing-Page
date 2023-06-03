<!--
  mobile_stats.svelte:
    A mobile-only component showing statistics about FixNation's clinic.
-->
<script lang="ts">
  import { onMount } from 'svelte';

  import stats1 from './img/stats1.png?format=avif';
  import stats2 from './img/stats2.png?format=avif';
  import stats3 from './img/stats3.png?format=avif';
  import stats4 from './img/stats4.png?format=avif';
  import stats5 from './img/stats5.png?format=avif';
  import stats6 from './img/stats6.png?format=avif';

  type RowData = {
    stat: string;
    text: string;
  };

  const rows: RowData[] = [
    {
      stat: '#1',
      text: 'largest clinic for homeless cats',
      image: stats1,
    },
    {
      stat: '220k',
      text: 'total cats spayed or neutered',
      image: stats2,
    },
    {
      stat: '21%',
      text: 'of cats abandoned because of their residency',
      image: stats3,
    },
    {
      stat: '12k',
      text: 'TNR volunteers trained',
      image: stats4,
    },
    {
      stat: '89%',
      text: 'profits go directly to FixNation programs',
      image: stats5,
    },
    {
      stat: '35%',
      text: 'cats acquired as strays',
      image: stats6,
    }
  ];

  let width: any;
  let el: any,
    boxes: any = [],
    focused = 0,
    x = 0;

  onMount(() => {
    el.addEventListener('scroll', () => {
      focused = Math.floor(el.scrollLeft / width);
    });
  });
</script>

<div bind:clientWidth={width} class="container">
  <div bind:this={el} class="flex-container">
    <div class="stat-container">
      {#each rows as { stat, text, image }, i}
        <div bind:this={boxes[i]} class="card">
          <img src={image} alt="stats pictures" loading="lazy" />
          <div class="text-container">
            <h1>{stat}</h1>
            <p id="text-{i}">{text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="nav-container">
    <button
      class="arrow flex-center"
      class:active={boxes[focused - 1]}
      on:click={() => {
        if (!boxes[focused - 1]) return;
        boxes[focused - 1].scrollIntoView({ block: 'nearest', inline: 'center' });
      }}
    >
      <span class="material-icons">arrow_back_ios</span>
    </button>
    {#each new Array(rows.length) as _, i}
      <div
        class="dot"
        class:active={i === focused}
        on:click={() => {
          boxes[i].scrollIntoView({ block: 'nearest', inline: 'center' });
        }}
      />
    {/each}
    <button
      class="arrow flex-center"
      class:active={boxes[focused + 1]}
      on:click={() => {
        if (!boxes[focused + 1]) return;
        boxes[focused + 1].scrollIntoView({ block: 'nearest', inline: 'center' });
      }}
    >
      <span class="material-icons">arrow_forward_ios</span>
    </button>
  </div>
</div>

<style>
  .container {
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  .flex-container {
    justify-content: space-between;
    align-items: center;
    color: var(--color-secondary-accent);

    overscroll-behavior: contain;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  /* https://stackoverflow.com/questions/47505426/html-horizontal-scrollbar-for-card-divs */
  .stat-container {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .card {
    position: relative;
    max-width: 100%;
    padding: 0.1rem;
    flex: 0 0 33.333%;
    margin-right: 7vw;
    margin-left: 2.5vw;

    scroll-snap-align: center;
  }

  .card img {
    width: 85vw;
    height: auto;
    border-radius: 2.5vw;
    margin: auto;
  }

  .text-container {
    position: absolute;
    left: 17%;
    bottom: 25%;

    height: 57vw;
    width: 57vw;

    background: rgba(0, 142, 126, 0.75);
    box-shadow: 0px 0.3vw 0.3vw rgba(0, 0, 0, 0.25);
    border-radius: 1.2vw;
  }

  .text-container h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 17vw;
    line-height: 100%;
    font-family: 'Rubik', sans-serif !important;

    text-align: center;
    letter-spacing: 0.02em;

    color: #ffffff;
  }

  .text-container p {
    position: absolute;
    left: 9.5%;
    top: 50%;
    width: 48.3vw;

    font-style: normal;
    font-weight: 500;
    font-size: 4.5vw;
    line-height: 150%;

    text-align: center;
    letter-spacing: 0.02em;
    word-wrap: break-word;

    color: #ffffff;
  }

  .text-container #text-5 {
    width: 46.4vw;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -12% auto 5%;
    width: 40%;
  }

  .arrow {
    margin: 0;
    background: transparent;
    border: none;
    color: var(--color-gray-darker);
    transition: color 0.2s;
    cursor: pointer;
  }
  .arrow span {
    font-size: 12pt;
  }

  .arrow.active {
    color: var(--color-secondary-accent);
  }

  .dot {
    width: 2vw;
    height: 2vw;
    border-radius: 1vw;
    margin-top: 1vw;
    margin-right: 1vw;
    margin-bottom: 0.5vw;
    background: var(--color-gray-darker);
    float: left;
    transition: background 0.2s;
    cursor: pointer;
  }
  .dot.active {
    background: var(--color-secondary-accent);
  }

  @media screen and (max-width: 950px) {
    #mission-statement {
      margin: 6rem 1rem 2rem;
    }
    .flex-container {
      margin: 0 4rem 2rem;
    }
  }

  @media screen and (max-width: 650px) {
    .flex-container {
      margin: 0 0 30vw 0;
    }
  }
</style>
