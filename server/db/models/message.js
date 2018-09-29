const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    userId: Object
  },
  {
    collection: "chat-messages"
  }
);

module.exports = mongoose.model("Message", messageSchema);
