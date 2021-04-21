// If no sites are available, return the string 'Sorry, no campsites with that view are available to host your party'
function notAvailable() {
  return "Sorry, no campsites with that view are available to host your party";
}

function findMyCampsites(campgrounds,type,size){
   
  let available = [];
  let withViews = [];
  
  // currently available campsites (isReserved === false)
 for (let i = 0; i < campgrounds.length; i++){
    if (campgrounds[i].isReserved === false){
      available.push(campgrounds[i],type,size);
    }
    return notAvailable();
  }
  
  //with the view that matches the input string (e.g. ocean or forest)
 for (let j = 0; j < available.length; j++){ 
    if (available[j].view === available[j].type){
      withViews.push(available[j]);
    }
    return notAvailable();
  }
  
  // that can host the party size of the input number, or greater
 for (let k = 0; k < withViews.length; k++){
    if (withViews[k].partySize >= withViews[k].size){
      return(withViews[k].number);
    }
    return notAvailable();
  }
  return null;
}
