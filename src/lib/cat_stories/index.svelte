<script>
  import CatImage from './cat_image.svelte';
  import Shadow from '$lib/assets/cat_stories/shadow.png';
  import Paw from './paw.svelte';
</script>

<div>
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h2>
  <div class="stories-grid">
    <CatImage image_url="/cat_stories/shadow.png" />
    <div class="column">
      <Paw name="Shadow" />
      <p class="medium-margin-above">
        I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident
        mouser. I came to FixNation for spay surgery and was returned the next day to my home turf,
        where I’m back to patrolling the aisles of the garden center and making customers smile.
        I’ve been told I’m an excellent example of a healthy and thriving working cat.
      </p>
      <p class="underline-text">See more</p>
    </div>
    <div class="column large-gap">
      <CatImage image_url="/cat_stories/close_up.png" />
      <div class="row">
        <Paw name="Close Up" />
        <div class="column">
          <p>
            Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me
            sunning on...
          </p>
          <p class="underline-text">See more</p>
        </div>
      </div>
    </div>
    <div class="column large-gap">
      <CatImage image_url="/cat_stories/almira.png" />
      <div class="row">
        <Paw name="Almira" />
        <div class="column">
          <p>
            I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just
            a stone’s throw from our clinic. FixNation has...
          </p>
          <p class="underline-text">See more</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    margin: 0px;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7%;
    padding: 80px 160px 80px 160px;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .large-gap {
    gap: 35px;
  }

  .medium-margin-above {
    margin-top: 36px;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  .underline-text {
    text-decoration-line: underline;
  }
</style>
