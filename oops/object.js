let object = {
    userName : "Harsh",
    userId : 2203031050507,
    userAdrees :{
        city : "Bharuch",
        state : "Gujarat",
        country : "India"
    } ,
    userDateofBirth : ["02","january","2005"]
}
console.log(object)
// console.log(object.__proto__.__proto__.__proto__);
console.log(object.userAdrees)
console.log(object.userAdrees.city)
console.log(object.userDateofBirth[1])


var obj = {
    calculateArea : function(radius){
        return Math.PI * radius * radius
    },
    calculatePerimeter : function(radius){
        return Math.PI * radius * 2
    }
}
console.log(obj.calculateArea)
console.log(obj.calculateArea(2))
console.log(obj.calculatePerimeter)
console.log(obj.calculatePerimeter(2))


var obj = {
    calculateArea : function(radius){
        return Math.PI * radius * radius
    },

    greeting : function(fn){
        console.log(`${fn()} ,Good Morning!`)
    }
}

function sayHi(){
    return "Hi"
}

console.log(obj.greeting(sayHi))



// function Animal(){
// }
// Animal.prototype.move = function() {
//     console.log("moving")
// }
// const dog = new Animal()
// dog.move()

const myArr = [1,2,3]
console.log(myArr.map(x => x * 2))

