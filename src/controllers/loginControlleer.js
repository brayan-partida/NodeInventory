const controller = {};
const jwt = require("jsonwebtoken");
const pool = require("../database/database");
const loginQuery = require("../query/loginQuery");
const bcrypt = require("bcryptjs");
const User = require("../models/Users");

/**
 * 
 * NOTE METODO DE PRUEBA DE TOKERN
 * METODO QUE OBTIENE QUE INGRESA AL LOGIN
 * TAMBIEN REGRESA UN TOKEN
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @resposen token
 
controller.Login = async (req, res, next) => {
  const { nick, nombre, pass } = req.body;
  //ANCHOR Obtiene el nick si en la caso de que no se encuentre
  //marcara un error
  const obteneUsuario = await pool.query(loginQuery.ObtenerNick(nick));
  if (obteneUsuario.length === 0) {
    res.json({
    Alerta: "no se encontro el nick del usuario"
    });
   
  } else {
    var equalPass = bcrypt.compareSync(req.body.pass, obteneUsuario[0].pass);
    if (!equalPass) {
      res.json({
        error: "Error el nick o el password estan mal",
      });
    } else {
      console.log("genial tienes tu token");
      res.json({
        succesfull: createToken(obteneUsuario),
        done: "login Correct",
      });
    } //termina el else de la validacion de la contrasenia
  }
}; */ //---------------------------------------------------->
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
