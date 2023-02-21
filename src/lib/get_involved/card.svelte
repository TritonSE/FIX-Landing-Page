<script>
  export let label = '';
  export let description = '';
  export let background_image_url = '';
  export let background_image_alt = '';
  export let light_shadow = false;
  export let link_url = '';

  let hovering = false;

  function startHover() {
    hovering = true;
  }

  function endHover() {
    hovering = false;
  }
</script>

<a href={link_url} on:mouseenter={startHover} on:mouseleave={endHover}>
  <div class="root ">
    <img src={background_image_url} alt={background_image_alt} />
    <div
      class="background {hovering ? (light_shadow ? 'background-light' : 'background-dark') : ''}"
    />
    <p class={hovering ? 'description' : 'label'}>{hovering ? description : label}</p>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }

  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 20.5vw;
    max-height: 20.5vw;
    min-width: 32vw;
    max-width: 32vw;
  }

  img {
    position: absolute;
    width: 100%;
  }

  p {
    margin: 10px;
    text-align: center;
    font-weight: 700;
    color: var(--color-white);
    z-index: 2;
  }

  .label {
    font-size: 2rem;
  }

  .description {
    font-size: 1.5rem;
  }

  .background {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .background-light {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(11, 129, 103, 0.73);
  }

  .background-dark {
    box-shadow: inset 55.717px 166.319px 170.477px 134.719px rgba(32, 82, 92, 0.78);
  }

  @media screen and (max-width: 1200px) {
    .label {
      font-size: 1.5rem;
    }

    .description {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .label {
      font-size: 1rem;
    }

    .description {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 600px) {
    .root {
      min-height: 64vw;
      max-height: 64vw;
      min-width: 100vw;
      max-width: 100vw;
    }

    .label {
      font-size: 1.25rem;
    }

    .description {
      font-size: 1rem;
    }
  }
</style>
