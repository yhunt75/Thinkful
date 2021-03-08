/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Washed Black Denim Overalls",
     priceInCents: 12000,
     availableSizes: [ 28, 30, 32, 36 ]
   }
*/

// `salesTax` is a decimal number, like 0.065
function createSalesProduct(product, salesTax) {
  
  const { name,availableSizes } = product;
  const np = { name,availableSizes,salesTax };
  const priceInCents = product.priceInCents * (1 + salesTax);
  const newSalesProduct = { ...np, priceInCents };
  
  //review output
  // console.log(`newSalesProduct: ${newSalesProduct}`);

//  answer
 return(newSalesProduct);
}

/**** notes for  createSalesProduct */
// original return statement
  // return {
  //   name: product.name,
  //   availableSizes: product.availableSizes,
  //   salesTax,
  //   priceInCents: product.priceInCents * (1 + salesTax),
  // };

function joinSizes(productA, productB) {

  const prodA = productA.availableSizes;
  const prodB = productB.availableSizes;
  const result = [...prodA, ...prodB];
  
// answer
return(result);
}


/***** notes for joinSizes function */

  // orig code
  // const result = [];
  // return result.concat(productA.availableSizes, productB.availableSizes);

  // check output
  // console.log(result);
      /*
        Log
          [ 28, 30, 32, 34, 38, 36, 40 ]
      */
  
     module.exports = {
      createSalesProduct,
      joinSizes,
    };