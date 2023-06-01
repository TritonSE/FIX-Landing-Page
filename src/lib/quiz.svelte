<svelte:window bind:outerWidth={width}/>

<script lang="ts">
    import Button from "./button.svelte";
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    export let showQuiz = false;
    export let quizComplete = false;
    export let quizInd = 0;
    const questions = [
        {
            question: "WHAT IS THE CORRECT PROTOCOL AFTER YOU FIND AND FEED A COMMUNITY CAT?",
            choices: ["PREP TO TRAP CAT", "HOLD THE CAT", "CONTINUE FEEDING THE CAT" ],
            correct: 0,
        },
        {
            question: "HOW LONG DO YOU HOLD A CAT BEFORE TAKING THE CAT FOR SURGERY?",
            choices: ["2 DAYS", "OVERNIGHT", "5 HOURS"],
            correct: 1,
        },
        {
            question: "WHERE SHOULD YOU RETURN A CAT THAT YOU FOUND?",
            choices: ["THE NEAREST PARK", "WHERE THE CAT WAS FOUND", "FIND A HOME FOR THE CAT"],
            correct: 1
        },
        {
            question: "SHOULD YOU EVER HAVE TO PAY FOR A CAT TO BE FIXED?",
            choices: ["IT DEPENDS", "NO NEVER", "YES ALWAYS"],
            correct: 1,
        },
        {
            question: "WHAT DO YOU DO AFTER THE CAT IS OUT OF SURGERY?",
            choices: ["NOTHING", "RELEASE THE CAT", "MONITOR THE CAT OVERNIGHT"],
            correct: 2,
        }
    ]

    const results = [
        {
            text: "GOOD TRY! YOU MIGHT NEED TO SPEND MORE TIME UNDERSTANDING THE TNR ROADMAP AND TRY AGAIN!",
            imageName: "sad-cat.svg"
        },
        {
            text: "GREAT JOB! YOU'RE ALMOST A CAT SUPERHERO, KEEP STUDYING AND YOU GOT IT NEXT TIME!",
            imageName: "neutral-cat.svg",
        },
        {
            text: "AMAZING JOB! YOU'RE A CAT SUPERHERO!! USE WHAT YOU LEARNED AND HELP TEACH OTHERS!",
            imageName: "happy-cat.svg"
        }
    ]

    const roadMap = [
        {
            header: "Find a homeless cat who needs your help",
            content: "Is it a cat or a kitten? Does it look injured, ill or hungry? Does it have an ear tip (a sign that it's a community cat)? Is it friendly? Here are some tips to help you figure out if the kitty is homeless.",
            imgPath: "numbers/one.svg",
        },
        {
            header: "Feed the cat in the afternoon or evening.",
            content: "Get kitty on a regular feeding schedule, putting out dry food and water each afternoon or evening. This makes trapping a lot easier later! You can even make a DIY feeding station.",
            imgPath:"numbers/two.svg",
        },
        {
            header: "Get a loaner trap from FixNation and book an appointment.",
            content: "Watch our online training video with easy step-by-step instructions, then borrow a special humane trap and cloth cover from our clinic. Make an appointment online. You're all set!",
            imgPath: "numbers/three.svg",
        },
        {
            header: "Set trap, wait, trap cat and rejoice!",
            content: " Trap between 4 pm to 11.30 pm the evening before your appointment. Set food on some tin foil and place under the trap (not inside). Keep an eye on the trap - never leave it unattended - and wait for kitty to go inside. Be patient! Trap-Neuter-Return is the first step towards a happier and healthier life for your community cat friend.",
            imgPath: "numbers/four.svg"
        },
        {
            header: "Hold the cat overnight until surgery the next day.",
            content: "Congrats, you got the cat! Cover the trap and keep it in a warm, quiet place overnight (like a bathroom or a heated garage). Check the cat once an hour, every hour, until bedtime. Here are some more pre-op tips!",
            imgPath: "numbers/five.svg",
        },
        {
            header: "Take the cat to get fixed (for free!).",
            content: "Feed kittens a teapoon of wet food at 6 am on surgery day; no food or water for older cats. Cover the car seats with plastic and securely place the traps on top. Arrive at FixNation between 7-8.30 am, leave kitty in car and wait in line to check-in. (Here's a sneak peek of the check in process!) FixNation will spay/neuter the cat and provide vaccines, flea treatment, fluids, pain medication, and an ear tip. Pick-up from 3-4:30 pm.",
            imgPath: "numbers/six.svg" 
        },
        {
            header: "Keep the cat one more night for recovery.",
            content: "Take kitty home in the covered trap and keep in a warm, quiet place overnight once again. Feed a ¼ can of wet food about six hours post-op (check paperwork for exact time). Check kitty once an hour, every hour, until bedtime. Here are some more post-op tips!",
            imgPath: "numbers/seven.svg" 
        },
        {
            header: "Return the cat to where it was trapped.",
            content: "This is the big moment…release the cat where you trapped it the morning after surgery. Freedom!!!! Here’s a video about community cats that shows a kitty getting released. Clean the trap and trap cover and return to FixNation during opening hours.",
            imgPath: "numbers/eight.svg" 
        },
    ]

    let width : number;

    let correct = 0;
    let totalQuestions = questions.length;
    let resultInd = -1;
    let currentTab = 0;
    let timesClicked = 0;
    let buttonClicked = -1;

    function checkCorrect(qInd: number, choiceInd:number) {
        buttonClicked = choiceInd;

        if (timesClicked >= 0) {
            timesClicked++;
        }

        if ((questions[qInd].correct == choiceInd) && timesClicked == 1){
            correct++;
        }
    }

    function nextQuestion() {
        quizInd++;

        if (timesClicked >= 1) {
            timesClicked = 0;
            buttonClicked = -1;
        }

        if(quizInd == totalQuestions){
            quizComplete = !quizComplete
            if(correct < 3){
                resultInd = 0;
            }
            else if(correct < 5){
                resultInd = 1;
            }
            else{
                resultInd = 2;
            }
        }
    }

    function playAgain() {
        quizComplete = false;
        quizInd = 0;
        correct = 0;
    }

    function handleClickOutside(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modalPopUp')) {
            showQuiz = false;
        }
    }

    function switchTab(tab: number) {
        currentTab = tab;
    }

    let roadmapScrollTop = 0;

    function handleRoadmapScroll(event: Event) {
        const target = event.target as HTMLElement;
        roadmapScrollTop = target.scrollTop;
    }
