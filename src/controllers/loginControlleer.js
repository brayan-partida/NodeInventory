const controller = {};
const pool = require("../database/database");
const User = require("../models/Users");
const item = require("../query/loginQuery");

/**
 *crea el token de tal manera que genera la sesion
 * @param {*} req
 * @param {*} res
 */
controller.signupToken = async (req, res, next) => {
  const usuario = ({ id, nombre, nick, pass, type, usersDepartament } =
    req.body);

  const user = new User(usuario);
  /* id: req.body.id,
    nombre: req.body.nombre,
    nick: req.body.nick,
    pass: req.body.pass,
    type: req.body.type,
    usersDepartament: req.body.usersDepartament,*/

  user.setNombre(pass);

  res.json(user.getNombre());

  res.json(user.getId());
  //console.log(user);
  // = user.encryptPasswoord(user.pass);

  //console.log(user);
  console.log(user.getNombre(nombre));
};
/**
 * obtiene la entrada para el token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
controller.signinToken = async (req, res, next) => {};

/**
 * obtiene el dashboard para el usuario que
 * entra
 * @param {} req
 * @param {*} res
 * @param {*} next
 */
controller.meToken = async (req, res, next) => {
  res.json("hola soy tu men");
};
/**
 * actualiza el token
 * @param {} req
 * @param {*} res
 */
controller.updateToken = async (req, res) => {};

/**
 * elimina el token
 * @param {*} req
 * @param {*} res
 */
controller.deleteToken = async (req, res) => {};

/**
 * obtiene el token
 * @param {*} req
 * @param {*} res
 */
controller.selectToken = async (req, res) => {};

module.exports = controller;
