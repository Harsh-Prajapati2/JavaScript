function Vehical(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
}

Vehical.prototype.getVehDetails = function() {
    console.log(`Name : ${this.name} \nColor : ${this.color} \nWheels : ${this.wheels}`);
};

function Car(name, color, wheels, brand, purpose) {
    Vehical.call(this, name, color, wheels); // Inherit properties
    this.brand = brand;
    this.purpose = purpose;
}

Car.prototype = Object.create(Vehical.prototype); // Inherit methods
// Car.prototype.constructor = Car; // 🔧 Set correct constructor

Car.prototype.getDetails = function() {
    console.log(`
        The ${this.name} is in ${this.color} color.
        It has ${this.wheels} wheels.
        It is used for ${this.purpose}.
        The ${this.name} is a ${this.brand} company car.
    `);
};

// ✅ Testing
const car1 = new Car("Car", "Black", 4, "Audi", "Sports");
car1.getDetails();         // Car-specific method
car1.getVehDetails();      // Inherited from Vehical
console.log(car1);         // Shows all properties
console.log(car1.__proto__); // Shows prototype of car1 (Car.prototype → Vehical.prototype)
