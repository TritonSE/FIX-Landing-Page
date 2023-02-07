<script>
  import volunteer from '$lib/icons/volunteer.svg';
  import donate from '$lib/icons/donate.svg';
  import employment from '$lib/icons/employment.svg';
</script>

<div class="container">
  <h1 id="inv-title">Get Involved</h1>
  <p id="involved-p">
    There are so many ways you can help homeless cats in your area. FixNation is looking for you!
  </p>
  <div class="flex-container">
    <div class="footer-container">
      <img src={volunteer} class="icon" alt="volunteer icon" />
      <p class="icon-desc">Volunteer</p>
    </div>
    <div class="footer-container">
      <img src={donate} class="icon" alt="donate icon" />
      <p class="icon-desc">Donate</p>
    </div>
    <div class="footer-container">
      <img src={employment} class="icon" alt="employment icon" />
      <p class="icon-desc">Employment</p>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 90rem;
    margin: 0 auto;
  }
  #involved-p {
    margin: 0rem 9rem 6rem 9rem;
  }

  h1,
  p {
    text-align: center;
  }
  h1 {
    margin-top: 8rem;
  }
  p {
    margin: 2rem 0rem;
    font-weight: 500 !important;
    color: var(--color-black);
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
  .footer-container {
    text-align: center;
    flex: 1;
  }
  .footer-container p {
    font-weight: 900;
  }
  @media screen and (max-width: 950px) {
    #inv-title {
      margin: 6rem 1rem 4rem;
    }
    #involved-p {
      margin: 0rem 6rem 3rem 6rem;
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
    #involved-p {
      margin: 0rem 3rem 1.5rem 3rem;
    }
    .footer-container {
      margin-top: 4rem;
    }
    .icon {
      width: 6rem;
    }
    h1 {
      font-size: 48px !important;
    }
    .icon-desc {
      font-weight: 900 !important;
    }
  }
</style>
