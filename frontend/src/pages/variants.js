import React, { Component } from 'react';
// import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Variant from '../components/variant'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import '../App.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:5000/'
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
        query ingredientVariants($after: String) {
          ingredientVariants{
          name
          processing
          quantity
          file
        }
        }
      `;
    const { data, loading, error } = useQuery(GET_VARIANTS);
    data.ingredientVariants.map(variant => {
      return <Variant name={variant.name} processing={variant.processing} quantity={variant.quantity} files={variant.file} />
    })
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
