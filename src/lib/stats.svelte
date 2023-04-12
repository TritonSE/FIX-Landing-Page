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
      stat: '1',
      text: 'largest clinic for homeless cats'
    },
    {
      stat: '115k',
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
      text: 'Cats acquire as strays'
    }
  ];

  let width;
  let el: any, x: any;

	onMount(() => {
		el.addEventListener('scroll', () => {
			x = el.scrollLeft;
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

        <div class="card" id="card-{i}">
          <img src="{base}/stats/stats{i+1}.png" alt="stats pictures"/>
          <div class="text-container">
            <h1>{stat}</h1>
            <p>{text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="nav-container">
    <img src="{base}/stats/arrow.png" class="left-arrow">
    {#each new Array(6) as _, i}
      <div class="dot" class:active={(x >= width * i) && (x < width * (i + 1))}></div>
    {/each}
    <img src="{base}/stats/arrow.png" class="right-arrow">
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
      font-family: 'Avenir';
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
      margin: 0 12.5rem 4rem;
      color: var(--color-secondary-accent);
      
      overscroll-behavior: contain;
      scroll-snap-type: x mandatory;

      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;

      overflow-x: scroll;
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
      flex-basis: 33.333%;
      flex-grow: 0;
      flex-shrink: 0;
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
      font-family: 'Rubik', sans-serif !important;
      margin: 0;
    }

    .text-container h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 20vw;
      line-height: 100%;

      text-align: center;
      letter-spacing: 0.02em;

      color: #FFFFFF;
    }

    .text-container p {
      position: absolute;
      left: 11.5%;
      top: 50%;
      width: 44.2vw;

      font-family: 'Avenir' !important; 
      font-style: normal;
      font-weight: 500;
      font-size: 4.5vw;
      line-height: 150%;

      text-align: center;
      letter-spacing: 0.02em;
      word-wrap: break-word;

      color: #FFFFFF;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: -3% auto 5%;
      width: 40%;
    }

    .right-arrow {
      transform: scaleX(-1);
    }

    .dot {
		width: 2vw;
		height: 2vw;
		border-radius: 1vw;
		margin-top: 1vw;
		margin-right: 1vw;
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
      display: block;
      margin: 0 0 4rem 0;
    }
    .stat-container {
      margin-top: 4rem;
    }
  }
</style>
