// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { getBooksBorrowedCount } = require("./home");

function findAccountById(accounts, id) {
  console.log(id);
  let account = accounts.find((account) => account.id === id);
  console.log(account);
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA,nameB) => (nameA.name.last < nameB.name.last ? -1 : 1));
  return (accounts);
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;

  books.forEach((book) => { book.borrows.forEach((borrow) => { 
      if (account.id === borrow.id) {
        count = count + 1;
      }
    })
  })
  console.log(count);
  return count;

}

 // should return all of the books taken out by an account with the author embedded
 function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = []; // create array for books taken by account.id

  // book info
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })

  // add author info
  books_taken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })

  return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
