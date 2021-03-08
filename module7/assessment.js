// 1 number how many candy types in the array
function countCandyTypes(inventory){
  return inventory.length;  
}

// 2 how many candies in stock?
function totalInStock(inventory){
  let total = 0;
  for (i=0; i < inventory.length; i++){
    total = total + inventory[i].inStock;
  }
  return(total);
}

// 3 add a new candy to the inventory
function addCandyToInventory(inventory,newCandy){
  inventory.push(newCandy);
  return inventory;
}

// 4 determines whether or not to order the candy
function shouldWeOrderThisCandy(inventory,candyName){
  for (i=0; i < inventory.length; i++){
    if ((inventory.length < 1) || (candyName === inventory[i].candy && inventory[i].inStock > inventory[i].weeklyAverage)) { return false; } else
    if (candyName === inventory[i].candy && inventory[i].inStock < inventory[i].weeklyAverage) { return true; } 
  }
  return false;
}

// 5 how much of a specified candy to order this week? 
function candyOrderQuantity(inventory,candyName){
   for (i=0; i < inventory.length; i++){
    if ((inventory.length < 1) || (candyName === inventory[i].candy && inventory[i].inStock > inventory[i].weeklyAverage)) { return 0; } else
    if (candyName === inventory[i].candy && inventory[i].inStock < inventory[i].weeklyAverage) { 
      return inventory[i].weeklyAverage *2; 
    } 
  }
  return 0;
}

// 6 how many candies to order in total this week 


function allCandyOrders(inventory){
  const order = {};
  for (i=0; i < inventory.length; i++){
    if (inventory[i].inStock < inventory[i].weeklyAverage) { 
       order[inventory[i].candy] = inventory[i].weeklyAverage*2;
    } else {
      order[inventory[i].candy] = 0;
    }
  }
 return order;
}

https://stackoverflow.com/questions/64218867/given-array-write-a-function-that-returns-an-order-object


// another example

function findItems(items, itemType) {
//---------- second part start -------------------
  if (items.length === 0) {
    return "Your cart does not have any items in it.";
  }
//----------- second part end --------------------



//----------   first part start---------------------
  let matches = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === itemType) {
      matches.push(items[i]);
    }
  } 
//------------ first part end -----------------------




//---------- third part start ---------------------
if (matches.length === 0) {
    return "No items found of that type. Please search for a different item.";
  }
//---------- third part end -----------------------




//----------  return from fist part
    return matches;
}
