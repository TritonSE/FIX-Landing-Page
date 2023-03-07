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

        <div class="card">
          <img src="{base}/stats/stats{i+1}.png" alt="stats pictures"/>
          <div class="text-container">
            <h1>{stat}</h1>
            <p>{text}</p>
          </div>
        </div>
      {/each}
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
  .container {
    max-width: 83vw;
    margin: 0 auto;
  }

  #mission-statement {
    font-family: 'Avenir';
    margin: 6rem 9rem;
  }

  p {
    text-align: center;
    margin: 0px;
    font-size: 2vw;
  }
  /* .icon {
    display: block;
    margin: auto;
  } */
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 12.5rem 4rem;
    color: var(--color-secondary-accent);
  }

  /* https://stackoverflow.com/questions/47505426/html-horizontal-scrollbar-for-card-divs */
  .stat-container {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .card {
    position: relative;
    max-width: 33.333%;
    padding: .75rem;
    flex-basis: 33.333%;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 12vw;
    align-items: center;
  }

  .card img {
    width: 30vw;
    height: auto;
    border-radius: 1.5vw;
    margin: auto;
  }

  .text-container {
    position: absolute;
    left: 27%;
    bottom: 25%;

    height: 20vw;
    width: 20vw;

    background: rgba(0,142,126,0.75);
    box-shadow: 0px 0.3vw 0.3vw rgba(0, 0, 0, 0.25);
    border-radius: 0.3vw;
  }

  .text-container h1 p {
    font-family: 'Rubik', sans-serif !important;
    margin: 0;
    opacity:unset;
  }

  .text-container h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 6.8vw;
    line-height: 150%;

    text-align: center;
    letter-spacing: 0.02em;

    color: #FFFFFF;
  }

  .text-container p {
    position: absolute;
    left: 3%;
    bottom: 15%;

    font-style: normal;
    font-weight: 900;
    font-size: 1.7vw;
    line-height: 2.3vw;

    text-align: center;

    color: #FFFFFF;
  }

  @media screen and (max-width: 950px) {
    #mission-statement {
      margin: 6rem 1rem 4rem;
    }
    .flex-container {
      margin: 0 4rem 4rem;
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
    .icon {
      width: 6rem;
    }
    h3 {
      font-size: 48px !important;
    }
  }
</style>
