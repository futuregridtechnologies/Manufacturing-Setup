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
      // console.log(variant);
      return <Variant data={variant} />
      // return (<Variant name={variant.name} processing={variant.processing} quantity={variant.quantity} files={variant.file} />)
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
        // this.setState({ variants: result.data.ingredientVariants });
        // console.log(gridSchema(result.data.ingredientVariants))
        this.setState({variants : gridSchema(result.data.ingredientVariants)});
      });
  }

  render() {
    console.log(this.state.variants)
    return (
      <div className='variants' style = {{ width : '80%', height : "80%", margin: "auto"}}>
      {this.displayVariants()}
      </div>
    );
  }
}

export default Variants;
