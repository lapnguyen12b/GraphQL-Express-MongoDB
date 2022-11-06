const { books, authors } = require('../data/static')
const resolvers = {
  Query: {
    book: (parent, args) => books.find(item => item.id == args.id),
    books: () => books,
    author: (parent, args) => authors.find(item => item.id == args.id),
    authors: () => authors,
  },
  Book: {
    author: (parent, _args) => {
      return authors.find(author => author.id == parent.authorId)
    }
  },
  Author: {
    books: (parent, _args) => {
      return books.filter(book => book.authorId == parent.id)
    }
  }
}

module.exports = resolvers