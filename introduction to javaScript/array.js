// Using Square brackets

// const array_name = [item1,item2,item3];
// console.log(array_name)

const myArray = [10,20,30,40,50];
console.log(myArray);

//  use the Array() constructor
const array = new Array(1,2,3,4,5);
console.log(array);


// Using Array.from() method
const myString = "hello";
const arrayString = Array.from(myString);
console.log(arrayString);


// can contain any type or array also 
const arr = [1,"two",true,["four","five"],{six:6}];
console.log(arr)


console.log("Accessing array elements");
// using index
console.log("1st element of arr :",arr[0])
// using .at() 
console.log("1st element of arr",arr.at(0))


arr.push(12);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(3);
console.log(arr);

