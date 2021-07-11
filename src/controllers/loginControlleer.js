const controller = {};
const pool = require("../database/database");
const item = require("../query/loginQuery");

/**
 *crea el token de tal manera que genera la sesion
 * @param {*} req
 * @param {*} res
 */
controller.signupToken = async (req, res, next) => {
  res.json("signup");
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
controller.meToken = async (req, res, next) => {};

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
