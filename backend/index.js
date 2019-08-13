let {
  GraphQLServer
} = require('graphql-yoga');

// Type Definitions => Application Schema
const typeDefs = `
    type Query {
        hello: String!
    } 
`
// Scalar Types -> String, Boolean, Int, Float, ID --> unique identifier similar to String with differences
// Custom Types ->
// Resolvers => set of functions

const resolvers = {
    Query: {
        hello :(parent, args, ctz, info) => {
          return "Hello World";
        },
    },

}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
  port : 5000,
}

server.start(options,({ port }) => {
    console.log("The server is up")
})