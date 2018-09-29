import Boom from "express-boom";
import User from "../db/models/user";

export default async function(req, res) {
  if (req.auth.credentials.email !== req.payload.email) {
    await User.findOne({ email: req.auth.credentials.email }).then(user => {
      if (user) {
        User.findOne({ email: req.payload.email }).then(friend => {
          if (friend) {
            const stringId = `${friend._id}`;
            const friendExists =
              user.friends.filter(f => `${f}` === stringId).length > 0;
            if (!friendExists) {
              user.friends.push(friend);
              user.save();
              res.send({
                friend: { fullName: friend.fullName, _id: friend._id }
              });
            } else {
              res.send(Boom.conflict("You have added already this friend"));
            }
          } else {
            res.send(
              Boom.notFound(`Friend ${req.payload.email} doesn't exist`)
            );
          }
        });
      } else {
        res.send(Boom.notFound("Cannot find user"));
      }
    });
  } else {
    res.send(Boom.conflict("Cannot add yourself as a friend"));
  }
}
