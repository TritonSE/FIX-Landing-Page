<!--
  find_fixnation.svelte: 
    A component with FixNation's general contact information, location, and hours.
-->
<div class="container">
  <img id="paws" src="/find/paws.svg" alt="paw prints" />
  <h1 id="header">Find FixNation</h1>
  <div class="info-container">
    <div class="info-section">
      <div class="info-header">
        <img class="icon" src="/icons/phone.svg" alt="phone" />
        <h3>Phone</h3>
      </div>
      <p>818.524.2287</p>
    </div>
    <div class="info-section">
      <div class="info-header">
        <img class="icon" src="/icons/location.svg" alt="pin" />
        <h3>Location</h3>
      </div>
      <p>
        7680 Clybourn Ave,<br />
        Los Angeles, CA<br />
        91352
      </p>
    </div>
    <div class="info-section">
      <div class="info-header">
        <img class="icon" src="/icons/clock.svg" alt="clock" />
        <h3>Hours</h3>
      </div>
      <p>
        Wednesday-Saturday<br />
        7:00am to 5:00pm
      </p>
    </div>
    <div class="info-section">
      <div class="info-header">
        <img class="icon" src="/icons/email.svg" alt="email" />
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
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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

  @media only screen and (max-width: 1000px) {
    #paws {
      top: -3rem;
    }
  }

  @media only screen and (max-width: 640px) {
    #paws {
      top: 0;
    }

    .info-container {
      display: flex;
      flex-direction: column;
    }

    .info-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
