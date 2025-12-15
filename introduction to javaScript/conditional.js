console.log("If statement :");
let number = 10;
if (number > 5){
    console.log("Condition is true so it will run.")
}


console.log();
console.log();
console.log();

console.log("If Else Statement :");

number = 20;
if (number > 50){
    console.log("In If block.")
}
else{
    console.log("In Else Block.")
}


console.log();
console.log();
console.log();

console.log("If Else-if statement :");
number = 15
if (number > 10 & number < 15){
    console.log("In IF block.")
}
else if( number > 10 | number <20){
    console.log("In Else if block.")
}
else{
    console.log("In Else block.")
}


console.log();
console.log();
console.log();

console.log("Switch Statement :")

number = 15;
let value;
if (number > 0){
    value = "positive" 
}else if(number < 0){
    value = "negative"
}else{
    value="zero"
}
switch (value){
    case ("negative"):
        console.log("Negative number.",number);
        break
    case ("positive"):
        console.log("Positive Number.",number);
        break
    case ("zero"):
        console.log("Zero.",number);
        break
    default:
        console.log("In Default")
}