/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/


function listAllItems(products) {
   
  
  let numProducts = products.length;
  // zero products 
  if(!numProducts) {
    return("There are no items for sale."); 
  }
  
  // 1 product
  if(numProducts === 1){
    let name = products[0].name;
    return(`There is 1 item for sale: ${name}.`);
  }
  
  // exactly 2 products
  if (numProducts === 2) {
    let multipleProducts = [];
    for (let i=0; i < numProducts; i++) {
      multipleProducts.push(products[i].name);
    }
    return(`There are ${numProducts} items for sale: ${multipleProducts.join(" and ")}.`);
  }  
    
  // more than 2
  if (numProducts >= 2) {
      let multipleProducts = [];
      for (let i=0; i < numProducts; i++) {
        multipleProducts.push(products[i].name);
      }
      return(`There are ${numProducts} items for sale: ${multipleProducts.join(", ")}.`);
    }
}

module.exports = { 
  listAllItems,
};