//const { addUser, removeUser, getUser } = require("./user");
const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const { createServer } = require("http");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json())
const { body} = require('express-validator');

require("dotenv").config();
const ProductRoute =require("./Routes/ProductRoutes.js");
const httpServer = createServer(app);
const connectDatabase = require("./config/MongoDb.js");
const { json } = require("express");
const corsOptions ={
  AccessControlAllowOrigin:'http://localhost:3000',
  origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

  },
});
app.use('/api/prods',
ProductRoute);
app.use(express.static("public"));

io.on("connect", (socket) => {
  socket.on("sendMessage", (textandmessage) => {
    io.emit("message", textandmessage);
  });
});
{
  /*app.use(express.static(path.resolve(__dirname, "./client/build")));*/
}
app.get("/", (req, res) => {
  res.send("api is running");
});
httpServer.listen(process.env.PORT || 5000);

const {ApolloServer, gql} =require( 'apollo-server');
const Email = require("./Models/Email");
const typeDefs = gql`
  type Emails {
  
    email: String
  }
  type Query{
    get:[Emails]
  }
  `;
  const resolvers={
    Query:{
      get:async()=>{
          return await  Email.find({})
      }
    }
  }
 
  const Appolo=new ApolloServer({typeDefs,resolvers})

  Appolo
  .listen({ port: 9000 })
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));

