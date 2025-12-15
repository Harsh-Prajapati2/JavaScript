// function with parameters

function addNumbers(num1,num2){
    console.log(num1+num2);
}

addNumbers(5,6)

function greet(message){
    console.log(`Hello, ${message}!`);
}

greet("Harsh");

//function with default parameter 
function greeting(name = "User"){
    console.log(`Hello, ${name}!`);
}
greeting()


// parameter :- variables declared in function.
// arguments :- values passed to the function when it's called.

// function with return statement 
function add(num1,num2){
    return num1 + num2
}
sum = add(10,20);
console.log(sum)