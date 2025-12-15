class Vehical{
    // Static properties
    static vName = "static Name";
    
    // properties
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

    // Static method
    static showMsg(){
        return "This is Static Method.";
    }
}

const car = new Vehical("Audi","Black",4);

//  properties and method access using object 
//  works fine
console.log(car.name);  
car.getDetails();

// Static properties and method Access using object
//  gives error

// console.log(car.vName);
// console.log(car.showMsg());

// you can access static properties and method using class name only
// works fine

console.log(Vehical.vName);
console.log(Vehical.showMsg());



class Bike extends Vehical{
    constructor(name){
        super(name,"black",2);
        this.name = name;
    }
    // getDetails(){
    //     console.log(super().showMsg());
    // }

}
const b1 = new Bike("hero","black",2);
// console.log(b1.showMsg());
b1.getDetails();
console.log(Bike.showMsg());