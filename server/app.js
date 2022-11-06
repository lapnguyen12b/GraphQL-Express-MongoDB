const express = require('express')
const { ApolloServer } = require('apollo-server-express')

//Load schema & resolvers
const typeDefs = require('./schema/shcema')
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express()

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: 3000 }, () =>
      console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
  )
 })