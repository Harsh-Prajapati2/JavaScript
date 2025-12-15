function greet(name,name1) {
console.log(`Hello, ${name}! I'm ${this.title}. ${name1}`);
}
const person = {
title: "Mr."
};
greet.apply(person, ["John","Alice"]); // Output: Hello, John! I'm Mr.
