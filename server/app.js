const express = require('express')
require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')

//Load schema & resolvers
const typeDefs = require('./schema/shcema')
const resolvers = require('./resolver/resolver')

//Load DB Methods
const mongoDataMethods = require('./data/db')

//Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

connectDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods })
})

const app = express()

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT }, () =>
      console.log(`Server running on ${process.env.SERVER_URL}:${process.env.PORT}${server.graphqlPath}`)
  )
 })