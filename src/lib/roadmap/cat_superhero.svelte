<!--
  cat_superhero.svelte:
    A roadmap with Trap-Neuter-Return information.
-->
<script lang="ts">
  import type { RowData } from './types';
  import AccordionItem from './accordion_item.svelte';
  import Modal from './modal.svelte';
  import Quiz from './quiz.svelte';

  import find from './img/find.png?format=avif';
  import feed from './img/feed.png?format=avif';
  import prep from './img/prep.png?format=avif';
  import trap from './img/trap.png?format=avif';
  import hold from './img/hold.png?format=avif';
  import fix from './img/fix.png?format=avif';
  import watch from './img/watch.png?format=avif';
  import sreturn from './img/return.png?format=avif';

  let open = false;
  let cur = -1;

  const rows: RowData[] = [
    {
      title: 'Find',
      text: 'Find a homeless cat who needs your help.',
      imageName: find,
      imageAlt: '',
      extraContent:
        'Is it a cat or a kitten? Does it look injured, ill or hungry? Does it have an ear tip (a sign that it’s a community cat)? Is it friendly? Here are some tips to help you figure out if the kitty is homeless.',
      resourceTexts: ['Tips'],
      resourceLinks: ['https://fixnation.org/about-tnr/faqs/']
    },
    {
      title: 'Feed',
      text: 'Feed the cat in the afternoon or evening.',
      imageName: feed,
      imageAlt: '',
      extraContent:
        'Get kitty on a regular feeding schedule, putting out dry food and water each afternoon or evening. This makes trapping a lot easier later! You can even make a <a href="https://fixnation.org/shelters-feeding-stations/">DIY feeding station.</a>',
      resourceTexts: ['DIY Feeding Station'],
      resourceLinks: ['https://fixnation.org/shelters-feeding-stations/']
    },
    {
      title: 'Prep',
      text: 'Get a loaner trap from FixNation and book an appointment.',
      imageName: prep,
      imageAlt: '',
      extraContent:
        'Watch our <a href="https://www.youtube.com/watch?v=JgatHzlxnv0&t=2s">online training video</a> with easy step-by-step instructions, then borrow a special humane trap and cloth cover from our clinic. <a href="https://fixnation.org/about-tnr/free-feral-application/">Make an appointment online.</a> You’re all set!',
      resourceTexts: ['Training Videos', 'Make Appointment'],
      resourceLinks: [
        'https://www.youtube.com/watch?v=JgatHzlxnv0&t=2s',
        'https://fixnation.org/about-tnr/free-feral-application/'
      ]
    },
    {
      title: 'Trap',
      text: 'Set trap, wait, trap cat and rejoice!',
      imageName: trap,
      imageAlt: '',
      extraContent:
        'Trap between 4 pm to 11.30 pm the evening before your appointment. Set food on some tin foil and place under the trap (not inside). Keep an eye on the trap – never leave it unattended – and wait for kitty to go inside. Be patient! <a href="https://www.youtube.com/watch?v=IarsSTLUdTw">Trap-Neuter-Return</a> is the first step towards a happier and healthier life for your community cat friend.',
      resourceTexts: ['TNR'],
      resourceLinks: ['https://www.youtube.com/watch?v=IarsSTLUdTw']
    },
    {
      title: 'Hold',
      text: 'Hold the cat overnight until surgery the next day.',
      imageName: hold,
      imageAlt: '',
      extraContent:
        'Congrats, you got the cat! Cover the trap and keep it in a warm, quiet place overnight (like a bathroom or a heated garage). Check the cat once an hour, every hour, until bedtime. Here are some <a href="https://fixnation.org/about-tnr/pre-post-surgery-instructions/">more pre-op tips!</a>',
      resourceTexts: ['Pre-op Tips'],
      resourceLinks: ['https://fixnation.org/about-tnr/pre-post-surgery-instructions/']
    },
    {
      title: 'Fix',
      text: 'Take the cat to get fixed (for free!).',
      imageName: fix,
      imageAlt: '',
      extraContent:
        'Feed kittens a teapoon of wet food at 6 am on surgery day; no food or water for older cats. Cover the car seats with plastic and securely place the traps on top. Arrive at FixNation between 7-8.30 am, leave kitty in car and wait in line to check-in. (Here’s a <a href="https://www.facebook.com/LuxePaws/videos/3379488712127276/">sneak peek of the check-in process!</a>) FixNation will spay/neuter the cat and provide vaccines, flea treatment, fluids, pain medication and an ear tip. Pick-up from 3 - 4.30 pm.',
      resourceTexts: ['Check-in Process'],
      resourceLinks: ['https://www.facebook.com/LuxePaws/videos/3379488712127276/']
    },
    {
      title: 'Watch',
      text: 'Keep the cat one more night for recovery.',
      imageName: watch,
      imageAlt: '',
      extraContent:
        'Take kitty home in the covered trap and keep in a warm, quiet place overnight once again. Feed a ¼ can of wet food about six hours post-op (check paperwork for exact time). Check kitty once an hour, every hour, until bedtime. Here are some <a href="https://www.alleycat.org/community-cat-care/post-surgery-care/">more post-op tips!</a>',
      resourceTexts: ['Post-ops tips'],
      resourceLinks: ['https://www.alleycat.org/community-cat-care/post-surgery-care/']
    },
    {
      title: 'Return',
      text: 'Return the cat to where it was trapped.',
      imageName: sreturn,
      imageAlt: '',
      extraContent:
        'This is the big moment…release the cat where you trapped it the morning after surgery. Freedom!!!! Here’s a <a href="https://www.youtube.com/watch?v=3-pK4sjVHcQ">video about community cats</a> that shows a kitty getting released. Clean the trap and trap cover and return to FixNation during opening hours.',
      resourceTexts: ['Community Cat Video'],
      resourceLinks: ['https://www.youtube.com/watch?v=3-pK4sjVHcQ']
    }
  ];

  let width: number;

  let rowsExpanded = rows.map(() => true);

  function toggleRowExpanded(index: number) {
    const newRowsExpanded = [...rowsExpanded];
    newRowsExpanded[index] = !newRowsExpanded[index];
    rowsExpanded = newRowsExpanded;
  }

  function closeRow(index: number) {
    const newRowsExpanded = [...rowsExpanded];
    newRowsExpanded[index] = false;
    rowsExpanded = newRowsExpanded;
  }

  function toggleQuiz() {
    showQuiz = !showQuiz;
  }

  let showQuiz = false;
  let quizInd = 0;
