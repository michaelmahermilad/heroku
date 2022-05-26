const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const { createServer } = require("http");
const path = require("path");
const { addUser, removeUser, getUser } = require("./user");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
});
app.use(express.static("public"))
app.use(cors());

io.on("connect", (socket) => {
 
  socket.on("sendMessage", (textandmessage) => {
    io.emit("message", textandmessage);
  });
 
});
app.use(express.static(path.resolve(__dirname, "./client/build")));

httpServer.listen(5000);

