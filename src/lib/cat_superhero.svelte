<!--
  cat_superhero.svelte:
    A roadmap with Trap-Neuter-Return information.
-->
<script lang="ts">
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';
  import Button from './button.svelte';

  const COMMON_IMAGE_PATH = 'roadmap/steps';

  type RowData = {
    title: string;
    text: string;
    imageName: string;
    imageAlt: string;
    extraContent: string;
    resourceLink: string;
  };

  const rows: RowData[] = [
    {
      title: 'Find',
      text: 'Find a homeless cat who needs your help',
      imageName: 'find.png',
      imageAlt: '',
      extraContent:
        'Is it a cat or a kitten? Does it look injured, ill or hungry? Does it have an ear tip (a sign that it’s a community cat)? Is it friendly? Here are some tips to help you figure out if the kitty is homeless.',
      resourceLink: ''
    },
    {
      title: 'Feed',
      text: 'Feed the cat in the afternoon or evening',
      imageName: 'feed.png',
      imageAlt: '',
      extraContent:
        'Get kitty on a regular feeding schedule, putting out dry food and water each afternoon or evening. This makes trapping a lot easier later! You can even make a <a href="https://fixnation.org/shelters-feeding-stations/">DIY feeding station.</a>',
      resourceLink: ''
    },
    {
      title: 'Prep',
      text: 'Get a loaner trap from FixNation and book an appointment.',
      imageName: 'prep.png',
      imageAlt: '',
      extraContent:
        'Watch our <a href="https://www.youtube.com/watch?v=JgatHzlxnv0&t=2s">online training video</a> with easy step-by-step instructions, then borrow a special humane trap and cloth cover from our clinic. <a href="https://fixnation.org/about-tnr/free-feral-application/">Make an appointment online.</a> You’re all set!',
      resourceLink: ''
    },
    {
      title: 'Trap',
      text: 'Set trap, wait, trap cat and rejoice!',
      imageName: 'trap.png',
      imageAlt: '',
      extraContent:
        'Trap between 4 pm to 11.30 pm the evening before your appointment. Set food on some tin foil and place under the trap (not inside). Keep an eye on the trap – never leave it unattended – and wait for kitty to go inside. Be patient! <a href="https://www.youtube.com/watch?v=IarsSTLUdTw">Trap-Neuter-Return</a> is the first step towards a happier and healthier life for your community cat friend.',
      resourceLink: ''
    },
    {
      title: 'Hold',
      text: 'Hold cat overnight until surgery the next day',
      // TODO: Add image and content for this one (it's not on Figma)
      imageName: 'trap.png',
      imageAlt: '',
      extraContent: '',
      resourceLink: ''
    },
    {
      title: 'Fix',
      text: 'Take the cat to get fixed (for free!).',
      imageName: 'fix.png',
      imageAlt: '',
      extraContent:
        'Feed kittens a teapoon of wet food at 6 am on surgery day; no food or water for older cats. Cover the car seats with plastic and securely place the traps on top. Arrive at FixNation between 7-8.30 am, leave kitty in car and wait in line to check-in. (Here’s a <a href="https://www.facebook.com/LuxePaws/videos/3379488712127276/">sneak peek of the check-in process!</a>) FixNation will spay/neuter the cat and provide vaccines, flea treatment, fluids, pain medication and an ear tip. Pick-up from 3 - 4.30 pm.',
      resourceLink: ''
    },
    {
      title: 'Watch',
      text: 'Keep the cat one more night for recovery.',
      imageName: 'watch.png',
      imageAlt: '',
      extraContent:
        'Take kitty home in the covered trap and keep in a warm, quiet place overnight once again. Feed a ¼ can of wet food about six hours post-op (check paperwork for exact time). Check kitty once an hour, every hour, until bedtime. Here are some <a href="https://www.alleycat.org/community-cat-care/post-surgery-care/>more post-op tips!</a>',
      resourceLink: ''
    },
    {
      title: 'Return',
      text: 'Return the cat to where it was trapped',
      imageName: 'return.png',
      imageAlt: '',
      extraContent:
        'This is the big moment…release the cat where you trapped it the morning after surgery. Freedom!!!! Here’s a <a href="https://www.youtube.com/watch?v=3-pK4sjVHcQ">video about community cats</a> that shows a kitty getting released. Clean the trap and trap cover and return to FixNation during opening hours.',
      resourceLink: ''
    }
  ];

  let rowsExpanded = rows.map((row) => false);

  function toggleRowExpanded(index: number) {
    console.log('TOGGLING!');
    const newRowsExpanded = [...rowsExpanded];
    newRowsExpanded[index] = !newRowsExpanded[index];
    rowsExpanded = newRowsExpanded;
  }
</script>

