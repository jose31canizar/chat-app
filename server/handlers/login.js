import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../db/models/user";
import config from "../config/config";
import Boom from "express-boom";
import sanitizeUser from "../helpers/sanitizeUser";

const secret = config.jwt.secret;
const expiresIn = config.jwt.expiresIn;

export default function logIn({ headers, payload: { email, password } }, res) {
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.send(Boom.notFound("Wrong email or password"));
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.send(Boom.notFound("Wrong email or password"));
    }

    const token = JWT.sign({ email: user.email }, secret, { expiresIn });
    return res.send({ token, user: sanitizeUser(user) });
  });
}
