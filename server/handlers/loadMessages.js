import Conversation from "../db/models/conversation";

export default async function loadMessages(req, res) {
  await Conversation.findById(req.params.conversationId)
    .populate("messages")
    .then(conversation => {
      if (conversation) {
        res.send({ id: conversation._id, messages: conversation.messages });
      } else {
        res.send({
          message: "Cannot find conversations"
        });
      }
    });
}
