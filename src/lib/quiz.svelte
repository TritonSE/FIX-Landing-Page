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

    function handleClickOutside(event: MouseEvent) {
        if ((event.target as HTMLElement).classList.contains('modalPopUp')) {
            showQuiz = false;
        }
    }

</script>

{#if showQuiz}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modalPopUp" on:click={handleClickOutside}>
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
                            <Button secondary on:click={() => checkCorrect(index, ind)} style="color:black; width:60%; height:60px;margin:10px">
                                {choice}
                            </Button>
                        {/each}
                    {/if}
                {/each}
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
    .modal {
        background-color: #83CDC0;
        padding: 10px;
        height:60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position:relative;
    }
    .content{
        /* margin-top: 20px; */
        margin: 40px 30px 40px;
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
    }

    .question {
        font-size:1.5rem;
        margin:30px;
        width:80%;
        margin-bottom: 50px;
    }
</style>