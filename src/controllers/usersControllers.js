const controller = {};
const user = require("../query/usersQuery");
const pool = require("../database/database");
const User = require("../models/Users");
const { request } = require("express");
const userRoutes = require("../routes/usersRoutes");
const jwt = require("jsonwebtoken");
const config = require("../../config");




controller.list = async (req, res) => {
  const query = await pool.query(user.selectFrom());
  res.json(query);
}; //ANCHOR SELECT  Users=======>
/**
 * obtiene la lista de un usuario si el usuario no existe
 * mandara un mensaje
 * @param {nick} req
 * @param {*} res
 */
controller.listNick = async (req, res) => {
  const { nick } = req.params;
  const query = await pool.query(user.selectFromNick(nick));
  if (query.length === 0) {
    res.json({
      error: "no se encontro el nick  del usuario",
    });
  } else {
    res.json(query);
  }
}; //ANCHOR select Users where=====>

/**
 * Ingresa los datos para poder registrar un nuevo usuario
 * con el password Encriptado
 * @param {*} req
 * @param {*} res
 */
controller.add = async (req, res) => {
  const { id, nombre, nick, pass, type, usersDepartament } = req.body;
  userObjet = new User(id, nombre, nick, pass, type, usersDepartament);
  const buscarNick = await pool.query(user.selectFromNick(nick));
  if (buscarNick.length === 0) {
    var query = await pool.query(
      user.addNick(
        userObjet.getNombre(),
        userObjet.getNick(),
        userObjet.getPass(),
        userObjet.getType(),
        userObjet.getUsersDepartament()
      )
    );
    const token = jwt.sign({ nick: nick }, config.secret, { expiresIn: 86400 });
    //console.log(
    //  JSON.stringify(userObjet.getNombre()),
    //  JSON.stringify(userObjet.getNick()),
    //  JSON.stringify(userObjet.getPass()),
    //  JSON.stringify(userObjet.getType()),
    //  userObjet.getUsersDepartament()
    //);

    res.json({
      auth: true,
      token,
    });
    //res.redirect("/api/users/allUsers");
  } else {
    res.json({
      error: "este nick ya se encuentra registrado",
    });
  }
}; //ANCHOR add Users=======>
/**
 * actualiza el nick para poder
 *
 * @param {nick} req
 * @param {json} res
 */
controller.update = async (req, res) => {
  const { nick } = req.params;
  const { nombre, pass, type, usersDepartament } = req.body;
  const query = await pool.query(
    user.updateNick(nombre, pass, type, usersDepartament, nick)
  );
  //  res.json("se actualizo")
  res.redirect("/api/users/allUsers");
}; //ANCHOR UPDATE Users=======>

module.exports = controller;
