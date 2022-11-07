# GraphQL-Express
# Run Server
GraphQL-Express\server>
```bash
$ npm run server
```
# Query 
```bash
query athor{
  author(id: 2) {
    name
    age
    books {
      name
    }
  }
}
```
```bash
query books{
  books {
    id
    name
    genre
  }
}
```
# Mutation
```bash
mutation createBook {
  createBook(id: 4, name: "Gio dau mua", genre: "Truyen ngan", authorId: 3) {
    id
    name
    genre
    author {
      id
      name
    }
  }
}
```
```bash
mutation createAuthor {
  createAuthor(id: 4, name: "Thach Lam", age: 99) {
    id
    name
    age
    books {
      name
    }
  }
}
```
# MongoDB
.env
```bash
MONGODB_URL="mongodb+srv://admin:1234@graphql-test.yyy1qci.mongodb.net/?retryWrites=true&w=majority"
```
Create Data 
```bash
mutation createAuthor {
  createAuthor(name: "Ngo Tat To", age: 98) {
    id
    name
    age
  }
}
```
```bash
mutation createBook {
  createBook(name: "Tat Den", genre: "Tieu thuyet", authorId: "636771c6e25d17f9a8a09d5d") {
    id
    name
    genre
    author {
      id
      name
    }
  }
}
```
Update Data
```bash
mutation updateBook{
  updateBook(id: "63692cfb6860487af7be9a38", authorId: "63692dc06860487af7be9a44") {
    id
    name
    genre
    author {
      id
      name
    }
  }
}
```
Delete Data
```bash
mutation deleteBook {
  deleteBook(id: "63692cfb6860487af7be9a38")
}
```
