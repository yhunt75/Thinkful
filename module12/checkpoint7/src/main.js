/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks,state) {
  console.log(parkState = parks.filter((park) => park.location.state === state));
  return parkState = parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks,users,username) {

  // find the wishlist of username
  let list = users[username].wishlist;
  console.log(list); // returns [4,6]

  // return park info for park.id in list
  const usersParks = parks.filter((park) => list.includes(park.id)); 
  console.log(usersParks);  
  return(usersParks);  

}

/*
This function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.
*/

function userHasVisitedAllParksInState(parks, users, state, username) {
  //  console.log(username);

  // find park info in state
  const parksInState = parks.filter((park) => park.location.state === state);
  // console.log(parksInState);

  
  // find park id
  const parkId = parksInState.map((info) => info.id);
  // console.log(parkId); 

  // find user info
  const visit = users[username].visited;
  console.log(visit);

  // if visited is = parkId ? true : false;
  return JSON.stringify(visit).includes(JSON.stringify(parkId)); 
}

/*
    This function takes in the list of users and two usernames. 
    If the first user has visited any of the parks represented by the second user's wishlist, return true. 
    Otherwise, return false.
*/

function userHasVisitedParkOnWishlist(users, firstUser, secondUser) {
  // first user's visited
  const first = users[firstUser].visited;
  console.log('first: ' + first);

  // second user's wishlist
  const second = users[secondUser].wishlist;
  console.log('second: ' + second);

  // has first user visited second user's wishlist
  const result = JSON.stringify(first).includes(JSON.stringify(second));
  console.log(result);
  return(result);

}

// This function returns all the usernames who have visited any park on the given user's wishlist.
function getUsersForUserWishlist(users,usernames) {
  //Retreive the user wishlist
  let userWishlist = users[arguments[1]]["wishlist"];
  var arrayRes = [];
  
  //loop throght users array
  for (const [key, value] of Object.entries(users)) {
     var filteredArray = [];
    if (  `${key}` !== usernames ) {
     var filteredArray = value['visited'].filter(value => userWishlist.includes(value));
      if  (filteredArray.length != 0 ) {
        arrayRes.push( `${key}`);
      }
    }
  }
  return arrayRes;
}


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};

/*
1. look at data types
2. array of users
3. for each user can use map to find all visited id

ternary operator

  // let result1 = Object.keys(users).filter((name) => users.visited === userWishList); 
  // console.log("result1: " + result1);

  // let result2 = JSON.stringify(users.visited).includes(JSON.stringify(userWishList));
  // console.log("result2: " + result2);

  // let result3 = users.filter(JSON.stringify(users.visited).includes(JSON.stringify(userWishList)));
  // console.log("result3: " + result3);

  // console.log(names = users.filter((u) => u.visited));
*/