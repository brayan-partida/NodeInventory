const jwt = require("jwt-simple");
require("dotenv").config();
const moment = require("moment");
const createToken = (users) => {
  let payload = {
    id: users.id,
    createdAt: moment.unix(),
    expiresAt: moment().add(1, "day").unix(),
  };
  return jwt.encode(payload, process.env.TOKEN_KEY);
};
exports.createToken = createToken;
