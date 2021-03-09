// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  console.log(id);
  let author = authors.find((author) => author.id === id);
  console.log(author);
  return author;
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
    if (book.borrows.find(item => item.returned === false)) {
      borrowed.push(book);
    } 
    else {
      returned.push(book);
    }
  });

  books_status.push(borrowed);
  books_status.push(returned);

  /* check console.log output */
  console.log("======== borrowed ========");
  console.log(borrowed);
  console.log(" ");

  console.log("======== returned ========");
  console.log(returned);
  console.log(" ");

  console.log("======== books status ========");
  console.log(books_status);
  console.log(" ");

  // return books_status
  return books_status;

}
// should return an array for a book of all borrowers with their information and return status
function getBorrowersForBook(book, accounts) {
  // console.log(book); // contains 1 book
/*
{
  id: '5f44713265e5d8d17789beb0',
  title: 'tempor occaecat fugiat',
  genre: 'Travel',
  authorId: 16,
  borrows: [
    { id: '5f446f2e4eff1030e7316861', returned: true },
    { id: '5f446f2ecc5c4787c403f844', returned: true }
  ]
}
*/

  // console.log(accounts);
/* output
{
    id: '5f446f2e2f35653fa80bf490',
    picture: 'http://placehold.it/32x32',
    age: 36,
    name: { first: 'Rodriquez', last: 'Hawkins' },
    company: 'COMDOM',
    email: 'rodriquez.hawkins@comdom.io',
    registered: 'Sunday, August 9, 2015 1:43 AM'
  },
  */

  // find all borrowers 
  let borrowers = [];
  for (let i = 0; i < accounts.length; i++){
    if (accounts.id === book.borrows.id)
    borrowers.push(accounts);
  } // end for

  console.log(borrowers);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
