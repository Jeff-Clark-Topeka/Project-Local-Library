function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  let returned = books.filter((book) => book.borrows[0].returned === true)

  let checkedOutFiltered = checkedOut.filter((item, index) => index < 6).map(item => {
    return item
  })
  let returnedFiltered = returned.filter((item, index) => index < 3).map(item => {
    return item
  })

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
