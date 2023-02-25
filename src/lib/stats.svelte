<!--
  stats.svelte:
    A component showing statistics about FixNation's clinic.
-->

<div class="container">
  <p id="mission-statement">
    FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
    possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for
    the humane care of homeless cats.
  </p>
  <div class="flex-container">
    <div class="stat-container">
      <img src="/icons/ic_clinic_stat.svg" class="icon" alt="clinic icon" />
      <h3 class="display">1</h3>
      <p>largest clinic for<br />homeless cats</p>
    </div>
    <div class="stat-container">
      <img src="/icons/ic_spayed_stat.svg" class="icon" alt="sprayed icon" />
      <h3 class="display">220k</h3>
      <p>total cats spayed<br />or neutered</p>
    </div>
    <div class="stat-container">
      <img src="/icons/ic_volunteer_stat.svg" class="icon" alt="volunteer icon" />
      <h3 class="display">12k</h3>
      <p>TNR volunteers trained</p>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/Rubik_Bold.ttf);
  }

  .container {
    max-width: 90rem;
    margin: 0 auto;
  }
  #mission-statement {
    margin: 6rem 9rem;
  }
  p {
    text-align: center;
    margin: 0px;
  }
  .icon {
    display: block;
    margin: auto;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 12.5rem 4rem;
    color: var(--color-secondary-accent);
  }
  .stat-container {
    text-align: center;
    flex: 1;
  }
  .stat-container p {
    font-weight: 900;
  }
  .stat-container h3 {
    font-family: 'Rubik', sans-serif !important;
    margin: 0;
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
