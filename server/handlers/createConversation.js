import Boom from "express-boom";

import User from "../db/models/user";
import Conversation from "../db/models/conversation";

export default async function(req, res) {
  await User.findOne({ email: req.auth.credentials.email })
    .populate("conversations")
    .then(user => {
      if (user) {
        const isConversationExist =
          user.conversations.filter(
            conversation =>
              conversation.userOneId === req.payload.friendId ||
              conversation.userTwoId === req.payload.friendId
          ).length > 0;
        if (isConversationExist) {
          res.send({
            message: "You already have conversations with this user"
          });
        } else {
          User.findById(req.payload.friendId).then(friend => {
            const newConversation = new Conversation({
              userOneId: user._id,
              userTwoId: friend._id
            });
            newConversation.save().then(conversation => {
              user.conversations.push(conversation);
              user.save();
              friend.conversations.push(conversation);
              friend.save();

              res.send({ id: conversation._id, friendId: friend._id });
            });
          });
        }
      } else {
        res.send({
          message: "cannot find user"
        });
      }
    });
}
