const car = {
    name : "car",
    color : "black",
    getDetails(brand,seats){
        console.log(
            `This is ${this.color} ${this.name} from a ${brand} comapany \nIt is having ${seats} seats.`
        );
    }
}


const bus = {
    name : "bus",
    color : "blue"
}

car.getDetails("Audi",5);

car.getDetails.call(bus,"star",50);
car.getDetails.apply(bus,["gold",40]);
const bus1 = car.getDetails.bind(bus)
bus1("silver",30);