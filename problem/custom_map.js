/** Problem statement
You need to create a higher-order function that could be applied to an array of numbers to get the modified result.




Requirements:

1. Implement the customMap function without using any built-in higher-order functions (like map, forEach, etc.).
2. The function should take in two parameters: array (an array of numbers) and callbackFn 
    (A function that takes a number as an argument and returns a transformed number.).
3. The customMap function should iterate over each element of the input array.
4. For each element, it should apply the callbackFn to generate a modified value.
6. The modified values should be stored in a new array, which will be returned after all elements have been processed.
7. The customMap function should return the new array containing all the modified values.
8. The callbackFn could be anything, for e.g., square(a function that returns the square of the number passes to it), 
double(a function that returns the double of a number), etc.


Expected Input:
customMap([2,3,4],square);


Expected Output:
[4,9,16]


Note:
Focus only on implementing the customMap function. You do not need to create the callbackFn itself. */


function customMap(numbers,fn){
    val = []
    for(let num of numbers){
        val.push(fn(num))
    }
    return val
}

function square(num){
    return num * num
}

numbers = [2,3,4]
squareArray = customMap(numbers,square)
console.log(squareArray)