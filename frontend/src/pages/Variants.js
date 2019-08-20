import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Variant from '../components/Variant'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import '../App.css';
// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'http://ec2-18-219-21-117.us-east-2.compute.amazonaws.com:5000/',
// });

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://ec2-18-219-21-117.us-east-2.compute.amazonaws.com:5000/'
})

const client = new ApolloClient({
  cache,
  link
})

class Variants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [],
    }
  }

  displayVariants = () => {

    const GET_VARIANTS = gql`
        query  {
          ingredientVariants {
          name
          processing
          quantity
          file
        }
        }
      `;

    client
      .query({
        query: GET_VARIANTS,
      })
      .then(result => {
        this.setState({variants : result.data.ingredientVariants})
        // console.log(data)
        result.data.ingredientVariants.map(variant => {
          console.log(variant)
          return <Variant name={variant.name} processing={variant.processing} quantity={variant.quantity} files={variant.file} />
        })
      });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="variants">
        {this.displayVariants()}
      </div>
    );
  }
}

export default Variants;
