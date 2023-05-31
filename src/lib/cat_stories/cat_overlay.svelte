<!--
  cat_overlay.svelte:
    A styled modal that contains info and images
    about a particular cat.
-->
<script lang="ts">
  import Button from '$lib/button.svelte';
  import SideOverlay from './side_overlay.svelte';
  import CatPost from './cat_post.svelte';
  import Paw from './paw.svelte';

  import type { CatData } from './types.ts';

  import { base } from '$app/paths';

  export let data: CatData;
  export let open: boolean;
  export let onClose: () => void;

  function formatNum(n: number) {
    if (n > 1000) {
      return Math.floor(n / 1000) + 'K';
    }
    return n;
  }
</script>

<SideOverlay {open} {onClose}>
  <div class="root">
    <button class="close-button" on:click={onClose}>
      <img src="{base}/cat_stories/close.svg" alt="Close" loading="lazy" />
    </button>
    <div class="row root-row">
      <Paw name={data.name} />
      <div class="column">
        <p>{data.desc}</p>
        <div class="row small-gap ig-margin">
          <img
            class="profile-picture"
            alt={data.name}
            src="{base}/cat_stories/profile_pictures/{data.name}.avif"
            loading="lazy"
          />
          <div class="column">
            <a
              href={`https://www.instagram.com/${data.ig_username}/?hl=en`}
              target="_blank"
              rel="noreferrer noopener"><p class="username nomargin">{data.ig_username}</p></a
            >
            <p class="nomargin">{`${formatNum(data.n_followers)} followers`}</p>
          </div>

          <div class="vertical-divider" />

          <a href={data.ig_link} target="_blank" rel="noreferrer noopener">
            <Button>Follow Me</Button>
          </a>
        </div>

        <div class="row large-gap">
          {#each Array(3) as _, i}
            <CatPost
              image_url="cat_stories/post_images/{data.name}/post{i + 1}.avif"
              image_alt={data.name}
              link_to={data.ig_link}
            />
          {/each}
        </div>
      </div>
    </div>

    <div class="top-image-container">
      <img class="top-image" src={data.image_path} alt={data.name} loading="lazy" />
    </div>
  </div>
</SideOverlay>

<style>
  a {
    text-decoration: none;
  }

  .root {
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .small-gap {
    gap: 1rem;
  }

  .large-gap {
    gap: 2rem;
  }

  .root-row {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    align-items: start;
    padding: 50px;
    gap: 45px;
    position: relative;
    z-index: 1;
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

  .nomargin {
    margin: 0;
  }

  .vertical-divider {
    width: 0;
    height: 48px;
    border: 1px solid black;
  }

  .ig-margin {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .close-button {
    position: absolute;
    z-index: 2;
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

  .top-image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .top-image {
    position: absolute;
    width: 100%;
    object-fit: cover;
    transform: translateY(-15%);
  }

  @media screen and (max-height: 800px) {
    .root-row {
      padding: 25px;
    }
  }
</style>
