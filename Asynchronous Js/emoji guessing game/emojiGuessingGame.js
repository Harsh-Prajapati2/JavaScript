const emojiDetails = [
    { emoji: "😀", name: "grinning face" },
    { emoji: "😃", name: "grinning face big eyes" },
    { emoji: "😄", name: "grinning face smiling eyes" },
    { emoji: "😁", name: "beaming face" },
    { emoji: "😂", name: "face with tears of joy" },
    { emoji: "🤣", name: "rolling on the floor laughing" },
    { emoji: "😎", name: "cool face" },
    { emoji: "🤔", name: "thinking face" },
    { emoji: "😭", name: "loudly crying face" },
    { emoji: "😡", name: "angry face" },
    { emoji: "👍", name: "thumbs up" },
    { emoji: "❤️", name: "red heart" },
    { emoji: "🔥", name: "fire" },
    { emoji: "🎉", name: "party popper" },
    { emoji: "🚀", name: "rocket" }
];


const emojiShown = document.getElementById("emoji-shown");
const guessInput = document.getElementById("guess-input");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const answerEl = document.getElementById("answer");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");


let currentIndex = 0;
let score = 0;
let timeLeft = 30;
let timerId = null;
let isGameRunning = false;


function getRandomEmoji() {
    currentIndex = Math.floor(Math.random() * emojiDetails.length);
    emojiShown.textContent = emojiDetails[currentIndex].emoji;
}

// Game logic
function startGame() {
    if (isGameRunning) return;

    isGameRunning = true;
    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    answerEl.textContent = "";
    guessInput.focus();

    getRandomEmoji();

    timerId = setInterval(() => {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerId);
            answerEl.textContent = "⏰ Time's up!";
            isGameRunning = false;
        }
    }, 1000);
}

function resetGame() {
    clearInterval(timerId);
    isGameRunning = false;
    score = 0;
    timeLeft = 30;

    emojiShown.textContent = "😀";
    timerEl.textContent = "30";
    scoreEl.textContent = "0";
    answerEl.textContent = "";
    guessInput.value = "";
}

function checkGuess() {
    if (!isGameRunning) return;

    const userGuess = guessInput.value.trim().toLowerCase();
    const correctAnswer = emojiDetails[currentIndex].name.toLowerCase();

    if (userGuess === correctAnswer) {
        score++;
        answerEl.textContent = "✅ Correct!";
    } else {
        answerEl.textContent = `❌ Wrong! (${correctAnswer})`;
    }

    scoreEl.textContent = score;
    guessInput.value = "";
    getRandomEmoji();
}

// Events
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);

guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkGuess();
    }
});
