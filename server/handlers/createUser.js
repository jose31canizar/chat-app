import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import User from "../db/models/user";
import config from "../config/config";
import sanitizeUser from "../helpers/sanitizeUser";

const secret = config.jwt.secret;
const expiresIn = config.jwt.expiresIn;

const getHashedPassword = password => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

export default async function createUser(req, res) {
  let newUser;
  await User.findOne({ email: req.payload.email }).then(user => {
    if (!user) {
      const hashedPassword = getHashedPassword(req.payload.password);
      newUser = new User({
        fullName: req.payload.fullName,
        email: req.payload.email,
        password: hashedPassword
      });
      newUser.save(err => {
        console.log(err);
      });
      const token = JWT.sign({ email: newUser.email }, secret, { expiresIn });
      res.send({ token, user: sanitizeUser(newUser) });
    }
    res.send({
      message: "User already exists"
    });
  });
}
