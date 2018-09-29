const express = require("express");
const mongoose = require("mongoose");
const app = express();
import * as handlers from "./handlers";

const socketio = require("socket.io");

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/:name", function(req, res) {
  res.send(`hello ${name}`);
});

app.get("/messages/:conversationId", handlers.loadMessages);

app.get("/conversations", handlers.loadConversations);
app.post("/conversations", handlers.createConversation);

app.get("/friends", handlers.loadFriends);
app.post("/friends", handlers.addFriend);

mongoose.connect("mongodb://localhost/chat-app");

const server = app.listen(8080, function() {
  console.log("listening on port 8080");
});

socketio(server).on("connection", socket => {
  socket.on("init", userId => {
    sockets[userId.senderId] = socket;
  });
  socket.on("message", message => {
    if (sockets[message.receiverId]) {
      sockets[message.receiverId].emit("message", message);
    }
    /* handler for creating message */
  });
  socket.on("disconnect", userId => {
    delete sockets[userId.senderId];
  });
});
