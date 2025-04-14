/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

// For this one, I made a function called `filterProducts` that takes in a callback,
// so I can filter the products however I want. I tried it out by getting just the in-stock
// items and also the expensive ones (over $500).

function filterProducts(productArray, callback) {
  return productArray.filter(callback);
}

// Example
// Filtering products that are in stock
const inStockOnly = filterProducts(products, function(product) {
  return product.inStock;
});

// Filtering products that are above $500
const expensiveProducts = filterProducts(products, function(product) {
  return product.price > 500;
});

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

// I used `map()` here to go through the products and turn all the names into uppercase.
// Just a quick way to transform the list without changing the original.

const uppercasedNames = products.map(function(product) {
  return product.name.toUpperCase();
});


/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/

// This part was kind of cool. I made a function that takes a discount percentge
// and returns another function that updates the price. Then I used `map()` with it
// to apply a 20% discount to everything.

function applyDiscount(discountPercent) {
  return function(product) {
    const discountedPrice = product.price * (1 - discountPercent / 100);
    return { ...product, price: discountedPrice };
  };
}

// Example
// Applying a 20% discount to all products
const discount20 = applyDiscount(20);
const discountedProducts = products.map(discount20);

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

// I used `reduce()` here to total up the prices of just the instock products.
// It skips anything that’s out of stock and adds the rest to the total.

const totalInStockValue = products.reduce(function(accumulator, product) {
  if (product.inStock) {
    return accumulator + product.price;
  }
  return accumulator;
}, 0);

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);

console.log("Filtered products (in stock):", inStockOnly);
console.log("Filtered products (expensive):", expensiveProducts);
console.log("Uppercased names:", uppercasedNames);
console.log("Discounted products (20% off):", discountedProducts);
console.log("Total value in stock:", totalInStockValue);