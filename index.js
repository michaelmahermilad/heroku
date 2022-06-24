const { ApolloServer, gql } = require("apollo-server-express");
const Email = require("./Models/Email");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { body } = require("express-validator");
require("dotenv").config();
const { json } = require("express");
const ProductRoute = require("./Routes/ProductRoutes.js");
const connectDatabase = require("./config/MongoDb.js");
const typeDefs = gql`
  type Emails {
    email: String
  }
  type Query {
    get: [Emails]
  }
`;
const resolvers = {
  Query: {
    get: async () => {
      return await Email.find({});
    },
  },
};
async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  //const { addUser, removeUser, getUser } = require("./user");
  const app = express();
  const httpServer = createServer(app);
  const corsOptions = {
    AccessControlAllowOrigin: "http://localhost:3000",
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/api/prods", ProductRoute);
  app.use(express.static("public"));
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    },
  });
  io.on("connect", (socket) => {
    socket.on("sendMessage", (textandmessage) => {
      io.emit("message", textandmessage);
    });
  });
  {
  
  app.use(express.static(path.resolve(__dirname, "./client/build")));

  }
  // Use this after the variable declaration
  app.get("/", (req, res) => {
    res.send("api is running");
  });
  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,
  });

  // Modified server startup
  await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
