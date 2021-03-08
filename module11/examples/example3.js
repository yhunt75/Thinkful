// const author = {
//     name: {
//       firstName: "Philip",
//       surname: "Pullman",
//     },
//     birthday: "1946-10-19",
//   };
  
//   const { name: {firstName,surname} } = author;
//   console.log(firstName);


//   const authors = [
//     "Ursula K. Le Guin",
//     "Brandon Sanderson",
//     "Terry Pratchett",
//     "Neil Gaiman",
//     "J. R. R. Tolkien",
//   ];

// const [first, second, third, ...otherAuthors] = authors;
// console.log(first); 
// console.log(second); 
// console.log(third); 
// console.log(otherAuthors); 

// const product = {
//     name: "Geometric Print Swim Shorts",
//     colors: {
//       pink: {
//         priceInCents: 1499,
//         availableSizes: ["XS", "S", "M", "XL"],
//       },
//       blue: {
//         priceInCents: 999,
//         availableSizes: ["M", "L", "XL"],
//       },
//     },
//   };
  
//   const { colors: { pink } } = product;
//   console.log(pink);

// const product = {
//     name: "Geometric Print Swim Shorts",
//     colors: {
//       pink: {
//         priceInCents: 1499,
//         availableSizes: ["XS", "S", "M", "XL"],
//       },
//       blue: {
//         priceInCents: 999,
//         availableSizes: ["M", "L", "XL"],
//       },
//     },
//   };
  
//   const { colors: { pink: { availableSizes } } } = product;
//   console.log(availableSizes);

const product = {
    name: "Geometric Print Swim Shorts",
    colors: {
      pink: {
        priceInCents: 1499,
        availableSizes: ["XS", "S", "M", "XL"],
      },
      blue: {
        priceInCents: 999,
        availableSizes: ["M", "L", "XL"],
      },
    },
  };
  
  
  function printColors ({ colors }) {
    const result = Object.keys(colors);
    console.log(result.join(" and "))
  }
  
  printColors(product);