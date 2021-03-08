// const title = "Guards! Guards!";
// title.substr(3); //> ?
// title.substr(6, 4); //> ?
// title.substr(25); //> ?

function titleize(title) {
    const words = title.split(" ");
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const capitalized = sentenceCase(words[i]);
      result.push(capitalized);
    }
  
    return result.join(" ");
  }
  
  titleize("the light FANTASTIC");