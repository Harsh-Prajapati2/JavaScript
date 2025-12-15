//  spred operator

function add(...numbers){
    console.log(numbers)
    console.log(typeof numbers)
    sum = 0
    for (const num of numbers){
        sum = sum + num
    }
    return sum
}
console.log("Spred operator")
console.log("4 parameters (1,2,3,4) ",add(1,2,3,4))
console.log("8 parameters (1,2,3,4,5,6,7,8) ",add(1,2,3,4,5,6,7,8))

console.log()
console.log()
console.log()

//  rest operator
console.log("Rest operator")
arr1 = [1,2,3]
arr2 = [4,5,6]
arr3 = [...arr1,...arr2]
console.log(arr3)



//  spread operator is used to shallow copy but not to create deep copy
// shallow copy example using spread operator
console.log()
console.log()
console.log("Shallow Copy Example Using Spread Operator.")

var oA = [1,2,3]
var cA = [...oA]
oA[0] = 0
console.log("original :",oA)
console.log("copied :",cA)


console.log()
console.log()
console.log()

// Deep copy example
console.log("Deep copy.")

oA = [1,2,3]
cA = clonedeep().oA
oA[0] = 0
console.log("original :",oA)
console.log("copied :",cA)


const original = {
  name: 'Alice',
  pets: ['Dog', 'Cat']
};

// Shallow Copy (e.g., using spread syntax)
const shallowCopy = { ...original };
shallowCopy.name = 'Bob'; // Affects only the copy (primitive value)
shallowCopy.pets.push('Fish'); // Affects BOTH the original and the copy (nested object reference)

// Deep Copy (e.g., using JSON methods, with limitations)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = 'Charlie'; // Affects only the copy
deepCopy.pets.push('Bird'); // Affects only the copy

// After operations:
// original: { name: 'Alice', pets: ['Dog', 'Cat', 'Fish'] }
// shallowCopy: { name: 'Bob', pets: ['Dog', 'Cat', 'Fish'] }
// deepCopy: { name: 'Charlie', pets: ['Dog', 'Cat', 'Fish', 'Bird'] }

console.log(original);
console.log(shallowCopy);
console.log(deepCopy);