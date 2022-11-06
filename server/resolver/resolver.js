const { books, authors } = require('../data/static')
const resolvers = {
  //QUERY
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
  },

  //MUTATION
  Mutation: {
    createAuthor: (_parent, args) => args,
    createBook: (_parent, args) => args
  }

}

module.exports = resolvers