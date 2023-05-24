<script lang="ts">
    import Button from "./button.svelte";
    import { base } from '$app/paths';

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
            text: "GREAT JOB! YOU’RE ALMOST AN TNR EXPERT, KEEP STUDYING AND YOU GOT IT NEXT TIME!",
            imageName: "neutral-cat.svg",
        },
        {
            text: "AMAZING JOB! YOU’RE A TNR PRO!! USE WHAT YOU LEARNED AND HELP TEACH OTHERS!",
            imageName: "happy-cat.svg"
        }
    ]

    const defaultButton = "color:black; width:60%; height:60px; margin:10px";
    const correctButton = "color:black; width:60%; height:60px; margin:10px; border:.25vw solid #3BB966; border-radius:0.5vw;";
    const wrongButton = "color:black; width:60%; height:60px; margin:10px; border:.25vw solid #B82424; border-radius:0.5vw;";

    let correct = 0;
    let totalQuestions = questions.length;
    let resultInd = -1;
    let currentTab = 0;
    let timesClicked = 0;
    let buttonClicked = -1;

    function checkCorrect(qInd: number, choiceInd:number){
        buttonClicked = choiceInd;

        if (timesClicked < 2) {
            timesClicked++;
        }

        if ((questions[qInd].correct == choiceInd)){
            console.log(timesClicked, choiceInd);
            if (timesClicked == 1) {
                correct++;
                timesClicked++;
            } else if (timesClicked == 2) {
                quizInd++;
                timesClicked = 0;
                buttonClicked = -1;

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
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modalPopUp')) {
            showQuiz = false;
        }
    }

    function switchTab(tab: number) {
        currentTab = tab;
    }
</script>

{#if showQuiz && !quizComplete}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalPopUp" on:click={handleClickOutside}>
        <div class="anotherOne">
            <div class="tabs">
                <button class={currentTab === 0 ? 'active' : ''} on:click={() => switchTab(0)}>Quiz</button>
                <button class={currentTab === 1 ? 'active' : ''} on:click={() => switchTab(1)}>Review Road Map</button>
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
                                        <Button secondary on:click={() => checkCorrect(index, ind)} style="{((timesClicked >= 1 && (questions[index].correct == ind) ? (correctButton) : ((buttonClicked == ind) ? (wrongButton) : (defaultButton))))}">
                                            <p class="choice">{choice}</p>
                                        </Button>
                                {/each}
                            {/if}
                        {/each}
                    {/if}
                    {#if currentTab == 1}
                        <div>HELLO</div>
                    {/if}
                </div>
            </div>
        </div>

    </div>
{/if}

{#if showQuiz && quizComplete}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalPopUp" on:click={handleClickOutside}>
        <div class="anotherOne">
            <div class="tabs">
                <button class={currentTab === 0 ? 'active' : ''} on:click={() => switchTab(0)}>Quiz</button>
                <button class={currentTab === 1 ? 'active' : ''} on:click={() => switchTab(1)}>Review Road Map</button>
            </div>
            <div class="modal">
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
                                <img src="{base}/quiz/{results[resultInd].imageName}" alt="cat">
                            </div>
                            <div>{results[resultInd].text}</div>
                        </div>
                    </div>
                {/if}
                {#if currentTab == 1}
                    <div>HELLO</div>
                {/if}
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
    }

    .anotherOne {
        align-items: center !important;
        justify-content: center;
        height: 70%;
        width: 70%;
    }

    .modal {
        background-color: #83CDC0;
        padding: 10px;
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        position:relative;
        padding: 0;
        overflow: hidden;
    }

    #progressBar {
        position: absolute;
        height: 2%;
        top: 0;
        left: 0;
        z-index: 10000;
        background: #008E7E;
    }
    .content{
        /* margin-top: 20px; */
        margin: 100px 30px 80px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .x-out {
        font-family: 'Comics', sans-serif;
        position: absolute;
        cursor: pointer;
        top: 10px;
        right: 10px;

        z-index: 10001;
    }

    .questionNum {
        font-size:1.2rem;
        font-weight: 500;

        letter-spacing: 0.02em;
        color: #0C2B35;
    }

    .question {
        font-size:1.5rem;
        font-weight: 600;
        margin:30px;
        width:80%;
        margin-bottom: 50px;

        color: #0C2B35;
    }

    .choice {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 20px;

        color: #0C2B35;
    }

    .result-content{
        width: 45rem;

        font-size:1.7rem;
        font-weight: 600;

        color: #0C2B35;
    }

    .result-content > * + *{
        margin: 20px;
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
        padding: 10px 10px;
        font-size: 0.8rem;
        font-weight: 600;
        color: black;
        width: 150px;
        border-radius: 5px 5px 0 0;
    }

    .tabs button.active {
        color: #0C2B35;
        background-color: #83CDC0;
    }


</style>