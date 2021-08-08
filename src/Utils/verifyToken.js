const jwt = require("jsonwebtoken");
const config = require("../../config");

/**
 * Verificador de tokens para poder comprobar
 * si la ruta esta validada por un token;
 * esto sera aaplicado en un midleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns  {Nxt}
 */
function verificadoTokens(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "no se encuentra el token",
    });
  }
  const decoded = jwt.verify(token, config.secret);
  console.log(decoded); //decodifica el token lo que le mandamos
  req.nick = decoded.nick;
  console.log(decoded.nick);
  next();
}

module.exports = verificadoTokens;
