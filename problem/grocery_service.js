/** Problem statement
Suppose you're working on a project for an online grocery delivery service, 
and you have an array of product objects that represent the available products in the store.

Requirements

Requirement 1:

Each product object has the following properties:
id (string) - unique ID for the product
name (string) - name of the product
category (string) - category in which the product belongs
price (number) - price of the product
inStock (boolean) - true if the product is currently in stock, false otherwise

Requirement 2:

You need to implement a function searchAndBuyProduct that allows the user to search for a 
product by its name and buy it if it is in stock. The function should take two parameters:

productList (array) - an array of product objects 
productName (string) - the name of the product to search for


Requirement 3:

Here are the steps to implement the searchAndBuyProduct function:

1. Use the find method to search for the product object whose name matches the productName parameter.
2. Check if the product is in stock.
3. If the product is in stock: 

    - Set the inStock property of the product object to false .

    - Return true indicating that purchase has been made.
4. If the product is not in stock:
    - Return false.
5. If the product is not found in the list:
    - Return false. */

    const productList = [
        { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
        { id: "p2", name: "Oranges",category: "Fruits",price: 1.99,inStock: false,},
        {id: "p3",name: "Blueberries",category: "Fruits",price: 4.99,inStock: true,},
        {id: "p4",name: "Carrots",category: "Vegetables",price: 1.0,inStock: true,},
        {id: "p5",name: "Tomatoes",category: "Vegetables",price: 1.5,inStock: true,},
      ];
      
      //give two parameters to the given function
      function searchAndBuyProduct(productList, productName) {
        // Step 1: Find the product object with the matching name using the find method
        let product = productList.find(product => product.name === productName);
      
        // Step 2: Check if the product was found and if it's in stock
        if (product) {
          if (product.inStock) {
            // Step 3: If the product is in stock, update inStock and return true
            product.inStock = false;
            return true; // Purchase successful
          } else {
            // Step 4: If the product is not in stock, return false
            return false; // Product out of stock
          }
        }
      
        // Step 5: If the product is not found, return false
        return false; // Product not found
      }

console.log(searchAndBuyProduct(productList, "Apples")); // true (purchase made)
console.log(searchAndBuyProduct(productList, "Oranges")); // false (out of stock)
console.log(searchAndBuyProduct(productList, "Bananas")); // false (not found)
console.log(searchAndBuyProduct(productList, "Apples")); // false (already purchased)
