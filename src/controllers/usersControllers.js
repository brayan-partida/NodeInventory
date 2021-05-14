const controller = {};
const user = require("../query/usersQuery");
const pool = require("../database/database");
const { request } = require("express");

controller.list = async (req, res) => {
  const query = await pool.query(user.selectFrom());
  res.json(query);
};//ANCHOR SELECT  Users=======>

controller.listNick = async (req, res) => {
  const { nick } = req.params;
  const query = await pool.query(user.selectFromNick(nick));
  res.json(query);
};//ANCHOR select Users where=====>

controller.add = async (req, res) => {
  const { nombre, nick, pass, type, usersDepartament } = req.body;
  const query = await pool.query(
    user.addNick(nombre, nick, pass, type, usersDepartament)
  );
  res.redirect('/api/users/allUsers')
};//ANCHOR add Users=======>

controller.update = async (req, res) => {
  const { nick } = req.params;
  const { nombre, pass, type, usersDepartament } = req.body;
  const query = await pool.query(
    user.updateNick(nombre, pass, type, usersDepartament,nick)
  );
//  res.json("se actualizo")
  res.redirect('/api/users/allUsers')
};//ANCHOR UPDATE Users=======>

module.exports = controller;
