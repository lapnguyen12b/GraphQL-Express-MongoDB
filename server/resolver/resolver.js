const resolvers = {
  //QUERY
  Query: {
    book: async (_parent, { id }, { mongoDataMethods }) => mongoDataMethods.getBookById(id),
    books: async (_parent, _args, context) => context.mongoDataMethods.getAllBooks(),
    author: async (_parent, { id }, context) => context.mongoDataMethods.getAuthorById(id),
    authors: async (_parent, _args, { mongoDataMethods }) => mongoDataMethods.getAllAuthors(),
  },
  Book: {
    author: async ({ authorId }, _args, { mongoDataMethods }) => mongoDataMethods.getAuthorById(authorId)
  },
  Author: {
    books: async ({ id }, _args, { mongoDataMethods }) => mongoDataMethods.getAllBooksByAuthorId({authorId: id})
  },

  //MUTATION
  Mutation: {
    createAuthor: async (_parent, args, context) => {
      return context.mongoDataMethods.createAuthor(args)
    },
    createBook: async (_parent, args, { mongoDataMethods }) => mongoDataMethods.createBook(args),
    updateBook: async (_parent, args, { mongoDataMethods }) => mongoDataMethods.updateBook(args),
    updateAuthor: async (_parent, args, { mongoDataMethods }) => mongoDataMethods.updateAuthor(args),
    deleteBook: async (_parent, { id }, { mongoDataMethods }) => mongoDataMethods.deleteBook(id),
    deleteAuthor: async (_parent, { id }, { mongoDataMethods }) => mongoDataMethods.deleteAuthor(id)
  }

}

module.exports = resolvers