</script>

<Quiz bind:showQuiz bind:quizInd />
<Modal bind:open bind:cur />
<svelte:window bind:innerWidth={width} />

<div class="container">
  <div class="bubble">
    <div class="crop">
      <img src="/roadmap/bubble.svg" class="point" alt="Speech bubble" loading="lazy" />
      <img src="/roadmap/round_bubble.svg" class="round" alt="Round speech bubble" loading="lazy" />
    </div>
    <div class="header">
      <h1 class="main">how to become a</h1>
      <h1 class="comics">CAT SUPERHERO</h1>
      <h1 class="comics-desktop">cat SUPERHERO</h1>
      <img class="cat" src="/roadmap/hero.svg" alt="Cat superhero" loading="lazy" />
    </div>
  </div>

  <div class="roadmap">
    <div class="road-image"><div class="road-line" /></div>
    {#each rows as rowData, i}
      <div class="step_container {rowData.title.toLowerCase() + i}">
        <div
          class="row"
          on:click={() => {
            if (window.innerWidth >= 600) {
              open = !open;
              cur = i;
            }
          }}
          on:keydown={() => {
            open = !open;
          }}
        >
          <div class="marker">
            {#if i == 0 && width > 600}
              <div class="flag">
                <img src="/roadmap/startFlag.svg" alt="Roadmap marker" loading="lazy" />
              </div>
            {:else if i == 7 && width > 600}
              <div class="flag shifted">
                <img
                  src="/roadmap/testFlag.svg"
                  alt="Roadmap marker"
                  on:click={() => toggleQuiz()}
                  loading="lazy"
                />
              </div>
            {:else}
              <img src="/roadmap/marker.svg" alt="Roadmap marker" loading="lazy" />
              <div class="marker_anim" />
              <img
                class="shadow"
                src="/roadmap/marker_shadow.svg"
                alt="Roadmap marker shadow"
                loading="lazy"
              />
            {/if}
          </div>
          <div class="text">
            <div
              class="title-row"
              on:click={() => {
                toggleRowExpanded(i);
              }}
              on:keydown={() => {
                toggleRowExpanded(i);
              }}
            >
              <h2>{i + 1}. {rowData.title}</h2>
              <div class="toggle-button" />
            </div>
            <p class:first={i == 0}>{rowData.text}</p>
            <AccordionItem
              {rowData}
              index={i}
              expanded={rowsExpanded[i]}
              onClose={() => closeRow(i)}
            />
          </div>
        </div>
      </div>
    {/each}
    {#if width <= 600}
      <div class="marker">
        <div class="flag end">
          <img src="/roadmap/testFlag.svg" alt="Roadmap marker" on:click={() => toggleQuiz()} />
        </div>
      </div>
    {/if}
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
    align-items: center;
  }

  .road-image {
    display: none;
  }

  .flag.shifted {
    position: relative;
    top: 3rem;
  }

  @media only screen and (max-width: 1200px) {
    .flag.shifted {
      top: 1rem;
    }
  }

  .flag img {
    height: auto;
    max-width: 6rem;
    width: 12vw !important;
  }

  .testFlag img {
    height: auto;
    width: 10vw;
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
      background-image: url(/roadmap/curved_road.svg);
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
  @media screen and (min-width: 601px) and (max-width: 1099px) {
    .roadmap {
      background-image: url(/roadmap/tablet_curved_road.svg);
      min-height: 110vw;
    }
    .text h2 {
      font-size: 1.8vw !important;
      padding: 3vw 0 0 4vw;
    }
    .text p {
      font-size: 1.6vw !important;
      padding: 0 3.5vw 2.5vw 3.5vw;
      max-width: 21vw !important;
      margin-top: 0;
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
    .marker img {
      width: 2rem !important;
    }
  }
  /* Desktop variant only */
  @media screen and (min-width: 601px) {
    h1,
    h2,
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
      right: 39vw;
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
      margin: -7vw 0 0 32.5vw;
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
      background-image: url(/roadmap/cloud.svg);
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
    }

    .row:hover {
      background-image: url(/roadmap/cloud_hover.svg);
      cursor: pointer;
    }

    .flag img {
      height: auto;
      width: 100px !important;
    }

    @keyframes glow {
      0% {
        background-image: radial-gradient(transparent 0 10000px);
      }
      10% {
        background-image: radial-gradient(transparent 0 10000px);
      }
      30% {
        background-image: radial-gradient(#c4d856cc 0 30px, transparent 30px 10000px);
      }
      50% {
        background-image: radial-gradient(
          #c4d856cc 0 30px,
          #c4d856aa 30px 35px,
          transparent 35px 10000px
        );
      }
      70% {
        background-image: radial-gradient(
          #c4d856cc 0 30px,
          #c4d856aa 30px 35px,
          #c4d85666 35px 40px,
          transparent 40px 10000px
        );
      }
    }

    .row .marker {
      position: absolute;
      z-index: 1;
      top: -3vw;
    }
    .marker img {
      width: 2.5rem;
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
    }
    .marker_anim {
      width: 6rem;
      height: 6rem;
      animation-name: glow;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      overflow: hidden;
      background-repeat: no-repeat;
      z-index: -2;
    }
    .marker img.shadow {
      position: absolute;
      z-index: -1;
    }
    .text h2 {
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
  @media screen and (max-width: 600px) {
    h1,
    h2,
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
      width: 100%;
      overflow: hidden;
    }
    .crop img {
      width: 100%;
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
      margin: 0 4rem 0 20vw;
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
      padding-top: 10rem;
      padding-bottom: 15vw;
      margin: 0 1rem;
      position: relative;
    }

    .toggle-button {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid var(--color-secondary-accent);
      transition: transform 0.2s;
    }

    .toggle-button[aria-expanded='true'] {
      transform: rotate(180deg);
    }

    .title-row:hover {
      cursor: pointer;
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
      background-image: url("data:image/svg+xml,%3csvg width='0%25' height='5000%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='0' x2='0' y1='0' y2='5000' fill='none' stroke='white' stroke-width='6' stroke-dasharray='4%2c20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }

    .roadmap .row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-right: 2rem;
    }
    .row .marker {
      width: 2.315rem;
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
    .flag.end:hover {
      cursor: pointer;
    }
    .marker .end {
      width: 1.625rem;
      position: absolute;
      left: 1rem;
      bottom: 4rem;
    }
    .marker .end img {
      width: 5rem !important;
      top: -1rem;
    }
    .row .text {
      flex: 1;
      padding-left: 1.5rem;
    }
    .text h2 {
      font-family: 'Comics', sans-serif !important;
      margin: 0;
      text-transform: uppercase;
    }

    .text {
      margin: 0 0 1.375rem 0;
    }
  }
</style>
