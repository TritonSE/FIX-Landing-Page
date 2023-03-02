<!--
  index.svelte:
    "Get Involved" section entrypoint.
-->
<script lang="ts">
  import Card from './card.svelte';

  type card = {
    label: string;
    description: string;
    background_image_url: string;
    background_image_alt: string;
    light_shadow: boolean;
    link_url: string;
  };

  const CARDS: card[] = [
    {
      label: 'events',
      description:
        'Special events are an key source of revenue for FixNation, such as our popular Architects for Animals showcase, featuring shelters for community cats designed by local architects.',
      background_image_url: 'get_involved/events.png',
      background_image_alt: 'A cat on a table',
      light_shadow: false,
      link_url: 'https://fixnation.org/2017/08/architects-animals-giving-shelter-2017/'
    },
    {
      label: 'donation',
      description:
        'The majority of our funding comes from foundation grants and private individuals, and donations of any amount are welcomed with heartfelt gratitude.',
      background_image_url: 'get_involved/donation.png',
      background_image_alt: 'A cat with money',
      light_shadow: true
    },
    {
      label: 'volunteer',
      description:
        'From photography to prepping medical supplies to staffing special events, there are all kinds of ways you can help us help homeless cats. Fill out a volunteer application form today!',
      background_image_url: 'get_involved/volunteer.png',
      background_image_alt: 'A man taking a picture of a cat',
      light_shadow: false,
      link_url: 'https://fixnation.org/get_involved/volunteer-application/'
    },
    {
      label: 'trap',
      description:
        'A city-wide network of independent trappers make our Trap-Neuter-Return mission possible, bringing us cats to spay and neuter four days a week, Wednesdays through Saturdays.',
      background_image_url: 'get_involved/trap.png',
      background_image_alt: 'A cat in a cage',
      light_shadow: true
    },
    {
      label: 'foster',
      description:
        'Although FixNation is not a shelter or a rescue, we partner with many organizations that are always in need of loving foster families for adoptable cats.',
      background_image_url: 'get_involved/foster.png',
      background_image_alt: 'A person holding a cat',
      light_shadow: false
    },
    {
      label: 'caregiving',
      description:
        'Take action by becoming a community cat caregiver, providing daily food, water and shelter for kitties with no one else to look after them.',
      background_image_url: 'get_involved/caregiving.png',
      background_image_alt: 'Two cats in the grass',
      light_shadow: true,
      link_url: 'https://fixnation.org/about-tnr/homeless-feral-stray/'
    },
    {
      label: 'Join us',
      description:
        'If you love community cats and believe in our compassionate mission, consider joining our small but dedicated team! Check out our latest career opportunities.',
      background_image_url: 'get_involved/join us.png',
      background_image_alt: 'A woman holding a cat',
      light_shadow: false,
      link_url: 'https://fixnation.org/employment-opportunities/'
    },
    {
      label: 'advocate',
      description:
        'Help us spread the word about the many benefits of spaying and neutering, as well as our compassionate Trap-Neuter-Return mission.',
      background_image_url: 'get_involved/advocate.png',
      background_image_alt: 'Two children holding signs',
      light_shadow: true,
      link_url: 'https://fixnation.org/programs/why-spay-neuter/'
    },
    {
      label: 'fundraise',
      description:
        'Our supporters frequently host their own fundraisers to benefit the homeless cats in our care, including bake sales, Facebook fundraisers, 5Ks and walk-a-thons, etc. Every bit helps! ',
      background_image_url: 'get_involved/fundraise.png',
      background_image_alt: 'Cat-shaped cookiess',
      light_shadow: false,
      link_url: 'https://www.facebook.com/FixNationLA'
    }
  ];
</script>

<div class="root">
  <h1>Get Involved</h1>
  <p>
    There are so many ways you can help homeless cats in your area. FixNation is looking for you!
  </p>
  <div class="cards">
    {#each CARDS as card}
      <Card {...card} />
    {/each}
  </div>
</div>

<style>
  h1 {
    font-family: 'ITC Avant Garde', sans-serif !important;
    margin: 0;
    font-size: 3rem;
    text-align: center;
  }

  p {
    font-family: 'Avenir', sans-serif !important;
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 600px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
