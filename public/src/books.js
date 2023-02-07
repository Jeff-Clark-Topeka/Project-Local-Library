function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) => book.borrows.returned === false)
  let returned = books.filter((book) => book.borrows.returned === true)

  let checkedOutFiltered = []
  let returnedFiltered = []

  for (let i = 0; i < 6; i++) {
    checkedOutFiltered.push(checkedOut[i])
  }

  for (let i = 0; i < 3; i++) {
    returnedFiltered.push(returned[i])
  }

  let borrowedStatus = [checkedOutFiltered, returnedFiltered]
  return borrowedStatus
}

function getBorrowersForBook(book, accounts) {
  let borrowsArr = []

  book.borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      account.returned = borrow.returned
      if(borrow.id === account.id) {
        borrowsArr.push(account)
      }
    })
  })
  let sliced = borrowsArr.slice(0, 10)
  return sliced
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
