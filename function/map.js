// const arr = [1,2,3,4,5];
// // double each element
// const result = arr.map(n => n* 2);
// console.log(result);


// const num1 = [12,21,32,21,21321];
// const num2 = [34,23,54,56,243];
// const multiplyByThree = function(n){
//     return n*3;
// } 
// const sum = num1.map(multiplyByThree);
// console.log(sum);


// const ans = [1, 2, 3].map(n => {
//     return n * 2;
// });

// console.log(ans);


/*
Practice Problems / Tasks
🟢 Basic Tasks
1.Convert [1,2,3,4] → [1,4,9,16]
2. Convert array of strings to uppercase
3. Add index to each element

🟡 Intermediate Tasks
4.Extract only price from product objects
5.Add discountedPrice field to products
6. Convert array of numbers to strings with "₹" prefix

🔴 Advanced Tasks
Flatten nested arrays using map + flat
Convert API response to UI-friendly format
Use map() with Promise.all to fetch multiple URLs
Implement custom map() polyfill
*/


/*
1.Convert [1,2,3,4] → [1,4,9,16]


const num = [1,2,3,4];
const result = num.map(n => n*n);
console.log(result);

*/



/*
2. Convert array of strings to uppercase


let s = "hello";
let ans_s = s.split("").map(ch => ch.toUpperCase()).join("");
console.log(ans_s);

*/


/*
3. Add index to each element
ip : [10,20,30];
op : [10,21,32];
     [10+0,20+1,30+2]


const num = [10,20,30];
const ans = num.map((n,i)=> n+i);
console.log(ans);

*/


/*
4.Extract only price from product objects


const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone",  price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];
const prices = products.map(product => product.price);
console.log(prices);
*/

/*
5.Add discountedPrice field to products


const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone",  price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

const DISCOUNT = 10;

const updatedProduct = products.map(product => ({
    ...product,
    discountedPrice : product.price - ((product.price*DISCOUNT)/100)
}));
console.log(updatedProduct);
console.log(products);
products.map(product => {
    product.discountedPrice = product.price * 0.9;
    return product;
});
console.log(products);

*/


/*
6. Convert array of numbers to strings with "₹" prefix
*/

// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Phone",  price: 20000 },
//   { id: 3, name: "Tablet", price: 30000 }
// ];

// const updatedProducts = products.map(product => ({
//     ...product,
//     price : "$" + product.price
// }))
// console.log(updatedProducts);
// console.log(products);


/*
7. Flatten nested arrays using map + flat


// const number = [[3,[4,5,4,3]],[5,6]]
// const ans = number.map(n => n.flat() ).flat();

const number = [1,2,[3,[4,5,4,3]],[5,6]]
const ans = number.flat(2);
console.log(ans);

*/

/*
8. Convert API response to UI-friendly format
*/