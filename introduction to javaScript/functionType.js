// function expression
//  Anonymous function
console.log("Anonymous Function :")

const square = function(number){
    return number * number
}
console.log(square)
console.log(square(5))






console.log()
console.log()
console.log()

//  immediately invoked function expression 
console.log("immediately invoked function expression (IIFE) :")

(function() {
    var message = "Hello, World!";

    function displayMessage(){
        console.log(message);
    }
    displayMessage();
})()


console.log()


//  Arrow Function 
console.log("Arrow Function :")
console.log()

var sum = (num1,num2) => {
    return num1 + num2
}
// var sum = (num1,num2) => num1 + num2     // you can remove { } if it having one line
var sum = (...num) => { 
    sum = 0
    for (let number of num) {
        sum = sum + number
    }
    return sum
}
console.log(sum(4,810,123,123,325))


console.log()
console.log()
console.log()

// callback function 
console.log("Callback Function.")
console.log()

function greet(anyFunction){
    console.log(`${anyFunction()}, Welcome to the JavaScript course.`)
}

function sayHi(){
    return "Hi"
}
function sayHello(){
    return "Hello"
}
function sayGoodMorning(){
    return "Good Morning"
}

greet(sayHi)
greet(sayHello)
greet(sayGoodMorning)


console.log()
console.log()
console.log()


console.log("function returning a function.")

console.log()
function greet(message){
    return function (wishes){
        console.log(`${wishes}, ${message}`)
    }
}
greet("hi")("hello")
const greeting = greet("I hope you are doing well.")
greeting("Hello")

greet("I hope you are doing well")("Hi")


// higher order function 
// 1. accept function as a argument 
// 2. function returns a function

//  currying in js
console.log()
console.log()
console.log()

console.log("Currying in JS.")

console.log()

function add1(a,b,c){
    return a + b + c;
}

console.log(add1(2,3,4));

function add2(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

console.log(add2(2)(5)([9,0]))



// using currying we can use same with diffrent behaviour
// example filter song 
console.log("Currying in JS")
function power(b){
    return function(a){
        return a**b
    }
}

console.log("Square :")
square = power(2)
console.log(square(4))
console.log(square(5))
console.log(square(6))

console.log("Cube :")
cube = power(3)
console.log(cube(4))
console.log(cube(5))
console.log(cube(6))