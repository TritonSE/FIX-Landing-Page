<script lang="ts">
  import { base } from '$app/paths';
  import Button from '$lib/button.svelte';
  import type { RowData } from '$lib/types';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let el: HTMLDivElement | null;
  let h = 0;
  export let expanded = true;
  export let onClose: () => void;
  export let rowData: RowData;
  export let index: number;
  let { imageName, imageAlt, extraContent, resourceTexts, resourceLinks } = rowData;

  const COMMON_IMAGE_PATH = 'roadmap/steps';

  onMount(() => {
    if (el) {
      h = el.offsetHeight;
      onClose();
    }
  });
</script>

{#if expanded}
  <div
    bind:this={el}
    style="max-height: {h === 0 ? 'auto' : expanded ? h : 0}px; display: {expanded
      ? 'block'
      : 'none'}"
    transition:slide={{ duration: h }}
    class="accordion-item"
  >
    <div>
      <img src="{base}/{COMMON_IMAGE_PATH}/{imageName}" alt={imageAlt} class="accordion-image" />
      <p class:first={index == 0}>{@html extraContent}</p>
    </div>
    {#each resourceTexts as resourceText, j}
      <div class="resource-link">
        <a href={resourceLinks[j]} class="link-no-underline"
          ><Button fill={true}
            ><div class="button-contents">
              <img
                src="{base}/icons/ic_external_link.svg"
                alt="External Link"
                class="external-link-icon"
              />
              {resourceText}
            </div></Button
          ></a
        >
      </div>
    {/each}
  </div>
{/if}

<style>
  @media screen and (min-width: 675px) {
    .accordion-item {
      display: none !important;
    }
  }

  .button-contents {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .external-link-icon {
    width: 16px !important;
    height: 16px !important;
    margin-bottom: 3px;
  }

  .link-no-underline {
    text-decoration: none;
  }

  .resource-link {
    margin-bottom: 3px;
  }

  .accordion-image {
    width: 100%;
  }
</style>