</script>

{#if showQuiz && !quizComplete}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalPopUp" on:click={handleClickOutside}>
        <div class="anotherOne">
            <div class="tabs">
                <button class={currentTab === 0 ? 'active quiz' : 'quiz'} on:click={() => switchTab(0)}>Quiz</button>
                <button class={currentTab === 1 ? 'active' : ''} on:click={() => switchTab(1)}>Review Roadmap</button>
            </div>
            <div class="modal">
                <div id="progressBar" style="width: {(quizInd + 1) * 16.667}%"/>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="x-out" on:click={() => {showQuiz = !showQuiz;}}>
                    x
                </div>
                <div class="content">
                    {#if currentTab == 0}
                        {#each questions as question, index}
                            {#if quizInd == index}
                                <div class="questionNum">Question {index+1}/{totalQuestions}</div>
                                <div class="question">{question.question}</div>
                                {#each question.choices as choice, ind}
                                        <Button secondary 
                                            on:click={() => checkCorrect(index, ind)} 
                                            style="color:black; {width <= 425 ? "width:70vw; height:20vw" : "width:36vw; height:5vw"}; margin:15px;{((timesClicked >= 1 && (questions[index].correct == ind) ? (
                                                "border:" + (width <= 425) ? ("1vw") : (".25vw") + "solid #3BB966; border-radius: 0.7vw;") : ((buttonClicked == ind) ? ("border:" + ((width <= 425) ? ("1vw") : (".25vw")) +  " solid #B82424; border-radius:0.7vw;") : (""))))}"
                                        >
                                            <p class="choice">{choice}</p>
                                        </Button>
                                {/each}
                            {/if}
                        {/each}
                        {#if timesClicked >= 1}
                            <Button
                                on:click={() => nextQuestion()}
                                style="width:4.5vw; height:2vw; background: #008E7E; border-radius: 4px; font-size:0.9vw; margin-left: 50vw;"
                            >
                                Next &gt;
                            </Button>
                        {/if}
                    {/if}
                    {#if currentTab == 1}
                        <div class="roadMapContent" on:scroll={handleRoadmapScroll}>
                            {#each roadMap as item}
                                <div class="roadMap">
                                    <div>
                                        <img class="number" src="{base}/quiz/{item.imgPath}" alt="cat">
                                    </div>
                                    <div>
                                        <div class="header">{item.header}</div>
                                        <div class="description">{item.content}</div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="mobile-view">
        <div class="modal">
            <div id="progressBar" style="width: {(quizInd + 1) * 16.667}%"/>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="x-out" on:click={() => {showQuiz = !showQuiz;}}>
                x
            </div>
            <div class="content">
                {#each questions as question, index}
                    {#if quizInd == index}
                        <div class="questionNum">Question {index+1}/{totalQuestions}</div>
                        <div class="question">{question.question}</div>
                        {#each question.choices as choice, ind}
                                <Button secondary 
                                    on:click={() => checkCorrect(index, ind)} 
                                    style="color:black; {width <= 425 ? "width:70vw; height:20vw" : "width:36vw; height:5vw"}; margin:15px;{((timesClicked >= 1 && (questions[index].correct == ind) ? (
                                        "border:" + (width <= 425) ? ("1vw") : (".25vw") + "solid #3BB966; border-radius: 0.7vw;") : ((buttonClicked == ind) ? ("border:" + ((width <= 425) ? ("1vw") : (".25vw")) +  " solid #B82424; border-radius:0.7vw;") : (""))))}"
                                >
                                    <p class="choice">{choice}</p>
                                </Button>
                        {/each}
                    {/if}
                {/each}
                {#if timesClicked >= 1}
                    <Button
                        on:click={() => nextQuestion()}
                        style="width:15vw; height:10vw; background: #008E7E; border-radius: 4px; font-size:0.9vw; margin-left: 50vw; justify-content: center !important; align-items: center !important;"
                    >
                        <div class="next">Next</div>
                    </Button>
                {/if}
            </div>
        </div>
    </div>
{/if}

{#if showQuiz && quizComplete}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalPopUp" on:click={handleClickOutside}>
        <div class="anotherOne">
            <div class="tabs">
                <button class={currentTab === 0 ? 'active quiz' : 'quiz'} on:click={() => switchTab(0)}>Quiz</button>
                <button class={currentTab === 1 ? 'active' : ''} on:click={() => switchTab(1)}>Review Roadmap</button>
            </div>
            <div class="modal result" style="{(currentTab == 0) ? ("background-color: white;") : ("background-color: #83CDC0;")}">
                <div id="progressBar" style="width: {(quizInd + 1) * 16.667}%"/>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="x-out" on:click={() => {showQuiz = !showQuiz;}}>
                    x
                </div>
                {#if currentTab == 0}
                    <div class="content">
                        <div class="result-content">
                            <div>THANKS FOR PLAYING!</div>
                            <div>YOU SCORED A {correct}/{totalQuestions}</div>
                            <div>
                                <img class="cat" src="{base}/quiz/{results[resultInd].imageName}" alt="cat">
                            </div>
                            <div>{results[resultInd].text}</div>
                            <Button on:click={() => {playAgain()}} style="width:8vw; height: 3vw; margin-top: 0.5vw; background: #58C3AF; border-radius: 4px; font-size: 0.7vw"><div id="play-again">Play again!</div></Button>
                        </div>
                    </div>
                {/if}
                {#if currentTab == 1}
                    <div class="content">
                        <div class="roadMapContent" on:scroll={handleRoadmapScroll}>
                            <div class="scrollable-container">
                            {#each roadMap as item}
                                <div class="roadMap">
                                    <div>
                                        <img class="number" src="{base}/quiz/{item.imgPath}" alt="cat">
                                    </div>
                                    <div>
                                        <div class="header">{item.header}</div>
                                        <div class="description">{item.content}</div>
                                    </div>
                                </div>
                            {/each}
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <div class="mobile-view">
        <div class="modal">
            <div id="progressBar" style="width: {(quizInd + 1) * 16.667}%"/>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="x-out" on:click={() => {showQuiz = !showQuiz;}}>
                x
            </div>
            <div class="content">
                <div class="result-content">
                    <div>THANKS FOR PLAYING!</div>
                    <div>YOU SCORED A {correct}/{totalQuestions}</div>
                    <div>
                        <img class="cat" src="{base}/quiz/{results[resultInd].imageName}" alt="cat">
                    </div>
                    <div>{results[resultInd].text}</div>
                    <Button on:click={() => {playAgain()}} style="width:30vw; height:15vw; margin-top: 0.5vw; background: #58C3AF; border-radius: 4px; font-size: 0.7vw"><div id="play-again">Play again!</div></Button>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .modalPopUp {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        /* overflow-y: scroll; */
    }

    .anotherOne {
        align-items: center !important;
        justify-content: center;
        height: 80%;
        width: 70%;
    }

    .modal {
        background-color: #83CDC0;
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        position:relative;
        padding: 0;
        overflow: auto;
    }

    .scrollable-container {
        height: 100%;
        overflow-y: scroll !important;
        }

    .roadMapContent {
        padding: 2vw;
        overflow-y:auto !important;
    }

    .roadMap{
        display: flex;
        text-align: left;
        justify-content: flex-start;
        overflow-y: scroll;
    }

    .number{
        height: auto;
        margin: 20px 40px 20px 0;
    }

    .header {
        font-weight: 600;
        margin-bottom: 5px;
    }

    .description {
        margin-bottom: 10px;
    }

    #progressBar {
        position: absolute;
        height: 1.5vw;
        top: 0;
        left: 0;
        z-index: 10000;
        background: #008E7E;
    }
    .content{
        /* margin-top: 20px; */
        margin: 2vw 1vw 2vw ;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .x-out {
        font-family: 'Avenir';
        font-size: 2.5vw;
        color: white;
        position: absolute;
        cursor: pointer;
        top: 1.2vw;
        right: 0.8vw;

        z-index: 10001;
    }

    .questionNum {
        font-size:1.5vw;
        font-weight: 500;
        margin-top: calc(190px - 6vw);
        margin-bottom: 2vw;

        letter-spacing: 0.02em;
        color: #0C2B35;
    }

    .question {
        font-size:1.7vw;
        font-weight: 600;
        margin:30px;
        width:40vw;
        margin-bottom: 3vw;

        color: #0C2B35;
    }

    .choice {
        font-size: 1.5vw;
        font-weight: 600;
        line-height: 20px;

        color: #0C2B35;
    }

    .result-content{
        width: 60%;

        font-size:1.5vw;
        font-weight: 600;
        line-height: 2.5vw;

        color: #0C2B35;
    }

    .result-content > * + *{
        margin: 20px;
    }

    .result-content:first-child {
        margin-top: calc(190px - 9vw);
    }

    .cat {
        width: 17vw;
        height: auto;
        margin: 1vw;
    }

    .tabs {
        display: flex;
        justify-content: flex-start; /* Align tabs to the left */
        background-color: transparent;
        align-self: flex-start;
        /* position: absolute; */
        top: 0;
        left: 0;
    }

    .tabs button {
        background-color: white;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.2vw 0.2vw;

        font-family: 'Comics';
        font-size: 0.9vw;
        font-weight: 600;
        letter-spacing: 0.1em;

        color: black;
        width: 9.5vw;
        height: 2.5vw;
        border-radius: 5px 5px 0 0;
        border-style: solid;
        border-color: #20525C;
    }

    .tabs button.active {
        color: #0C2B35;
        background-color: #83CDC0;
    }

    .tabs .quiz {
        width: 5vw;
    }

    .mobile-view {
        display: none;
    }

    #play-again{
        font-size: 1.2vw;
    }

    @media only screen and (max-width: 430px) {
        .modalPopUp {
            display: none;
        }

        .mobile-view{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #83CDC0;
            display: flex;
            justify-content: center;
            overflow: hidden;
            z-index: 10000;
            align-items: center;
        }

        .modal {
            width: 100%;
            height: 100%;
            justify-content: center;
        }

        .questionNum{
            font-size: 4vw
        }

        .question{
            font-size: 5vw;
            font-weight: 600;
            margin-bottom: 30px;
        }

        .choice {
            font-size: 4vw;
            font-weight: 600;
            align-self: center;
        }

        .next {
            font-size: 4vw;
            font-weight: 600;
            align-self: center;
        }

        .x-out{
            font-size: 40px;
        }

        .content{
            margin: 1vw 0.5vw 1vw ;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: -50vw;
        }

        #progressBar {
            height: 3vw;
        }

        .result-content {
            font-size: 5vw;
            margin:0px;
            width: 100%;
            height: 100%;
            line-height: 25px;
        }

        .result-content > * + *{
            margin: 30px;
        }

        .result-content:first-child {
            margin-top: calc(190px - 10vw);
        }

        .cat {
            width: 50vw;
            height: auto;
            margin: 1vw;
        }

        #play-again {
            font-size: 5vw;
        }
    }


</style>