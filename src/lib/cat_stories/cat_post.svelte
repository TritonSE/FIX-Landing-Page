<!--
  cat_post.svelte:
    A component for a single Instagram post.
    Will be populated with actual Instagram post data later on.
-->
<script>
  import { base } from '$app/paths';

  export let image_url = '';
  export let image_alt = '';
  export let link_to = '';
</script>

<a href={link_to} target="_blank" rel="noreferrer noopener">
  <div class="root">
    <img src={image_url} alt={image_alt} class="cat-image" loading="lazy" />
    <img
      src="{base}/cat_stories/instagram_blue.svg"
      alt="Instagram Logo"
      class="instagram-logo"
      loading="lazy"
    />
  </div>
</a>

<style>
  .root {
    position: relative;
    width: 188px;
    height: 188px;
  }

  .cat-image {
    width: 188px;
    height: 188px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 41.67%, rgba(0, 0, 0, 0.4) 100%);
    border-radius: 8px;
  }

  .instagram-logo {
    position: absolute;
    left: 14px;
    bottom: 14px;
  }

  @media screen and (max-width: 1200px), (max-height: 600px) {
    .root {
      width: 100px;
      height: 100px;
    }

    .cat-image {
      width: 100px;
      height: 100px;
    }

    .instagram-logo {
      left: 8px;
      bottom: 8px;
    }
  }
</style>
