/** Problem statement
You are tasked with creating a program to calculate the price of a pizza based on its size, quantity and selected toppings.


Objectives
Pizza Size and Base Price:
The base price of the pizza depends on its size, which can be small, medium, or large.
small: $8.00
medium: $10.00
large: $12.00
Write a JavaScript function pizzaPricing that accepts the size of the pizza as a string parameter (small, medium, or large).
Toppings:
Each topping adds an additional cost of $1.50.
The pizzaPricing function should return a function (curried function) that takes an array of selected toppings as a parameter 
(e.g., ['bacon', 'cheese']).
Quantity:
The curried function should then return another function that takes the quantity of pizzas as a parameter and calculates the total price.
Ensure that the final total price is returned as a number, rounded to two decimal places.


Expected Input
Size: large
Toppings: ['bacon', 'cheese']
Quantity: 1
Expected Output
Total Price: 15.00
Solution:
Formula: (Price of the Size + No. of toppings * 1.5) * Quantity => (12 + 2*1.5)* 1 = 15   


Hints:
Use a JavaScript object to store the base prices for each size.
The final price should include the base price plus the total cost of the toppings, multiplied by the quantity.
Remember to use .toFixed(2) to ensure the result is formatted to two decimal places. */

function pizzaPricing(size,price){
    return function (topping){
        return function(quantity){
            return (price(size) + topping * 1.5) * quantity 
        }
    }
}
function price(size){
    if (size == "small"){
        return 8.0
    }else if(size =="medium"){
        return 10.0
    }else{
        return 12.0
    }
}
let size = "small"
let topping = ['bacon','cheese']
let quantity = 2
final_price = pizzaPricing(size,price)(topping.length)(quantity)
console.log(final_price)