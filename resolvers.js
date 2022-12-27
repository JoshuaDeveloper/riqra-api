const Product = require("./models/Product");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAllProducts: async () => {
      const products = await Product.find();
      return products;
    },
    getSearchedProducts: async (_, args) => {
      const { search } = args;
      if (!search) return [];
      const products = await Product.find({
        name: { $regex: search, $options: "i" },
      });
      return products;
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      const { name, price, image } = args;
      const product = new Product({
        name,
        price,
        image,
      });
      await product.save();
      return product;
    },
  },
};

//
// Path: typeDefs.js
// Compare this snippet from typeDefs.js:
// const { gql } = require("apollo-server-express");
module.exports = { resolvers };
