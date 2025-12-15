// Inheritance
class Vehical{
    // properties
    name;
    color;
    wheels;

    // constructor
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    // methods
    getDetails(){
        console.log(`This is ${this.name} and it's ${this.color} color.
            It has ${this.wheels} wheels.`);
    }
}

class Car extends Vehical{

    // constructor
    constructor(name,color,wheels,brand,purpose){
        super(name,color,wheels);
        this.brand = brand;
        this.purpose = purpose;
    }

    // method
    getDetails(){
        console.log(`
            This is ${this.name} and it's ${this.color} color.
            It is use for ${this.purpose}
            `);
    }
}

const car1 = new Car("Car","Black",4,"Audi","Luxury Traveling");
car1.getDetails();