<div class="container">
  <div class="bubble">
    <div class="crop">
      <img src="{base}/roadmap/bubble.svg" class="point" alt="Speech bubble" />
      <img src="{base}/roadmap/round_bubble.svg" class="round" alt="Round speech bubble" />
    </div>
    <div class="header">
      <h1 class="main">how to become a</h1>
      <h1 class="comics">CAT SUPERHERO</h1>
      <h1 class="comics-desktop">cat SUPERHERO</h1>
      <img class="cat" src="{base}/roadmap/hero.svg" alt="Cat superhero" />
    </div>
  </div>

  <div class="roadmap">
    <div class="road-image"><div class="road-line" /></div>
    {#each rows as { title, text, imageName, imageAlt, extraContent, resourceLink }, i}
      <div class="step_container {title.toLowerCase() + i}">
        <div class="row">
          <div class="marker">
            <img src="{base}/roadmap/marker.svg" alt="Roadmap marker" />
            <img
              class="shadow"
              src="{base}/roadmap/marker_shadow.svg"
              alt="Roadmap marker shadow"
            />
          </div>
          <div class="text">
            <div class="title-row">
              <h1>{i + 1}. {title}</h1>
              <div
                aria-expanded={rowsExpanded[i]}
                class="toggle-button"
                on:click={() => {
                  toggleRowExpanded(i);
                }}
                on:keydown={() => {
                  toggleRowExpanded(i);
                }}
              />
            </div>
            <p class:first={i == 0}>{text}</p>
            {#if rowsExpanded[i]}
              <div class="accordion-item" transition:slide={{ duration: 200 }}>
                <img
                  src="{base}/{COMMON_IMAGE_PATH}/{imageName}"
                  alt={imageAlt}
                  class="accordion-image"
                />
                <p class:first={i == 0}>{@html extraContent}</p>
              </div>
              <div class="resource-link">
                <a href={resourceLink}><Button scaleTransition={true}>Resource 1</Button></a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .roadmap {
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-bottom: 20vw;
  }

  .title-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .road-image {
    display: none;
  }

  @media screen and (min-width: 1501px) {
    .roadmap {
      margin: 0;
    }
  }
  @media screen and (min-width: 1301px) and (max-width: 1500px) {
    .roadmap {
      margin-top: 3vw;
    }
  }
  @media screen and (min-width: 1001px) and (max-width: 1300px) {
    .roadmap {
      margin-top: 5vw;
    }
  }
  @media screen and (min-width: 820px) and (max-width: 1000px) {
    .roadmap {
      margin-top: 9vw;
    }
  }
  @media screen and (min-width: 677px) and (max-width: 819px) {
    .roadmap {
      margin-top: 12vw;
    }
  }
  @media screen and (min-width: 1100px) {
    .roadmap {
      min-height: 50vw;
      background-image: url(@base/roadmap/curved_road.svg);
    }
    .find0 {
      top: 22.5vw;
      left: 3vw;
    }
    .feed1 {
      top: 30vw;
      left: 19.5vw;
    }
    .prep2 {
      top: 50vw;
      left: 9vw;
    }
    .trap3 {
      top: 40vw;
      left: 33vw;
    }
    .hold4 {
      top: 26.5vw;
      right: 34vw;
    }
    .fix5 {
      top: 55vw;
      right: 37vw;
    }
    .watch6 {
      top: 46vw;
      right: 18vw;
    }
    .return7 {
      top: 60vw;
      right: 7vw;
    }
  }
  /* Tablet View */
  @media screen and (min-width: 676px) and (max-width: 1099px) {
    .roadmap {
      background-image: url(@base/roadmap/tablet_curved_road.svg);
      min-height: 110vw;
    }
    .text h1 {
      font-size: 1.8vw !important;
      padding: 3vw 0 0 4vw;
    }
    .text p {
      font-size: 1.6vw !important;
      padding: 0 3.5vw 2.5vw 3.5vw;
      max-width: 21vw !important;
    }
    .find0 {
      top: 19vw;
      left: 3vw;
    }
    .feed1 {
      top: 40vw;
      left: 1vw;
    }
    .prep2 {
      top: 44vw;
      left: 30vw;
    }
    .trap3 {
      top: 60vw;
      left: 40vw;
    }
    .hold4 {
      top: 80vw;
      left: 15vw;
    }
    .fix5 {
      top: 78vw;
      left: 50vw;
    }
    .watch6 {
      top: 92vw;
      right: 7vw;
    }
    .return7 {
      top: 114vw;
      right: 2vw;
    }
  }
  /* Desktop variant only */
  @media screen and (min-width: 676px) {
    h1,
    p {
      color: var(--color-secondary-accent);
    }
    img {
      width: 16vw;
    }
    .cat {
      width: 16vw;
    }
    .container {
      position: relative;
      background: var(--color-gray);
      height: fit-content;
    }
    .bubble .crop {
      position: absolute;
      right: 0;
      width: 36vw;
    }
    .crop img {
      width: 90%;
    }
    .crop .round {
      position: absolute;
      right: 12vw;
    }
    .crop .point {
      position: absolute;
      right: 37vw;
    }
    .bubble {
      margin-bottom: -10rem;
    }
    .bubble .header {
      position: relative;
      z-index: 2;
      padding: 11vw 0 0 1vw;
    }
    .header .main {
      font-size: 2.3vw;
      margin: -7vw 0 0 33.5vw;
      white-space: nowrap;
      text-transform: capitalize;
      font-family: 'Comics', sans-serif !important;
    }
    .header .comics-desktop {
      font-family: 'Comics', sans-serif !important;
      font-size: 2.9vw;
      margin: -6vw 0 0 60.5vw;
      height: auto;
      width: 21vw;
      word-wrap: break-word;
      text-align: center;
    }
    .header .comics {
      opacity: 0;
      position: absolute;
    }
    .header .cat {
      position: absolute;
      z-index: 2;
      width: 15vw;
      height: auto;
      top: 16vw;
      right: 8vw;
    }
    .row {
      display: flex;
      flex-direction: column;
      width: fit-content;
      max-width: 25vw;

      justify-content: center;
      align-items: center;
      background-image: url(@base/roadmap/cloud.svg);
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
    }
    .row .marker {
      width: 2vw;
      position: absolute;
      z-index: 1;
      top: -2.5vw;
    }
    .marker img {
      width: 3vw;
      position: absolute;
      left: 0.3rem;
    }
    .marker img.shadow {
      position: absolute;
      left: 0.675rem;
      top: 0.125rem;
      z-index: -1;
    }
    .text h1 {
      font-family: 'ITC Avant Garde', sans-serif !important;
      font-size: 1vw;
      text-transform: uppercase;
      padding: 3vw 0 0 4vw;
    }
    .text p {
      font-size: 0.9vw;
      padding: 0 3.5vw 2.5vw 3.5vw;
      max-width: 10vw;
    }
    .step_container {
      width: fit-content;
      margin: 0;
      padding: 0;
      position: absolute;
    }
  }

  /* Mobile variant only */
  @media screen and (max-width: 675px) {
    h1,
    p {
      color: var(--color-secondary-accent);
    }
    img {
      width: 10px;
    }
    .cat {
      width: 10px;
    }
    .container {
      position: relative;
      background: var(--color-gray);
    }
    /* Text bubble and cat image */
    .round {
      display: none;
    }
    .bubble {
      margin-bottom: -6rem;
    }
    .bubble .crop {
      position: absolute;
      z-index: 1;
      width: 100vw;
      overflow: hidden;
    }
    .crop img {
      width: 110%;
    }
    .bubble .header {
      position: relative;
      z-index: 2;
      height: 40vw;
      box-sizing: border-box;
      padding: 11vw 0 0 3vw;
    }
    .header .main {
      font-size: 6vw;
      margin: 0 0 0 20vw;
      white-space: nowrap;
      font-family: 'Comics', sans-serif !important;
    }
    .header .comics {
      font-family: 'Comics', sans-serif !important;
      font-size: 6vw;
      margin: 0 4rem 0 32vw;
      white-space: nowrap;
    }
    .header .comics-desktop {
      visibility: hidden;
    }
    .header .cat {
      position: absolute;
      z-index: 1;
      width: 25vw;
      height: auto;
      top: 38vw;
      right: 2vw;
    }
    /* Roadmap, markers, and text */
    .roadmap {
      display: block;
      background-image: none;
      background-repeat: no-repeat;
      background-size: auto 100%;
      padding-top: 18rem;
      padding-bottom: 5vw;
      margin: 0 1rem;
      position: relative;
    }

    .toggle-button {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid var(--color-secondary-accent);
      transition: transform 0.2s ease-in;
    }

    .toggle-button[aria-expanded='true'] {
      transform: scaleY(-1);
    }

    .toggle-button:hover {
      cursor: pointer;
    }

    .accordion-image {
      width: 100%;
    }

    .road-image {
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: absolute;
      top: 6rem;
      left: 0;
      border-radius: 90px;
      background: var(--color-primary);
      height: calc(100% - 6rem);
      width: 60px;
    }

    .road-line {
      height: 100%;
      width: 4px;
      background-image: url(@base/roadmap/road_border.png);
    }

    .resource-link {
      margin-bottom: 20px;
    }

    .roadmap .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-right: 2rem;
    }
    .row .marker {
      width: 2.3125rem;
      position: relative;
      z-index: 1;
    }
    .step_container {
      padding-left: 10px;
    }
    .marker img {
      width: 1.625rem;
      position: absolute;
      left: 0.3rem;
    }
    .marker img.shadow {
      position: absolute;
      left: 0.675rem;
      top: 0.125rem;
      z-index: -1;
    }
    .row .text {
      flex: 1;
      padding-left: 1.5rem;
    }
    .text h1 {
      font-family: 'Comics', sans-serif !important;
      font-size: 20px;
      margin: 0;
      text-transform: uppercase;
    }
    .text p {
      font-size: 14px;
      margin: 0 0 1.375rem 0;
    }
    .text p.first {
      width: 50vw;
    }
  }
</style>
