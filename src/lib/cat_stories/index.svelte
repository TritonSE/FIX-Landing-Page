<!--
  index.svelte:
    Cat stories entrypoint.
-->
<script lang="ts">
  import { onMount } from 'svelte';

  import { base } from '$app/paths';

  import CatImage from './cat_image.svelte';
  import Paw from './paw.svelte';
  import CatOverlay from './cat_overlay.svelte';
  import CarouselItem from './carousel_item.svelte';

  import type { CatData } from './types.ts';

  const CAT_DATA: CatData = [
    {
      name: 'Shadow',
      desc: 'I’m the queen of the Home Depot in Woodland Hills, where I serve as the store’s resident mouser. I came to FixNation for spay surgery and was returned the next day to my home turf, where I’m back to patrolling the aisles of the garden center and making customers smile. I’ve been told I’m an excellent example of a healthy and thriving working cat.',
      abbrev_len: Infinity,
      ig_link: 'https://www.instagram.com/shadowthehomedepotcat_/?hl=en',
      ig_username: 'shadowthehomedepotcat_',
      n_followers: 295,
      image_path: `${base}/cat_stories/shadow.png`,
      mobile_image_path: `${base}/cat_stories/shadow_mobile.png`
    },
    {
      name: 'Close Up',
      desc: 'Nice to meet you! I’m your well-known resident of Hollywood Forever. You can find me sunning on gravestones. The owners of my iconic cemetery came to FixNation years ago and asked them to spay and neuter all the community cats living on the grounds. Pretty cool right? FixNation still provides these services. ',
      abbrev_len: 1412,
      ig_link: 'https://www.instagram.com/closeupthecemeterycat/?hl=en',
      ig_username: 'closeupthecemeterycat',
      n_followers: 9873,
      image_path: `${base}/cat_stories/close_up_full.png`,
      mobile_image_path: `${base}/cat_stories/close_up_mobile.png`
    },
    {
      name: 'Almira',
      desc: 'I’m one of the cats at Jay Leno’s famous garage in the San Fernando Valley which is just a stone’s throw from our clinic. FixNation has sterilized a number of the Disneyland Cats living within the famous theme park and resort. We’ve all been TNR’d and are now looked after by their own team of caregivers.',
      abbrev_len: 135,
      ig_link: 'https://www.instagram.com/disneylandcats/?hl=en',
      ig_username: 'disneylandcats',
      n_followers: 110000,
      image_path: `${base}/cat_stories/almira_full.png`,
      mobile_image_path: `${base}/cat_stories/almira_mobile.png`
    }
  ];

  let windowWidth = 0;

  let openOverlayIndex = -1;

  function closeCatOverlay() {
    openOverlayIndex = -1;
  }

  function openCatOverlay(index: number) {
    openOverlayIndex = index;
  }

  let lastScrollLeft: number | null = null;
  let lastScrollTimestampMS = 0;
  let justSnapped = false;
  let snapTimestampMS = null;
  let snapTimeout = null;

  function getNodeTransform(node: HTMLElement, center: number) {
    const rect = node.getBoundingClientRect();
    const val = Math.pow(
      Math.cos(((Math.PI / 2) * (rect.left + rect.width / 2 - center) * 0.4) / center),
      center <= 250 ? 1 : 2
    );
    const clamp = Math.max(0.75, Math.min(1, val));
    return clamp;
    //return 1;
  }

  function scrollStoriesContainer(e: Event) {
    if (!e.target) return;
    let { scrollWidth, clientWidth, scrollLeft, childNodes } = e.target as HTMLDivElement;
    const center = clientWidth / 2;
    const currTimestampMS = new Date().getTime();

    if (currTimestampMS - lastScrollTimestampMS >= 300) {
      if (clientWidth + scrollLeft + 400 > scrollWidth) {
        // At far right of scoll container, scrolling right
        lastScrollTimestampMS = currTimestampMS;
        (e.target as HTMLDivElement).scrollBy({ left: -scrollWidth / 2 });
      } else if (scrollLeft < 400) {
        // At far left of scroll container, scrolling left
        lastScrollTimestampMS = currTimestampMS;
        (e.target as HTMLDivElement).scrollBy({ left: scrollWidth / 2 });
      }
    }

    childNodes.forEach((_childNode) => {
      const childNode = _childNode as HTMLElement;
      if (childNode.style) {
        childNode.style.transform = 'scale(1)';
        childNode.offsetHeight;
        const clamp = getNodeTransform(childNode, center);
        childNode.style.transform = `scale(${clamp})`;
      }
    });

    const scrollSpeed = scrollLeft - lastScrollLeft;
    if (!justSnapped && Math.abs(scrollSpeed) < 3) {
      let nearestChildNode: HTMLElement | null = null;
      let nearestChildXToScrollTo: number | null = null;

      let shouldBreak = false;
      childNodes.forEach((_childNode) => {
        if (shouldBreak) return;
        const childNode = _childNode as HTMLElement;
        const childRect = childNode.getBoundingClientRect?.();
        if (!childRect) return;
        const xToScrollTo = scrollLeft + childRect.left - center + childRect.width / 2;
        if ((xToScrollTo - scrollLeft) * scrollSpeed > 0) {
          if (nearestChildNode === null) {
            nearestChildNode = childNode;
            nearestChildXToScrollTo = xToScrollTo;
          } else {
            if (
              Math.abs(xToScrollTo - scrollLeft) < Math.abs(nearestChildXToScrollTo - scrollLeft)
            ) {
              nearestChildNode = childNode;
              nearestChildXToScrollTo = xToScrollTo;
            }
          }
        } else if (Math.abs(xToScrollTo - scrollLeft) < 20) {
          nearestChildNode = null;
          shouldBreak = true;
        }
      });
      if (nearestChildNode) {
        if (currTimestampMS - snapTimestampMS < 100) {
          return;
        } else {
          snapTimestampMS = currTimestampMS;
          snapTimeout = setTimeout(
            () =>
              (e.target as HTMLDivElement).scrollTo({
                left: nearestChildXToScrollTo
              }),
            100
          );
        }
        justSnapped = true;
      } else {
        justSnapped = false;
      }
    } else {
      justSnapped = false;
    }

    lastScrollLeft = scrollLeft;
  }

  onMount(() => {
    const storiesContainer = document.querySelector('.stories-container');
    if (storiesContainer) {
      storiesContainer.addEventListener('scroll', scrollStoriesContainer);
      storiesContainer.scrollBy({
        left: storiesContainer.scrollWidth / 4 - storiesContainer.clientWidth / 2
      });
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="root">
  <h1>Community Cats</h1>
  <h2>We’re feral, stray or owned pet cat who used to roam the outdoors. FixNation found us!</h2>
  <div class="stories-container">
    {#if windowWidth <= 600}
      <!-- Repeat them for wrap-around scrolling -->
      <CarouselItem catData={CAT_DATA[0]} />
      <CarouselItem catData={CAT_DATA[1]} />
      <CarouselItem catData={CAT_DATA[2]} />
      <CarouselItem catData={CAT_DATA[0]} />
      <CarouselItem catData={CAT_DATA[1]} />
      <CarouselItem catData={CAT_DATA[2]} />
    {:else}
      <div class="cat-image-container">
        <CatImage
          image_url="{base}/cat_stories/shadow.png"
          image_alt="Shadow"
          on:click={() => openCatOverlay(0)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              openCatOverlay(0);
            }
          }}
        />
      </div>
      <div class="column">
        <Paw name={CAT_DATA[0].name} />
        <p class="medium-margin-above">
          {CAT_DATA[0].desc}
        </p>
        <button
          class="underline-text"
          on:click={() => openCatOverlay(0)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              openCatOverlay(0);
            }
          }}
        >
          See more
        </button>
      </div>
      <div class="column large-gap">
        <div class="cat-image-container">
          <CatImage
            image_url="{base}/cat_stories/close_up_cropped.png"
            image_alt="Close Up"
            on:click={() => openCatOverlay(1)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                openCatOverlay(1);
              }
            }}
          />
        </div>
        <div class="row">
          <Paw name={CAT_DATA[1].name} />
          <div class="column">
            <p>
              {CAT_DATA[1].desc.substring(0, CAT_DATA[1].abbrev_len)}
            </p>
            <button
              class="underline-text"
              on:click={() => openCatOverlay(1)}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') {
                  openCatOverlay(1);
                }
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div class="column large-gap">
        <div class="cat-image-container">
          <CatImage
            image_url="{base}/cat_stories/almira_cropped.png"
            image_alt="Almira"
            on:click={() => openCatOverlay(2)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                openCatOverlay(2);
              }
            }}
          />
        </div>
        <div class="row">
          <Paw name={CAT_DATA[2].name} />
          <div class="column">
            <p>
              {CAT_DATA[2].desc.substring(0, CAT_DATA[2].abbrev_len)}
            </p>
            <button
              href="javascript:void(0)"
              class="underline-text"
              on:click={() => openCatOverlay(2)}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') {
                  openCatOverlay(2);
                }
              }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <CatOverlay
    data={CAT_DATA[openOverlayIndex]}
    open={openOverlayIndex !== -1}
    onClose={closeCatOverlay}
  />
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-family: 'Avenir', sans-serif !important;
    font-size: 24px;
    font-weight: normal;
  }

  .root {
    padding: 40px 12% 80px 12%;
    padding-bottom: 90px;
    background-color: var(--color-gray);
  }

  .stories-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    padding-top: 80px;
  }

  .cat-image-container {
    position: relative;
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
    color: var(--color-black);
    background: transparent;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-align: left;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
  .underline-text:active {
    color: var(--color-black);
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }

    .root {
      padding: 40px;
    }

    .stories-container {
      padding-top: 40px;
      gap: 65px;
    }

    .medium-margin-above {
      margin-top: 16px;
    }

    .large-gap {
      gap: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }

    p {
      text-align: center;
    }

    .root {
      padding: 16px;
    }

    .stories-container {
      display: flex;
      flex-direction: row;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      gap: 20px;
      padding-top: 16px;
      /* scroll-snap-type: x mandatory; */
    }

    .stories-container::-webkit-scrollbar {
      display: none;
    }
  }
</style>
