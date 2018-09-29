import User from "../db/models/user";

export default async function loadConversations(req, res) {
  await User.findOne({ email: req.auth.credentials.email })
    .populate("conversations")
    .then(user => {
      if (user) {
        const conversations = user.conversations.map(conversation => {
          const friendId =
            `${user._id}` === conversation.userOneId
              ? conversation.userTwoId
              : conversation.userOneId;
          return {
            id: conversation._id,
            friendId
          };
        });
        res.send(conversations);
      } else {
        res.send({
          message: "Cannot find user"
        });
      }
    });
}
