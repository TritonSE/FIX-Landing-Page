<!--
  statsv2.svelte:
    Stats highlighting the value of FixNation's work
-->
<script lang="ts">
  import { base } from '$app/paths';

  import MobileStats from './mobile_stats.svelte';

  let sections = [
    {
      number: '#1',
      subtitle: 'largest clinic for homeless cats',
      picture: 'stats/stats1.png',
      alt: 'Sedated cats'
    },
    {
      number: '220k',
      subtitle: 'total cats spayed or neutered',
      picture: 'stats/stats2.png',
      alt: 'Cat on rug'
    },
    {
      number: '21%',
      subtitle: 'of cats abandoned because their of their residency',
      picture: 'stats/stats3.png',
      alt: 'Momma cat with her kittens'
    },
    {
      number: '12k',
      subtitle: 'TNR volenteers trained',
      picture: 'stats/stats4.png',
      alt: 'FixNation staff holding a cat'
    },
    {
      number: '89%',
      subtitle: 'profits go directly to FixNation programs',
      picture: 'stats/stats5.png',
      alt: 'Staff in front of FixNation building'
    },
    {
      number: '35%',
      subtitle: 'cats acquired as strays',
      picture: 'stats/stats6.png'
    }
  ];

  let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<h1>
  FixNation’s mission is to reduce the population of homeless cats by sterilizing as many as
  possible while demonstrating the effectiveness of Trap-Neuter-Return and colony management for the
  humane care of homeless cats.
</h1>
<div>
  {#if screenWidth > 430}
    <div class="slider">
      {#each sections as section}
        <section class="section" class:active={screenWidth >= 2200}>
          <img src={section.picture} alt={section.alt} />
          <span class="rectangle" />
          <div class="text">
            <div class="header">{section.number}</div>
            <div class="subtitle">{section.subtitle}</div>
          </div>
        </section>
      {/each}
    </div>
  {:else}
    <MobileStats />
  {/if}
</div>

<style>
  h1 {
    font-family: 'Avenir', sans-serif !important;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    font-size: 1rem;
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
    font-size: 1.3rem;
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
</style>
