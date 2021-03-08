/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  for (let items in cart){
    const buggy = cart[items];
    const priceInCents = buggy.priceInCents * buggy.quantity;
    total = total + priceInCents;
  }
  return(total);
}

function printCartInventory(cart) {

  // initialize empty array
  let items = [];

  // returns empty string if the cart is empty
  if (!cart.length){ console.log('') };

  // should return a string of the item names and quanity joined by \n
  for (let productName in cart){
    const inventory = cart[productName];
    const amt = inventory.quantity;
    items.push(amt + "x" + productName);
  }
  return(items.join("\n"));
} // end function

module.exports = {
  calculateCartTotal,
  printCartInventory,
};