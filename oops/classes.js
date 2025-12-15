// below commented part is function that is converted in class after that
//  function
// const vehical1 = function(name, color, wheels) {
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;

//     this.getDetails1 = () => {
//         console.log(`This is ${this.name} in ${this.color}. \nIt's having ${this.wheels} wheels.`);
//     };

//     return { getDetails1: this.getDetails1 }; 
// };

// const v1 = vehical1("scooter", "yellow", 2);
// v1.getDetails1(); // ✅ Works fine now

// console.log(v1);

// class
// initialize class
// 1st way
// const Vehical = class{
// 
// }


// 2nd way
class Vehical{
    // name;
    // color;
    // wheels;

    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    getDetails(){
        console.log(`This is ${this.name} in ${this.color}. \nIt's having ${this.wheels} wheels.`)
    }
}

const veh1 = new Vehical("scooter","red",2);
const veh2 = new Vehical("car","yellow",4);
console.log(veh1);
console.log(veh2);
veh1.getDetails();
console.log(Vehical.__proto__.__proto__.__proto__);

