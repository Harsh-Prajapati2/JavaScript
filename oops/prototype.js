function Movie(title){
    this.title = title;
}
const movie1 = new Movie("The avengers");
movie1.year = 2012;
console.log(movie1);
console.log(movie1.__proto__.__proto__);

const movie2 = new Movie("Raid 2");
console.log(movie2);
console.log(movie2.__proto__.__proto__.__proto__);
