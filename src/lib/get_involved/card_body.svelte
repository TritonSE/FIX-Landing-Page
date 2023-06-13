<script>
  export let label = '';
  export let description = '';
  export let background_image_url = '';
  export let background_image_alt = '';
  export let light_shadow = false;
  export let link_url = '';

  export let flipped = false;
  export let touch = false;
</script>

<div class="card-outer" class:active={flipped} class:touch>
  <div class="card-inner">
    <div class="card-front">
      <img src={background_image_url} alt={background_image_alt} loading="lazy" />
      <div class="label">
        <h4>{label}</h4>
        <img
          class="chevron right"
          src="/icons/ic_caretright.svg"
          alt="Right arrow"
          loading="lazy"
        />
      </div>
    </div>

    <div class="card-back">
      <img src={background_image_url} alt={background_image_alt} />
      <div class="description {light_shadow ? 'light' : 'dark'}">
        <p>{description}</p>
        <a href={link_url} target="_blank" rel="noreferrer noopener" class="external">
          <div>Learn More:</div>
          &nbsp;
          <img src="/icons/ic_external_link.svg" alt="External link indicator" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .card-outer {
    min-height: 20.5vw;
    max-height: 20.5vw;
    min-width: calc(100vw / 3);
    max-width: calc(100vw / 3);
    perspective: 1000px;
    overflow: hidden;
    transition: transform 0.8s;
  }

  .card-inner {
    position: relative;
    min-height: 20.5vw;
    max-height: 20.5vw;
    min-width: calc(100vw / 3);
    max-width: calc(100vw / 3);
    perspective: 1000px;
    text-align: center;
    transition: transform 0.8s;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  img {
    width: 100%;
  }
  .card-outer:not(.touch):hover .card-inner,
  .card-outer.active .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  h4,
  p {
    text-align: center;
    color: var(--color-white);
    font-weight: 500;
    z-index: 2;
    width: 90%;
    margin: 0 auto;
  }

  /* Don't shrink on smaller screens */
  h4 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  .label,
  .description {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
  .description.light {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(11, 129, 103, 0.73);
  }
  .description.dark {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(32, 82, 92, 0.78);
  }

  .description p {
    font-weight: 300;
  }

  .external {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .external div {
    display: none;
  }
  .external img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
  }

  .chevron {
    display: none;
  }

  @media screen and (min-width: 600px) and (max-width: 750px) {
    h4 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 750px) {
    .external img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .card-outer,
    .card-inner {
      min-height: 64vw;
      max-height: 64vw;
      min-width: 100vw;
      max-width: 100vw;
    }

    p {
      width: 85%;
    }

    .external {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
    }
    .external div {
      display: block;
      color: var(--color-white);
      text-decoration: underline;
      font-size: 1rem;
    }
    .external img {
      width: 1.5rem;
      height: 1.5rem;
      position: static;
      margin-bottom: -1px; /* SVG viewbox/baseline fix */
    }
    .chevron {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      right: 0;
    }
  }
</style>
