<!--
  statsv2.svelte:
    Stats highlighting the value of FixNation's work
-->
<script lang="ts">
  import { onMount } from 'svelte';

  import MobileStats from './mobile_stats.svelte';

  import stats1 from './img/stats1.png?format=avif';
  import stats2 from './img/stats2.png?format=avif';
  import stats3 from './img/stats3.png?format=avif';
  import stats4 from './img/stats4.png?format=avif';
  import stats5 from './img/stats5.png?format=avif';
  import stats6 from './img/stats6.png?format=avif';

  let sections = [
    {
      number: '#1',
      subtitle: 'largest clinic for homeless cats',
      picture: stats1,
      alt: 'Sedated cats'
    },
    {
      number: '220k',
      subtitle: 'total cats spayed or neutered',
      picture: stats2,
      alt: 'Cat on rug'
    },
    {
      number: '21%',
      subtitle: 'of cats abandoned because their of their residency',
      picture: stats3,
      alt: 'Momma cat with her kittens'
    },
    {
      number: '12k',
      subtitle: 'TNR volenteers trained',
      picture: stats4,
      alt: 'FixNation staff holding a cat'
    },
    {
      number: '89%',
      subtitle: 'profits go directly to FixNation programs',
      picture: stats5,
      alt: 'Staff in front of FixNation building'
    },
    {
      number: '35%',
      subtitle: 'cats acquired as strays',
      picture: stats6,
    }
  ];

  let statsContainer;

  let screenWidth: number;

  let lastScrollTop: number | null = null;

  const isElementVisible = (element: HTMLElement) => {
    return (
      element &&
      element.getBoundingClientRect().y + element.getBoundingClientRect().height >= 0 &&
      element.getBoundingClientRect().y <= window.innerHeight
    );
  };

  const handleScroll = () => {
    if (isElementVisible(statsContainer)) {
      if (lastScrollTop !== null) {
        statsContainer.scrollBy({
          left: (document.documentElement.scrollTop - lastScrollTop) * 0.5
        });
      }
      lastScrollTop = document.documentElement.scrollTop;
    }
  };

  const preventScrolling = (e) => {
    if (e.deltaY === 0) {
      e.preventDefault();
    }
  };

  onMount(() => {
    document.addEventListener('scroll', handleScroll, { passive: false });

    // setInterval(handleScroll, 1500)

    return () => document.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:innerWidth={screenWidth} />

<h4>
  FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
  possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for the
  humane care of homeless cats.
</h4>
<div>
  {#if screenWidth > 675}
    <div class="slider" bind:this={statsContainer}>
      <div style="min-width:3000px" class="slider" on:mousewheel={preventScrolling}>
        {#each sections as section}
          <section class="section" class:active={screenWidth >= 2200}>
            <img src={section.picture} alt={section.alt} loading="lazy" />
            <span class="rectangle" />
            <div class="text">
              <div class="header">{section.number}</div>
              <div class="subtitle">{section.subtitle}</div>
            </div>
          </section>
        {/each}
      </div>
    </div>
  {:else}
    <MobileStats />
  {/if}
</div>

<style>
  h4 {
    font-family: 'Avenir', sans-serif !important;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    margin: 1vw;
    padding: 2rem;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }

  section {
    padding: 1rem;
    min-width: 23rem;
    height: auto;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  section.active {
    min-width: 16.65vw;
  }
  img {
    width: 20rem;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .header {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.02rem;
    font-size: 4rem;
    font-family: 'Rubik', sans-serif !important;
  }
  .subtitle {
    color: #ffffff;
    font-family: 'Avenir', sans-serif !important;
    font-style: normal;
    font-weight: 40;
  }
  .rectangle {
    position: absolute;
    width: 14rem;
    height: 14rem;
    margin: 1rem;
    background: var(--color-primary);
    opacity: 0.75;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  .text {
    width: 13.5rem;
    height: 13.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .slider {
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  /* Mobile variant only */
  @media screen and (max-width: 675px) {
    .rectangle {
      width: 60vw;
      height: 60vw;
    }
    .text {
      width: 60vw;
      height: 60vw;
    }
    img {
      width: 90vw;
      height: 60vh;
    }
    section {
      scroll-snap-align: none;
    }
  }
</style>
