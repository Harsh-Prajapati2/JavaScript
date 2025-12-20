// var filter = function(arr, fn) {
//     let result = [];
//     for(let idx in arr){
        
//         if(fn(arr[idx],Number(idx))){
//             result.push(arr[idx]);
//         }
//     }
//     return result;
// };
// function fn(n,i){
//     return i===0;
// }

// // filter([1,2,3,4,5],fn);
// console.log(filter([23,2,3,4,5],fn));
// // console.log(Number('0') === 0);
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const person = JSON.parse(jsonString);
console.log(person); // Output: "John"
const s = JSON.stringify(person);
console.log(typeof s);

const originalObject = [1,2,3,4];
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
originalObject[0] = 10;
console.log(originalObject);
console.log(deepCopyObject);