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