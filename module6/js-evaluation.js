// Part 1: Check Cart Price
function cartPrice(items){
    let totalCost = 0;
    for (i=0; i < items.length; i++){
      totalCost = totalCost + items[i].price;
    }
    return(totalCost);
  }

// Part 2: Most Expensive Item
  function mostExpensiveItemName(items){
    let maxPrice = 0;
    let item;
    for(i=0; i < items.length; i++){
      if (items[i].price > maxPrice){
        maxPrice = items[i].price;
        item = items[i].itemName;
      }
    }
    return(item);
  }

// Part 3: Price Lookup
function priceLookup(items,prodName){
    for (i=0; i < items.length; i++){
      if (items[i].itemName === prodName){
        return(items[i].price);
      }
    }
  }

// Part 4: Filter By Price
function priceFilter(items,amt){
    let itemList = [];
    for(i=0; i < items.length; i++){
     if (items[i].price < amt) {
       itemList.push(items[i])
     }
    }
  return(itemList);
  }

// Part 1: Count Correct Answers
function countCorrectAnswers(studentAnswers){
    let count = 0
    for(i=0; i < studentAnswers.length; i++){
      if(studentAnswers[i].isCorrect === true){
        count++;
      }
    }
    return(count)
  }

// Part 2: Filter Answers By Type
function filterAnswersByType(studentAnswers){
    let studentResponse = [];
    for(i=0; i< studentAnswers.length; i++){
      if(studentAnswers[i].isEssayQuestion === true){
        studentResponse.push(studentAnswers[i]);
      }
    }
    return(studentResponse);
  }

// Part 3: Find Student's Answer To A Question
function findAnswer(answers,match){
    for(i=0; i < answers.length; i++){  
      if(answers[i].question === match){
        return(answers[i]);
      }
    }
  }

// Part 4: Check For Plagiarism
function checkForPlagiarism(answer, snippet){
    for(let i = 0; i <answer.length; i++){
      if(answer[i].isEssayQuestion === true){
        if(answer[i].response.includes(snippet)){
          return true;
        }
      }
    }
    return false
  }