const {
    ApolloClient
} = require('apollo-boost');
import fetch from 'node-fetch';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const gql = require('graphql-tag');


const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:5000/',
    fetch
})

const client = new ApolloClient({
    cache,
    link
})

client
  .query({
    query: gql`
      query GetLaunch {
        hello
      }
    `
  })
  .then(result => console.log(result.data))
    .catch(error => console.error(error));