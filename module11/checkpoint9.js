// const colors = ["blue", "green", "red", "yellow"];
// for (var i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(i);


// const colors = ["blue", "green", "red", "yellow"];
// for (const i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }
// console.log(i);

// const favoriteColorCount = {
//   blue: 8,
//   green: 6,
//   red: 3,
//   yellow: 1,
// };

// const favoriteColor = "";
// const maxCount = 0;
// for (let color in favoriteColorCount) {
//   const count = favoriteColorCount[color];
//   if (maxCount < count) {
//     maxCount = count;
//     favoriteColor = color;
//   }
// }

// console.log(favoriteColor);

// const favoriteColorCount = {
//   blue: 8,
//   green: 6,
//   red: 3,
//   yellow: 1,
// };

// let favoriteColor = "";
// let maxCount = 0;
// for (let color in favoriteColorCount) {
//   const count = favoriteColorCount[color];
//   if (maxCount < count) {
//     maxCount = count;
//     favoriteColor = color;
//   }
// }

// console.log(favoriteColor);


// Function definition
// function calculateTotal(products, { discountPercentage, salesTax }) {
//   function calculateTotal(products, { discountPercentage, salesTax } = {}) {  
//   let result = 0;
//   for (let i = 0; i < products.length; i++) {
//     const{ priceInCents, quantity } = products[i]; result += priceInCents * quantity; } if (discountPercentage) result *= 1 - discountPercentage;
//   // return result * (1+ salesTax); } 
//   console.log(result * (1+ salesTax)); 
// } 

  // Inputs
const products = [ { name: "Black Longline T-Shirt",
    priceInCents: 1500,
    size: "M",
    quantity: 2,
  },
  {
    name: "Light Wash Stretch Skinny Jeans",
    priceInCents: 6000,
    size: 32,
    quantity: 1,
  },
];
const options = { discountPercentage: 0.1, salesTax: 0.0825 };

// Function call
calculateTotal(products, options); //> 8768.25


function calculateTotal(products = [], { discountPercentage, salesTax = 0.0825 } = {}) {
  let result = 0;
  for (let i = 0; i < products.length; i++) {
    const{ priceInCents, quantity } = products[i]; result += priceInCents * quantity; } if (discountPercentage) result *= 1 - discountPercentage;
  console.log(result * (1+ salesTax)); } 
