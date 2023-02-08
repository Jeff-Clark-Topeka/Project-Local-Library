function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id) 
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1
  })
}

function getTotalNumberOfBorrows(account, books) {
  let timesBorrowed = 0
  
  books.forEach((book) => {
    book.borrows.forEach(borrow => {
      if (account.id === borrow.id) {
        timesBorrowed += 1
      }
    });
  })
  return timesBorrowed
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountBorrowsArr = []
  console.log(authors)

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      authors.forEach((author) => {
        if(author.id === book.authorId) {
          book.author = author
          if (borrow.id === account.id && borrow.returned === false) {
            accountBorrowsArr.push(book)
          }
        }
      })
    })
  })
  return accountBorrowsArr
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
