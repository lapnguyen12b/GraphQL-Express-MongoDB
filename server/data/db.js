const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
  getAllAuthors: async () => await Author.find(),
  getBookById: async id => await Book.findById(id),
  getAuthorById: async id => await Author.findById(id),
  getAllBooksByAuthorId: async (condition) => await Book.find(condition),
  createAuthor: async args => {
    const newAuthor = new Author(args)
    return newAuthor.save()
  },
  createBook: async args => {
    const newBook = new Book(args)
    return newBook.save()
  },
}

module.exports = mongoDataMethods
