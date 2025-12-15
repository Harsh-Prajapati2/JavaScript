// define in two ways
// 1.class declaration
// 2.class expression

// 1. Declaration

class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}


// 2.Expression
// I. The class is anonymous but assign to variable
const Rectangle1 = class{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
};


// II. the class has it own name
const Rectangle2 = class Rectangle3{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
};


console.log(Rectangle);
console.log(Rectangle1);
console.log(Rectangle2);