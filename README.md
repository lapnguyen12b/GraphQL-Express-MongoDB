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