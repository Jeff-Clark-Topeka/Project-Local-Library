function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let result = 0

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(borrow.returned === false) {
        if (result < 6) {
          result += 1
        }
      }
    })
  })
  return result
}

function getMostCommonGenres(books) {
  let genreList = []
  let count = 1

  books.forEach((book) => {
    let genreObj = { name: book.genre, count: count}
    let found = genreList.find((genre) => {
      if(genre.name === book.genre) {
        genre.count++
        return true
      } else {
        return false
      }
    }) 
    if (!found) {
      genreList.push(genreObj)
    }
  })
  genreList.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1)
  let mostCommonGenres = genreList.slice(0, 5)
  return mostCommonGenres
}

// Helper Function for getMostPopularBooks

function getBookObject (books) {
  let booksArr = []

  books.forEach((book) => {
    let count = book.borrows.length
    let bookObj = { name: book.title, count: count}
    booksArr.push(bookObj)
  })
  return booksArr
}

function getMostPopularBooks(books) {
  let bookList = getBookObject(books)

  bookList.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1)
  let mostPopularBooks = bookList.slice(0, 5)
  return mostPopularBooks
}

function getMostPopularAuthors(books, authors) {
  let count = 0
  let authorList = []

  authors.forEach((author) => {
    let authorObj = { name: `${author.name.first} ${author.name.last}`, count: count }
    books.forEach((book) => {
      if(book.authorId === author.id) {
        authorObj.count = authorObj.count + book.borrows.length
        authorList.push(authorObj)
      }
    })   
  })
  let authorListReduced = authorList.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)) {
      return [...accumulator, currentValue]
    }
    return accumulator
  }, [])
  
  authorListReduced.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)  
  let mostPopularAuthors = authorListReduced.slice(0, 5)
  return mostPopularAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
