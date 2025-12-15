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