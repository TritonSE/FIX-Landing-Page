<script>
  import SideOverlay from '../side_overlay.svelte';
  import Paw from './paw.svelte';

  /**
   * @type any
   */
  export let catData;
  /**
   * @type boolean
   */
  export let open;
  /**
   * @type any
   */
  export let onClose;
</script>

<SideOverlay {open} {onClose}>
  <div class="root column">
    <!-- <img /> -->
    <div class="row root-row">
      <Paw name={catData.name} />
      <div class="column">
        <p>{catData.desc_full}</p>
        <div class="row">
          <img
            class="profile-picture"
            alt={catData.name}
            src={`cat_stories/profile_pictures/${catData.name}.png`}
          />
          <div class="column">
            <a href={`https://www.instagram.com/${catData.ig_username}/?hl=en`}
              ><p class="username">{catData.ig_username}</p></a
            >
            <p>{`${catData.n_followers} followers`}</p>
          </div>
        </div>

        <div class="row" />
      </div>
    </div>
    <button class="close-button" on:click={onClose}>
      <img src="/cat_stories/close.svg" alt="Close" />
    </button>
  </div>
</SideOverlay>

<style>
  .root {
    align-items: center;
    position: relative;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .root-row {
    align-items: start;
    padding: 50px;
    gap: 45px;
  }

  .profile-picture {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }

  .username {
    font-size: 18px;
    font-weight: 700;
    color: black;
    text-decoration-line: none;
  }

  .close-button {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #58c3af;
    border: none;
  }

  .close-button:hover {
    cursor: pointer;
  }

  /* .top-image {
        width: 100%;
        height: 500px;
        object-fit: contain;
    } */
</style>
