class Circle{
    constructor(radius){
        this.radius = radius;
    }
    // using get you can convert this method into class property
    get Diameter(){
        return this.radius * 2;
    }

    // using set you can change the property value it takes one argument 
    set Diameter(newDiameter){ 
        if(newDiameter > 0){
        this.radius = newDiameter / 2;
        }else{
            console.log("Invalid input.")
        }
    }
    // getDiameter(){
    //     console.log(this.radius*2);
    // }
}
const circle = new Circle(4);
console.log(circle.radius); 
// circle.getDiameter();
console.log(circle.Diameter);
circle.Diameter=-20;
console.log(circle.radius)