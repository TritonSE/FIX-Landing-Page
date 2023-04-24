<script>
  export let open = false;
  import { fly } from 'svelte/transition';
  import { tick } from 'svelte';

  export let cur = 0;
  let dir = false;
  let entries = [
    {
      title: 'step 1: FIND',
      subtitle: 'Find a homeless cat who needs your help.',
      info: 'Feed kittens a teapoon of wet food at 6 am on surgery day; no food or water for older cats. Cover the car seats with plastic and securely place the traps on top. Arrive at FixNation between 7-8.30 am. Leave kitty in car and wait in line to check-in. FixNation will spay/neuter the cat and provide vaccines, flea treatment, fluids, pain medication and an ear tip. Pick-up from 3-4.30 pm.',
      picture: '/modal/cat1.png'
    },
    {
      title: 'step 2: FEED',
      subtitle: 'Feed the cat in the afternoon or evening.',
      info: 'Get kitty on a regular feeding schedule, putting out dry food and water each afternoon or evening. This makes trapping a lot easier later!',
      picture: '/modal/cat2.png'
    },
    {
      title: 'step 3: PREP',
      subtitle: 'Get a loaner trap from FixNation and book an appointment.',
      info: 'Watch our online training video with easy step-by-step instructions, then borrow a special humane trap and cloth cover from our clinic. Make an appointment online. You’re all set!',
      picture: '/modal/cat3.png'
    },
    {
      title: 'step 4: TRAP',
      subtitle: 'Set trap, wait, trap cat and rejoice!',
      info: 'Trap between 4 pm to 11.30 pm the evening before your appointment. Set food on some tin foil and place under the trap (not inside). Keep an eye on the trap – never leave it unattended – and wait for kitty to go inside. Be patient! This is the first step towards a happier and healthier life for your feline friend. ',
      picture: '/modal/cat4.png'
    },
    {
      title: 'step 5: HOLD',
      subtitle: 'Hold the cat overnight until surgery the next day',
      info: 'Congrats, you got the cat! Cover the trap and place it in a warm, quiet place overnight (like a bathroom or a heated garage). Check the cat once an hour, every hour, until bedtime.',
      picture: '/modal/cat5.png'
    },
    {
      title: 'step 6: FIX',
      subtitle: 'Take the cat to get fixed (for free!).',
      info: 'Feed kittens a teapoon of wet food at 6 am on surgery day; no food or water for older cats. Cover the car seats with plastic and securely place the traps on top. Arrive at FixNation between 7-8.30 am. Leave kitty in car and wait in line to check-in. FixNation will spay/neuter the cat and provide vaccines, flea treatment, fluids, pain medication and an ear tip. Pick-up from 3-4.30 pm.',
      picture: '/modal/cat6.png'
    },
    {
      title: 'step 7 HOLD:',
      subtitle: 'Keep the cat one more night for recovery.',
      info: 'Take kitty home in the covered trap and keep in a warm, quiet place overnight. Feed a ¼ can of wet food about six hours post-op (check paperwork for exact time). Check kitty once an hour, every hour, until bedtime. ',
      picture: '/modal/cat7.png'
    },
    {
      title: 'step 8: RETURN',
      subtitle: 'Return the cat to where it was trapped.',
      info: 'This is the big moment…release the cat where you trapped it the morning after surgery. Freedom!!!! Clean the trap and trap cover and return to FixNation during opening hours.',
      picture: '/modal/cat8.png'
    }
  ];
</script>

{#if open}
  <div class="modal">
    <div
      class="cover"
      on:click={() => {
        open = false;
      }}
    />
    {#each entries as entry, index}
      {#if cur == index}
        <div class="content" in:fly={{ x: dir ? 50 : -50 }} out:fly={{ x: dir ? -50 : 50 }}>
          <div
            class="x-out"
            on:click={() => {
              open = !open;
            }}
          >
            x
          </div>
          <div class="title">
            {entry.title}
          </div>
          <div class="subtitle">
            {entry.subtitle}
          </div>
          <div class="main-text">
            <div class="description">
              <img src={entry.picture} class="cat-img" alt="catimg" />
              <div class="body-text">
                {entry.info}
                <div class="button-row">
                  <button class="button-resource">resource 1</button>
                  <button class="button-resource">resource 2</button>
                </div>
              </div>
            </div>
          </div>
          <div class="pages">
            <button
              class="vbutton"
              on:click={async () => {
                if (cur > 0) {
                  dir = false;
                  await tick();
                  cur--;
                }
              }}
            >
              <img src="/modal/lvector.png" class="lvector-img" alt="lvector" />
            </button>
            {#each new Array(8) as _, i}
              <button
                class="ellipse"
                class:active={cur === i}
                on:click={async () => {
                  dir = cur <= i;
                  await tick();
                  cur = i;
                }}
              />
            {/each}
            <button
              class="vbutton"
              on:click={async () => {
                if (cur < entries.length - 1) {
                  dir = true;
                  await tick();
                  cur++;
                }
              }}
            >
              <img src="/modal/rvector.png" class="rvector-img" alt="lvector" />
            </button>
          </div>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 10000;
  }

  .cover {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    z-index: 2000;
  }

  .content {
    position: fixed;
    background-color: #f0f4f4;
    box-shadow: 0px 4px 16px 11px rgba(32, 82, 92, 0.5);
    z-index: 10000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    z-index: 5;
    height: 35vw;
    width: 65%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
  }

  .main-text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .x-out {
    padding-top: 25px;
    padding-left: 25px;
    font-family: 'Comics';
    position: inherit;
    cursor: pointer;
  }

  .title {
    margin: 0 auto;
    font-family: 'Comics';
    font-size: 3.5vw;
    padding-top: 30px;
    padding-bottom: 1vh;
    color: #20525c;
  }

  .subtitle {
    margin: 0 auto;
    padding: 0px;
    font-size: 1.5vw;
    font-family: 'Comics';
    color: #20525c;
  }

  .description {
    padding-top: 3vh;
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    flex-direction: row;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: #20525c;
    font-weight: 5;
  }

  .cat-img {
    max-width: 25%;
    height: auto;
    padding-right: 5vw;
    justify-content: center;
    align-self: center;
  }

  .body-text {
    justify-content: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5vw;
  }

  .button-row {
    display: flex;
    flex-direction: row;
    padding-top: 1.5vw;
  }

  .button-resource {
    color: #e5e5e5;
    background-color: #58c3af;
    border: none;
    margin-right: 3vw;
    height: 2.6vw;
    border-radius: 0.2rem;
    cursor: pointer;
    font-size: 1.3vw;
  }

  .pages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    padding-bottom: 2vh;
  }

  .pages img {
    cursor: pointer;
  }

  .lvector-img {
    padding-right: 0.6rem;
    padding-left: 0rem;
    height: auto;
    width: 0.7vw;
    border: '0';
  }

  .rvector-img {
    padding-left: 0.6vw;
    padding-right: 0rem;
    height: auto;
    width: 0.7vw;
  }

  .vbutton {
    border: none;
    appearance: none;
    background-color: inherit;
    align-items: center;
  }

  .ellipse {
    display: block;
    cursor: pointer;
    height: 1vw;
    width: 1vw;
    margin: 0.7vh;
    background-color: #bbb;
    border-radius: 50%;
    transition: background-color 0.6s ease;
    border: none;
  }

  .active,
  .ellipse:hover {
    background-color: #717171;
  }

  @font-face {
    font-family: 'Comics';
    font-style: normal;
    font-weight: normal;
    src: url(/fonts/Comics.ttf);
  }
</style>