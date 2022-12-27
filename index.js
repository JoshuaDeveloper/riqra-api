const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs.js");
const { resolvers } = require("./resolvers.js");
const cors = require("cors");

const { connectDB } = require("./db");
const app = express();

connectDB();

module.exports = app;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}

start();
