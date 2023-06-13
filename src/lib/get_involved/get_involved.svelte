<!--
  index.svelte:
    "Get Involved" section entrypoint.
-->
<script lang="ts">
  import { onMount } from 'svelte';

  import Card from './card.svelte';
  import TouchCard from './touch_card.svelte';

  import events from './img/events.png?format=avif';
  import donation from './img/donation.png?format=avif';
  import volunteer from './img/volunteer.png?format=avif';
  import trap from './img/trap.png?format=avif';
  import foster from './img/foster.png?format=avif';
  import caregiving from './img/caregiving.png?format=avif';
  import join_us from './img/join_us.png?format=avif';
  import advocate from './img/advocate.png?format=avif';
  import fundraise from './img/fundraise.png?format=avif';

  type CardData = {
    label: string;
    description: string;
    background_image_url: string;
    background_image_alt: string;
    light_shadow: boolean;
    link_url: string;
  };

  const CARDS: CardData[] = [
    {
      label: 'events',
      description:
        'Special events are an key source of revenue for FixNation, such as our popular Architects for Animals showcase, featuring shelters for community cats designed by local architects.',
      background_image_url: events,
      background_image_alt: 'A cat on a table',
      light_shadow: false,
      link_url: 'https://fixnation.org/2017/08/architects-animals-giving-shelter-2017/'
    },
    {
      label: 'donation',
      description:
        'The majority of our funding comes from foundation grants and private individuals, and donations of any amount are welcomed with heartfelt gratitude.',
      background_image_url: donation,
      background_image_alt: 'A cat with money',
      light_shadow: true,
      link_url:
        'https://fixnation.networkforgood.com/projects/182719-helping-cats-and-communities-through-tnr-2023'
    },
    {
      label: 'volunteer',
      description:
        'From photography to prepping medical supplies to staffing special events, there are all kinds of ways you can help us help homeless cats. Fill out a volunteer application form today!',
      background_image_url: volunteer,
      background_image_alt: 'A man taking a picture of a cat',
      light_shadow: false,
      link_url: 'https://fixnation.org/get_involved/volunteer-application/'
    },
    {
      label: 'trap',
      description:
        'A city-wide network of independent trappers make our Trap-Neuter-Return mission possible, bringing us cats to spay and neuter four days a week, Wednesdays through Saturdays.',
      background_image_url: trap,
      background_image_alt: 'A cat in a cage',
      light_shadow: true,
      link_url: 'https://www.youtube.com/watch?v=IarsSTLUdTw'
    },
    {
      label: 'foster',
      description:
        'Although FixNation is not a shelter or a rescue, we partner with many organizations that are always in need of loving foster families for adoptable cats.',
      background_image_url: foster,
      background_image_alt: 'A person holding a cat',
      light_shadow: false,
      link_url: 'https://kittenrescue.org/volunteer/fostering/'
    },
    {
      label: 'caregiving',
      description:
        'Take action by becoming a community cat caregiver, providing daily food, water and shelter for kitties with no one else to look after them.',
      background_image_url: caregiving,
      background_image_alt: 'Two cats in the grass',
      light_shadow: true,
      link_url: 'https://fixnation.org/about-tnr/homeless-feral-stray/'
    },
    {
      label: 'Join us',
      description:
        'If you love community cats and believe in our compassionate mission, consider joining our small but dedicated team! Check out our latest career opportunities.',
      background_image_url: join_us,
      background_image_alt: 'A woman holding a cat',
      light_shadow: false,
      link_url: 'https://fixnation.org/employment-opportunities/'
    },
    {
      label: 'advocate',
      description:
        'Help us spread the word about the many benefits of spaying and neutering, as well as our compassionate Trap-Neuter-Return mission.',
      background_image_url: advocate,
      background_image_alt: 'Two children holding signs',
      light_shadow: true,
      link_url: 'https://fixnation.org/programs/why-spay-neuter/'
    },
    {
      label: 'fundraise',
      description:
        'Our supporters frequently host their own fundraisers to benefit the homeless cats in our care, including bake sales, Facebook fundraisers, 5Ks and walk-a-thons, etc. Every bit helps! ',
      background_image_url: fundraise,
      background_image_alt: 'Cat-shaped cookiess',
      light_shadow: false,
      link_url: 'https://www.facebook.com/FixNationLA'
    }
  ];

  let touchscreen = false;
  const detectTouchscreen = () => {
    // Crude touchscreen detection via:
    //   https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
    touchscreen = !!('ontouchstart' in window || navigator.maxTouchPoints > 0);
  };
  onMount(detectTouchscreen);
</script>

<div class="root" id="get_involved">
  <h2>Get Involved</h2>
  <h4>
    There are so many ways you can help homeless cats in your area. FixNation is looking for you!
  </h4>
  <div class="cards">
    {#if !touchscreen}
      {#each CARDS as card}
        <Card {card} />
      {/each}
    {:else}
      {#each CARDS as card}
        <TouchCard {card} />
      {/each}
    {/if}
  </div>
</div>

<style>
  h2 {
    font-family: 'ITC Avant Garde', sans-serif !important;
    margin: 0;
    text-align: center;
  }

  h4 {
    font-family: 'Avenir', sans-serif !important;
    margin-bottom: 1.25rem;
    text-align: center;
    font-weight: normal;
  }

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    .cards {
      grid-template-columns: 1fr;
    }
    .root {
      margin-bottom: 0;
    }
  }
</style>
