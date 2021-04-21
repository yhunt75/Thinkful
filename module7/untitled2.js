// How many campsites do we have?
function getCampsites(campgrounds){
  return campgrounds.length;
}

// How many people can we host at max capacity?
let size = 0;
function getPartySize(camgrounds){
  for (let i = 0; i < campgrounds.length; i++){
    size = size + camgrounds[i].partySize;
  }
  return size;
}

// Which campsites are available to reserve?
let available = 0;
function getAvailability(campgrounds){
    for (let i = 0; i < campgrounds.length; i++){
    if (campgrounds.isReserved === true){
      available ++;
    }
  }
  return available;
}
// What's the capacity of the nonreserved sites?

function additionalCapacity(campgrounds){
  let capacity = 0;
  for (let i = 0; i < campgrounds.length; i++){
    if (campgrounds[i].isReserved === false){
      capacity = capacity + campgrounds[i].partySize;
    }
  }
  return (capacity);
}
// How many campsites are there with each kind of view?


function getViewType(campgrounds){
  let viewType = [];
  for (let i = 0; i < campgrounds.length; i ++){
    
  }
  return (viewType);
}


function findDestination(userLoc,destinations){
  for (let i = 0; i < destinations.length; i++){ 
    // compare user input with list
    if (destinations[i].location.toLowerCase().includes(userLoc.toLowerCase())) {
      return destinations[i];
    }
  }
    return null;
}


// Which campsites are available to reserve for a given party size and a given view?