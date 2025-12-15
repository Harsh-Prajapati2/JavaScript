// const number = [1,2,3,4,5]
// const val = number.find(num =>{
//     return num > 3;
// })
// console.log(val)


// const idx = number.findIndex(num =>{
//     return num == 3;
// })
// console.log(idx)

// const numbers = [10, 20, 30, 40, 50];
// const foundNumber = numbers.findLast(function(number) {
// return number > 30;
// });
// console.log(foundNumber); // Outputs: 50

const numbers = [10, 20, 30, 40, 50];
const foundIndex = numbers.findLastIndex(function(number) {
    console.log(number)
return number > 30;
});
console.log(foundIndex); // Outputs: 4
