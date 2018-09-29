import User from "../db/models/user";

export default async function loadFriends(req, res) {
  await User.findOne({ email: req.auth.credentials.email })
    .populate("friends", "fullName")
    .then(user => {
      if (user) {
        const mappedFriends = {};
        user.friends.forEach(friend => {
          mappedFriends[friend._id] = friend;
        });
        res.send(mappedFriends);
      } else {
        res.send({ message: "Cannot find user" });
      }
    });
}
