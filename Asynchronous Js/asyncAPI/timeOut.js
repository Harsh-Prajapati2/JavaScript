const btnElement = document.querySelector('.button');

const textElement = document.querySelector('#text');

btnElement.addEventListener('click',function(){
    textElement.textContent = "Button is Clicked.";

    for(let i=1;i<5;i++){
        setTimeout(()=>{
            textElement.textContent = `${i} second pass`;
            console.log(i);
        },i*1000);
    }
})

