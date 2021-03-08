/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products,name,size) {
    let product = null;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === name && products[i].availableSizes.includes(size)) {
        product = products[i];
      }
      // console.log(product);
      /* result
        { name: 'Court Sneaker', priceInCents: 9800, availableSizes: [ 5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11 ] }
        { name: 'Court Sneaker', priceInCents: 9800, availableSizes: [ 5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11 ] }
        { name: 'Court Sneaker', priceInCents: 9800, availableSizes: [ 5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11 ] }
      */
      return product;
    }
}

// the object actually looks like the following
/*
  {
    "Court Sneaker": {
      priceInCents: 8800,
      quantity: 1
    }
  }
*/
function addProductToCart(product, cart = null) {
  if(!cart){
    let newCart = {}
    newCart[product.name] = {quantity: 1, priceInCents: product.priceInCents}
   return newCart
  } else {
    let isProductInCart = false
    for (let name in cart){
      if(name === product.name){
        isProductInCart = true
      }
    } 
    if (isProductInCart=== false){
      cart[product.name] = {quantity: 1, priceInCents: product.priceInCents}
    } else{
      cart[product.name].quantity++
    }
  }
  //console.log(cart);
  /* 
      { 'Square-Neck Jumpsuit': { priceInCents: 8800, quantity: 2 } }
  */
  return cart;
  }

function calculateTotal(cart, lineItem = 0,total = 0) {
  // return zero if cart is empty
  if (cart.length === 0){
    return total;
  } else {

// calculate total
    for (let product in cart) {   
        const item = cart[product];
        // console.log(item);
      
        const price = item.priceInCents;
        const qty = item.quantity;
        // console.log(price,qty);

      // calculate price for each line item in cart
        lineItem = price * qty;

      // add line item to total
        total = total + lineItem; 
    }
    return total;
  }
}

function printReceipt(cart) {
  // cart total
  const total = calculateTotal(cart);
  
  // printTotal
  const printTotal = printablePrice(total); 
  
  // return a receipt of all items in the cart
  let itemsInCart = [];

  // return null if cart is empty 
  if (total === 0){
    return null;
  } else { 

    // parse individual items in cart
    for (let name in cart) {
      const item = cart[name];
      const price = item.priceInCents;
      const qty = item.quantity;
      let itemTotal = price * qty;

    // printPrice
      const printPrice = printablePrice(itemTotal);
    
      // print receipt
      itemsInCart.push(`${qty}x${name} - ` + printPrice );
      
    } // end for loop       

    // print cart grand total
    console.log(itemsInCart[0] + "\n" + itemsInCart[1] + "\n" + "Total: " + printTotal ); 
    return (itemsInCart[0] + "\n" + itemsInCart[1] + "\n" + "Total: " + printTotal ); 

   } // end else statement

} // end function

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
  printablePrice,
};

/* error message
expected 
'1xSquare-Neck Jumpsuit - $88.00\n2xRelaxed Silk Shirt - $98.00\nTotal: $284.00' to equal 
'1xSquare-Neck Jumpsuit - $88.00\n2xRelaxed Silk Shirt - $196.00\nTotal: $284.00'
*/