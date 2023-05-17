<!--
  find_fixnation.svelte: 
    A component with FixNation's general contact information, location, and hours.
-->
<script>
  import { base } from '$app/paths';
</script>

<img id="paws" src="/find-paws.svg" alt="paw prints" />

<div class="container">
  <h1 id="header">Find FixNation</h1>
  <div class="info-container">
    <div class="phone">
      <div class="info-header">
        <img class="icon" src="{base}/icons/phone.svg" alt="phone" />
        <h3>Phone</h3>
      </div>
      <p>818.524.2287</p>
    </div>
    <div class="location">
      <div class="info-header">
        <img class="icon" src="{base}/icons/location.svg" alt="pin" />
        <h3>Location</h3>
      </div>
      <p>
        7680 Clybourn Ave,<br />
        Los Angeles, CA<br />
        91352
      </p>
    </div>
    <div class="hours">
      <div class="info-header">
        <img class="icon" src="{base}/icons/clock.svg" alt="clock" />
        <h3>Hours</h3>
      </div>
      <p>
        Wednesday-Saturday<br />
        7:00am to 5:00pm
      </p>
    </div>
    <div class="email">
      <div class="info-header">
        <img class="icon" src="{base}/icons/email.svg" alt="email" />
        <h3>Email</h3>
      </div>
      <p>
        <strong>For appointments:</strong><br />
        appointments@fixnation.org
      </p>
      <p>
        <strong>For general info:</strong><br />
        info@fixnation.org
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  #header {
    text-align: center;
    position: relative;
  }

  #paws {
    position: absolute;
  }

  .icon {
    margin-right: 0.5em;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .info-header {
    display: flex;
    flex-direction: row;
    color: var(--color-secondary-accent);
  }

  @media only screen and (max-width: 640px) {
    .container {
      margin-top: 10rem;
    }
    .info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
