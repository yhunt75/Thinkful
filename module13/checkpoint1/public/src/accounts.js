// Note: Please do not change the name of the functions. The tests use those names to validate your code.

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

function getBooksPossessedByAccount(account, books, authors) {
  let acctId = account.id; 
  console.log(acctId); // returns a single user

  // console.log(books);
  let borrowed = books.filter((book) => book.borrows.id === account.id);
  console.log(borrowed);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
