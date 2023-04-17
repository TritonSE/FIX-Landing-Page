<!--
  stats.svelte:
    A component showing statistics about FixNation's clinic.
-->
<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  type RowData = {
    stat: string;
    text: string;
  };

  const rows: RowData[] = [
    {
      stat: '#1',
      text: 'largest clinic for homeless cats'
    },
    {
      stat: '220k',
      text: 'total cats spayed or neutered'
    },
    {
      stat: '21%',
      text: 'of cats abandoned because of their residency'
    },
    {
      stat: '12k',
      text: 'TNR volunteers trained'
    },
    {
      stat: '89%',
      text: "Profits go directly to FixNation programs"
    },
    {
      stat: '35%',
      text: 'Cats acquired as strays'
    }
  ];

  let width: any;
  let el: any, boxes: any = [], focused = 0, x = 0;

	onMount(() => {
		el.addEventListener('scroll', () => {
			focused = Math.floor(el.scrollLeft / width);
		});
	});
</script>

<div bind:clientWidth={width} class="container">
  <p id="mission-statement">
    FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
    possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for
    the humane care of homeless cats.
  </p>
  <div bind:this={el} class="flex-container">

    <div class="stat-container">
      {#each rows as { stat, text }, i}

        <div bind:this={boxes[i]} class="card">
          <img src="{base}/stats/stats{i+1}.png" alt="stats pictures"/>
          <div class="text-container">
            <h1>{stat}</h1>
            <p id="text-{i}">{text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="nav-container">
    <input type="image" src="{base}/stats/arrow.png" class="left-arrow" alt="left arrow" class:active={!boxes[focused - 1]}
      on:click={() => {
        if (!boxes[focused - 1]) return;
        boxes[focused - 1].scrollIntoView({ block: 'nearest', inline: 'center' });
      }}

    />
    {#each new Array(rows.length) as _, i}
    <div class="dot" class:active={i === focused}></div>
    {/each}
    <input type="image" src="{base}/stats/arrow.png" class="right-arrow" class:active={!boxes[focused + 1]} alt="right arrow"
      on:click={() => {
        if (!boxes[focused + 1]) return;
        boxes[focused + 1].scrollIntoView({ block: 'nearest', inline: 'center' });
      }}
    />
  </div>

</div>

<style>
  @media screen and (max-width: 430px) {
    .container {
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;
    }

    #mission-statement {
      margin: 6rem 9rem;

      font-style: normal;
      font-weight: 500;
      font-size: 3.9vw;
      line-height: 150%;

      text-align: center;
      letter-spacing: 0.02em;

      color: #000000;
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
      padding: .10rem;
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

      background: rgba(0,142,126,0.75);
      box-shadow: 0px 0.3vw 0.3vw rgba(0, 0, 0, 0.25);
      border-radius: 1.2vw;
    }

    .text-container h1 p {
      margin: 0;
    }

    .text-container h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 17vw;
      line-height: 100%;

      text-align: center;
      letter-spacing: 0.02em;

      color: #FFFFFF;
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

      color: #FFFFFF;
    }

    .text-container #text-5 {
      width: 46.4vw;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: -3% auto 5%;
      width: 40%;
    }


    .left-arrow.active {
      filter: invert(99%) sepia(0%) saturate(28%) hue-rotate(211deg) brightness(105%) contrast(69%);
    }

    .right-arrow {
      transform: scaleX(-1);
    }

    .right-arrow.active {
      filter: invert(99%) sepia(0%) saturate(28%) hue-rotate(211deg) brightness(105%) contrast(69%);
    }

    .dot {
      width: 2vw;
      height: 2vw;
      border-radius: 1vw;
      margin-top: 1vw;
      margin-right: 1vw;
      margin-bottom: 0.5vw;
      background: #D8D8D8;
      float: left;
    }
    .dot.active {
      background: #20525C;
    }
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
