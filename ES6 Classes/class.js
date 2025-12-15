//  class in js.....    Class declaration
class Vehical{

    // Prototype 
    name;
    color;
    wheels;

    // Constructor 
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    // methods
    getDetails(){
        console.log(`
            The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels.
            
            `);
    }
}

const car = new Vehical("Audi","Black",4);
car.getDetails();
console.log(car.hasOwnProperty('name'));     // true
console.log(car.hasOwnProperty('getDetails()')); // false


