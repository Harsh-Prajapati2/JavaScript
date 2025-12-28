//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.\n
  Sphinx of black quartz, judge my vow.\n
  Pack my box with five dozen liquor jugs.\n
  How vexingly quick daft zebras jump!`
;


const btnStart = document.getElementById('start-btn');
const inputElement = document.getElementById('input');
const timerElement = document.getElementById('timer');
const resultElement = document.getElementById('result');
const btnRetry = document.getElementById('retry-btn');
const sentenceElement = document.getElementById('sentence');
const speedElement = document.getElementById('speed');
const accuracyElement = document.getElementById('accuracy');
const MAX_TIME = 10;

let seconds = MAX_TIME;

function showText(){
  sentenceElement.textContent = sentences;

}

function showResult() {
  resultElement.style.display = 'block';
  inputElement.disabled = true;
  btnStart.disabled = true;

  const typedText = inputElement.value.trim();
  const originalText = sentences.trim();

  /* -------- ACCURACY (Characters) -------- */
  let correctChars = 0;
  const totalTypedChars = typedText.length;

  for (let i = 0; i < Math.min(typedText.length, originalText.length); i++) {
    if (typedText[i] === originalText[i]) {
      correctChars++;
    }
  }

  const accuracy =
    totalTypedChars === 0 ? 0 : (correctChars / totalTypedChars) * 100;

  /* -------- SPEED (Words Per Minute) -------- */
  const typedWords = typedText.split(/\s+/);
  const originalWords = originalText.split(/\s+/);

  let correctWords = 0;
  for (let i = 0; i < Math.min(typedWords.length, originalWords.length); i++) {
    if (typedWords[i] === originalWords[i]) {
      correctWords++;
    }
  }

  const timeTaken = MAX_TIME - seconds; // actual time used
  const speed = timeTaken === 0 ? 0 : (correctWords / timeTaken) * 60;

  accuracyElement.textContent = `${accuracy.toFixed(2)}`;
  speedElement.textContent = `${speed.toFixed(2)} `;
}



btnRetry.addEventListener('click',()=>{
  // location.reload();
  resultElement.style.display = 'none';
  btnStart.disabled = false;
  inputElement.disabled = false;
  seconds = MAX_TIME;
  timerElement.textContent = `Time : 00:${seconds}`;
  inputElement.value = '';

});


btnStart.addEventListener('click',()=>{
  inputElement.disabled = false;
  btnStart.disabled = true;
  inputElement.focus();

  const timer = setInterval(()=>{
    timerElement.textContent = `Time : 00:${seconds}`;
    seconds--;
    // console.log(seconds);
    if(seconds<0){
      clearInterval(timer);
      inputElement.disabled = true;
      btnStart.disabled = false;
      showResult();
    }
  },1000);
  
  showText();
})