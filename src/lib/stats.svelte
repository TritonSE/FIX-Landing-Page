<!--
  stats.svelte:
    A component showing statistics about FixNation's clinic.
-->
<script lang="ts">
  import { base } from '$app/paths';

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
      stat: '12k',
      text: 'TNR volunteers trained'
    },
    // {
    //   stat: '75%',
    //   text: 'Cats are feral'
    // },
    // {
    //   stat: '89%',
    //   text: "Profits go directly to FixNation programs"
    // },
    // {
    //   stat: '21%',
    //   text: 'of cats abandoned because of their residency'
    // }
  ];
</script>

<div class="container">
  <p id="mission-statement">
    FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
    possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for
    the humane care of homeless cats.
  </p>
  <div class="flex-container">

    <div class="stat-container">
      {#each rows as { stat, text }, i}

        <div class="card" id="card{i}">
          <img src="{base}/stats/stats{i+1}.png" alt="stats pictures"/>
          <div class="text-container">
            <h1>{stat}</h1>
            <p>{text}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="nav-container">
      <img src="{base}/stats/arrow.png" class="left-arrow">
      {#each rows as i}
        <a href="#card{i}">
          <img src="{base}/stats/circle.png" id="dot{i}">
        </a>
      {/each}
      <img src="{base}/stats/arrow.png" class="right-arrow">
    </div>

    <!-- <div class="stat-container">
      <img src="{base}/icons/ic_clinic_stat.svg" class="icon" alt="clinic icon" />
      <h3 class="display">1</h3>
      <p>largest clinic for<br />homeless cats</p>
    </div>
    <div class="stat-container">
      <img src="{base}/icons/ic_spayed_stat.svg" class="icon" alt="sprayed icon" />
      <h3 class="display">220k</h3>
      <p>total cats spayed<br />or neutered</p>
    </div>
    <div class="stat-container">
      <img src="{base}/icons/ic_volunteer_stat.svg" class="icon" alt="volunteer icon" />
      <h3 class="display">12k</h3>
      <p>TNR volunteers trained</p>
    </div> -->
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

    /* .icon {
      display: block;
      margin: auto;
    } */
    .flex-container {
      justify-content: space-between;
      align-items: center;
      margin: 0 12.5rem 4rem;
      color: var(--color-secondary-accent);
    }

    /* https://stackoverflow.com/questions/47505426/html-horizontal-scrollbar-for-card-divs */
    .stat-container {
      align-items: stretch;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overscroll-behavior: contain;
      scroll-snap-type: x mandatory;

      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;

      overflow-x: auto;
      overflow-y: hidden;
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

    #card2 {
      margin-right: 2.5vw;
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

      font-family: 'Avenir';
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
      margin: 5% auto 0% auto;
      width: 40%;
    }

    .right-arrow {
      transform: scaleX(-1);
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
