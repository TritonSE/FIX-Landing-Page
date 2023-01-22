<script>
  import clinic_ic from '$lib/icons/ic_clinic_stat.svg';
  import spayed_ic from '$lib/icons/ic_spayed_stat.svg';
  import volunteer_ic from '$lib/icons/ic_volunteer_stat.svg';
</script>

<p id="mission-statement">
  FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
  possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for the
  humane care of homeless cats.
</p>
<div class="flex-container">
  <div>
    <img src={clinic_ic} class="icon" alt="clinic icon" />
    <h2>1</h2>
    <p>largest clinic for<br />homeless cats</p>
  </div>
  <div>
    <img src={spayed_ic} class="icon" alt="sprayed icon" />
    <h2>115k</h2>
    <p>total cats spayed<br />or neutered</p>
  </div>
  <div>
    <img src={volunteer_ic} class="icon" alt="volunteer icon" />
    <h2>12k</h2>
    <p>TNR volunteers trained</p>
  </div>
</div>

<style>
  #mission-statement {
    margin: 133px 198px 155px 198px;
  }
  p {
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    margin: 0px;
  }
  .icon {
    display: block;
    margin: auto;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0px 200px;
  }
  h2 {
    text-align: center;
    font-size: 86.4px;
    font-weight: 700;
    margin: 17px 0px 0px 0px;
  }
</style>
