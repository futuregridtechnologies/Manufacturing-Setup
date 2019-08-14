let {
  GraphQLServer
} = require('graphql-yoga');

let mongodb = require('./MongoDB/mongo-operations');

// Type Definitions => Application Schema
const typeDefs = `
    type Query {
        hello: String!
        ingredientVariants: [variant!]!
    }
    
    type variant {
      name: String!
      processing : String!
      quantity : String!
      file : [String!]!
    }
`
// Scalar Types -> String, Boolean, Int, Float, ID --> unique identifier similar to String with differences
// Custom Types ->
// Resolvers => set of functions

const resolvers = {
  Query: {
    hello: (parent, args, ctx, info) => {
      return "Hello World";
    },

    ingredientVariants: (parents, args, ctx, info) => {
      return mongodb.showAllVariants().then(data => {
        console.log(data);
        return(data)
      })
    }
  },

}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

const options = {
  port: 5000,
}

server.start(options, ({
  port
}) => {
  console.log("The server is up")
})