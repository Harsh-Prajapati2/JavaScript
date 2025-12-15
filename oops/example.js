// function Person(name){
//     this.name = name;
// }

// Person.prototype.age = 30;
// // age.prototype.year = 2012;
// const john = new Person("John");
// const harsh = new Person("Harsh");
// john.age = 40;
// console.log(john.age);
// harsh.age = 50;
// // console.log(Person.__proto__);
// // console.log(Person.__proto__.__proto__)
// // console.log(Person.__proto__.__proto__.__proto__)
// console.log(Object.getPrototypeOf(john))
// console.log(Object.getPrototypeOf(harsh))
// console.log(john.age)
// console.log(harsh.age)

let car ={
    model : "Model - S",
    startEngine : function(){
        console.log(`${this.model} 's engine start.`);
    }
}
// let startCar = car.startEngine.apply(car);
// let startCar1 = car.startEngine.call(car);
let startCar2 = car.startEngine.bind(car);
startCar2.startEngine();