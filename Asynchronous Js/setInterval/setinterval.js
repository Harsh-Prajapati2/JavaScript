const timeElement = document.querySelector('#time');
let seconds = 0;


const timer = setInterval(()=>{
    
    timeElement.textContent = `${seconds}`;
    seconds++;
    console.log(seconds);
},11111);

const stopbutton = document.querySelector('.stopTimer');
stopbutton.addEventListener('click',()=>{
    clearInterval(timer);
});
console.log(typeof(timer));

setInterval()