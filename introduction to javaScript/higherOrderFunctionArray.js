//  map() function 
//  map() creates new array by applying a provided callback function to each original array element
//  callback function is executed for every element and the return value of each function call and addd to new array
// result array has same length as original array 
const names = ['alice','bob','charlie','dave']
const nameLength = names.map(function (name){
    return name.length
})

console.log(nameLength)
// output
// [ 5, 3, 7, 4 ]


// filter() 
// creates new array containing elements from the original array that satisfy a specified coondition.
let numbers = [1,4,-5,3,2,4,-5,-2,-2,-9,-10]
const positiveNumbers = numbers.filter(function (number){
    return number > 0
})
console.log(positiveNumbers)
// output
// [ 1, 4, 3, 2, 4 ]

// reduce() 
//  allows for the accumulation of a single value by iterating over the elements of an array.
// It executes a reducer function on each element and maintains an accumulator that stores the accumulated value
// takes two arguments: the accumulator and the current element. 

numbers = [0,2,3,4,5,100]
// numbers = ["a","b","c"]
const sum = numbers.reduce(function (previousSum,num){
    return previousSum * num
})
console.log(sum)


// find() 
// find the given value in array and If a matching element is found, it is returned; otherwise, undefined is returned.
numbers = [1,2,3,4,5]
let value = numbers.find(function(num){
    return num === 3
})
console.log(value)

// findIndex()
// return the index of the element if element is found
numbers = [1,2,3,4,5,11]
let index = numbers.findIndex(function (i){
    return i == 11
})
console.log(index)


// other in-built functions
// every()
// It returns a boolean value indicating if all elements satisfy the condition.

numbers = [2,4,4]
let isEven = numbers.every(function(num){
    return num % 2 == 0
})
console.log(isEven)


// fill()
//  fill function changes all elements in an array with a static value, starting from
// a specified start index and ending at a specified end index
// FileList(value,start index(include),end index(not include))
numbers = [1,2,3,4,5,6,7]
numbers.fill(0,3,numbers.length-1)
console.log(numbers)
// output
// [1, 2, 3, 0,0, 0, 7]

// findLast()
//  return the last value which satisfyy the specific condition
numbers = [10,20,30,40,50]
let foundNumber = numbers.findLast(function(num){
    return num < 30
})
console.log(foundNumber)

// findLastIndex()
//  return the last index of value which satisfy the specific condition
numbers = [10,20,30,40,50]
let foundNumberIndex = numbers.findLastIndex(function(num){
    return num == 30
})
console.log(foundNumberIndex)

//  forEach()
//  used to perform an operation on each item of the array without returning a new array
numbers.forEach(num => {
    console.log(num = num + 100)
});

console.log(numbers)