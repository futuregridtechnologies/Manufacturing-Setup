import React, { Component } from 'react';
import gql from 'graphql-tag';
import Variant from '../components/Variant'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import '../App.css';
import { Table } from 'react-bootstrap';
import gridSchema from '../utils/table-data'


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
    console.log("HERE")
    return this.state.variants.map(variant => {
      return(<Variant name={variant.name} processing={variant.processing} quantity={variant.quantity} files={variant.file} /> )
    })
  }

  componentDidMount() {
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
        this.setState({ variants: result.data.ingredientVariants });
        console.log(gridSchema(result.data.ingredientVariants))
      });
  }

  render() {
    console.log(this.state.variants.length)
    return (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Processing</th>
      <th>Used In</th>
    </tr>
  </thead>
  <tbody>
  {this.displayVariants()}

  </tbody>
</Table>

    );
  }
}

export default Variants;
