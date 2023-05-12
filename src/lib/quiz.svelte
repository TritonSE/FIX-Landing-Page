<script lang="ts">
    import Button from "./button.svelte";

    export let showQuiz = false;
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
    let correct = 0
    let totalQuestions = questions.length

    function checkCorrect(qInd: number, choiceInd:number){
        if (questions[qInd].correct = choiceInd){
            correct++;
        }
    }

</script>

{#if showQuiz}
    <div class="modal">
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
                        <Button secondary on:click={() => checkCorrect(index, ind)} style="color:black; width:40%; margin:10px">
                            {choice}
                        </Button>
                    {/each}
                {/if}
            {/each}
        </div>
    </div>
{/if}

<style>
    .modal {
        background-color: #83CDC0;
        padding: 10px;
    }
    .content{
        margin-top: 20px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .x-out {
        /* padding-top: 25px;
        padding-left: 25px; */
        font-family: 'Comics', sans-serif;
        position: relative;
        cursor: pointer;
        right:10px;
        top: 10px;
        float:right;
    }
    .questionNum {

    }
    .question {
        font-size:1.5rem;
        margin:20px
    }
</style>