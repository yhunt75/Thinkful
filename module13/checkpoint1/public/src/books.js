// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {

  // converts array to object
  const arrayToObject = (array) =>
    array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});

  // set author to object returned above
  const author = arrayToObject(authors);
  authorInfo = author[id];
  
  // return author info
  console.log(authorInfo);
  return authorInfo;
}

function findBookById(books, id) {
  console.log(id);
  let book = books.find((book) => book.id === id);
  console.log(book);
  return book;

}

function partitionBooksByBorrowedStatus(books) {
  let books_status = [];
  let borrowed = [];
  let returned = [];

  // borrowed books
  books.forEach(book=>{
    book.borrows.find(item => item.returned === false) ? borrowed.push(book) : returned.push(book);
  });

  books_status.push(borrowed);
  books_status.push(returned);

  // return books_status
  return books_status;
}

// should return an array for a book of all borrowers with their information and return status
function getBorrowersForBook(book, accounts) {
  let result = [];                  // initialize array for final result
  let borrowers = book.borrows;     // generate array of borrowers

  borrowers.forEach(borrower => {
    let person = accounts.find(customer => customer.id === borrower.id);
    
    
    let listOfPeople = person;                      // assigning results to list of people object
    listOfPeople['returned'] = borrower.returned;   // adding returned to object
    result.push(listOfPeople);                      // push list to result array
  })

  console.log("======== result ========");
  console.log(result.slice(0,10));
  console.log(" ");

  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};