const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  getAllBooks: async () => Book.find(),
  getAllAuthors: async () => Author.find(),
  getBookById: async id => Book.findById(id),
  getAuthorById: async id => Author.findById(id),
  getAllBooksByAuthorId: async (condition) => Book.find(condition),
  createAuthor: async args => {
    const newAuthor = new Author(args)
    return newAuthor.save()
  },
  createBook: async args => {
    const newBook = new Book(args)
    return newBook.save()
  },
  updateBook: async args => {
    if (!args.id) return;
    await Book.findOneAndUpdate(
      { _id: args.id },
      {
        $set: {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        }
      }
    );
    return Book.findById(args.id)
  },
  updateAuthor: async args => {
    if (!args.id) return;
    await Author.findOneAndUpdate(
      { _id: args.id },
      {
        $set: {
          name: args.name,
          age: args.age,
        }
      }
    );
    return Author.findById(args.id)
  },
  deleteBook: async id => {
    await Book.findByIdAndDelete({ _id: id });
    return 'Ok, Book has been deleted!';
  },
  deleteAuthor: async id => {
    await Author.findByIdAndDelete({ _id: id });
    return 'Ok, Author has been deleted!';
  },
}

module.exports = mongoDataMethods
