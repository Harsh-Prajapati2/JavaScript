function movie(title,year){
    const movieObj = {
        title : title,
        year : year,
        getDetais(){
            console.log(`Title : ${this.title}\nYear: ${this.year}`);
        }
    }
    return movieObj;
}

let movie1 = movie("the dark knight",2000)
console.log(movie1);
movie1.getDetais();
let movie2 = movie("the avengers",2012) 
movie2.getDetais();

// constructor function

function Movie(title,year){
    this.title = title;
    this.year = year;
    this.getDetais = function(){
        console.log(`Title: ${this.title}\nYear: ${this.year}`);
    }
}

let movie3 = new Movie("the dark knight",2000);
console.log(movie3);
movie3.getDetais();
let movie4 = new Movie("the avengers",2012);
console.log(movie4);
movie4.getDetais();


// prototype of object
console.log(movie3.__proto__);