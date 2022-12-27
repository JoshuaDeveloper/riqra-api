const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
    image: String
  }

  type Query {
    hello: String
    getAllProducts: [Product]
    getSearchedProducts(search: String): [Product]
  }

  type Mutation {
    createProduct(name: String, price: Float, image: String): Product
  }
`;
module.exports = { typeDefs };
