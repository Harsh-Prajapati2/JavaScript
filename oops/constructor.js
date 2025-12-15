// factory function 
function movie(title,year){
    const movieObj = {
        title : title,
        year : year,
        getDetails(){
            console.log(`Title : ${this.title},Year : ${this.year}`);
        }
    }
    return movieObj;
}
// console.log(movie.__proto__.__proto__.__proto__.__proto__); 
const movie1 = movie("The Avengers",2012);
const movie2 = movie("Final Destination Blood-line",2025);
movie1.getDetails()
movie2.getDetails()


// constructor function

function Movie(title,year){
    this.title = title,
    this.year = year,
    this.getDetails = function(){
        console.log(`Title : ${this.title},Year : ${this.year}`);
    }
}
const movie3 = new Movie("Raid 2",2025);
movie3.getDetails()
console.log(movie3)