class Vehical{

    // Properties 
    // Private properties - start with #
    // you can't access private property outside the class
    #name;
    #color;
    #wheels;
    #regNumber;
    // Constructor 
    constructor(name,color,wheels,number){
        this.#name = name;
        this.#color = color;
        this.#wheels = wheels;
        this.#regNumber = number;
    }
    // private method
    #getNumber(number){
        return number;
    }
    // methods
    getDetails(){
        console.log(`
            The ${this.#name} is ${this.#color} in color.
            It has ${this.#wheels} wheels.
            Registration Number : ${this.#getNumber(this.#regNumber)}
            `);
    }
}

const car = new Vehical("Audi","Black",4,1456);
car.getDetails();
//  both line gives private field declare inside the class
// console.log(car.#name);    //  gives error
// console.log(car.#getNUmber(0001));   // gives error 