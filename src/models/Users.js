const { use } = require("../routes/loginRoutes");
const jtw = require("jsonwebtoken");
const createUser = (user) => {
  let userLogin = {
    id: user.id,
    nombre: user.nombre,
    nick: user.nick,
    pass: user.pass,
    type: user.type,
    userDepartament: user.userDepartament,
  };
};

module.exports = createUser;
