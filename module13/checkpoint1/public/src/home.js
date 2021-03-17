// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return (books.length);
}

function getTotalAccountsCount(accounts) {
  return (accounts.length);
}

function getBooksBorrowedCount(books) {
  let count =0; // initialize counter

  // find books that have not been returned
  books.forEach((book) => {
    if (book.borrows.find((item) => item.returned === false)) {
      count = count +1;
    }
  }); // end forEach
  console.log(count);
  return count;
}

function getMostCommonGenres(books) {
  let result = [];

  // generate a list of genres
  let list = books.map((book) => book.genre);

  while (list.length != 0) {
    
    function aggregate(allGenres, uniqueGenres) {

      let reviewed = allGenres.filter((genre) => genre === uniqueGenres);
      let counted = { name: uniqueGenres, count: reviewed.length };
      result.push(counted);
    } // end aggregate function

    //filter 
    list = list.filter((genre) => genre != list[0]);

    // calling aggregate function
    aggregate(list, list[0]);

  } // end while

  // display results
  result.sort((first, last) => last.count - first.count);
  return result.slice(0, 5); 

}

function getMostPopularBooks(books) {
  // initializing arrays
  let list = [...books];
  let mostPopular = [];
  
  for (let book in list) {
    list = list.filter((book) => book.title, book.borrows);
    let name = list[book].title;
    let count = list[book].borrows.length;
    mostPopular.push({ name: name, count: count });
  } // end for
  mostPopular.sort((first, last) => last.count - first.count);
  return mostPopular.slice(0, 5);
} 

function getMostPopularAuthors(books, authors) {

  const mostPopular = [];
  for (let i = 0; i < authors.length; i++) {
    const author = { name: authors[i].name.first + " " + authors[i].name.last, count: 0 };

    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        author.count += books[j].borrows.length;
      } // end if
    } // end inner for
    mostPopular.push(author);
  } // end outer for

  mostPopular.sort((first, last) => last.count - first.count);
  return mostPopular.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
