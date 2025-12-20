// const w = document.getElementsByClassName('w');
// const a = document.getElementsByClassName('a');
// const s = document.getElementsByClassName('s');
// const d = document.getElementsByClassName('d');
// const j = document.getElementsByClassName('j');
// const k = document.getElementsByClassName('k');
// const l = document.getElementsByClassName('l');

// it will print on console which key is pressed
document.addEventListener('keypress',function(event){
  
  console.log(event.key);
  if(event.key=='w'){
    console.log("w is pressed");
    new Audio('./sounds/tom-1-28537.mp3').play();
  }else if(event.key=='a'){
    console.log("w is pressed");
    new Audio('./sounds/tom-2-28541.mp3').play();
  }else if(event.key=='s'){
    console.log("w is pressed");
    new Audio('./sounds/tom-3-28542.mp3').play();
  }else if(event.key=='d'){
    console.log("w is pressed");
    new Audio('./sounds/tom-4-28543.mp3').play();
  }else if(event.key=='j'){
    console.log("w is pressed");
    new Audio('./sounds/crash-28546.mp3').play();
  }else if(event.key=='k'){
    console.log("w is pressed");
    new Audio('./sounds/kick-bass-28547.mp3').play();
  }else if(event.key=='l'){
    console.log("w is pressed");
    new Audio('./sounds/snare-28545.mp3').play();
  }else{
    console.log("Enter key which is shown.");
  }
});