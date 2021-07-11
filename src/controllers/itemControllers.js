const controller = {};
const pool = require("../database/database");
const item = require("../query/itemQuery");


controller.list = async (req, res) => {
  const query = await pool.query(item.itemfrom());
  res.json(query);
};

/**
 *
 * @param {btiene el nombre } req
 * @param { regresa la lista que tenga ese nombre} res
 */
controller.listName = async (req, res) => {
  const { nameitem } = req.params;
  const query = await pool.query(item.select(nameitem));
  res.json(query);
};

/**
 *
 * @param {se inserta el item completo con su parametros} req
 * @param {responde con la lista de todos los item } res
 */
controller.add = async (req, res) => {
  const { nameItem, descriptionItem, typeItem, codeItem, EncargadoItem } =
    req.body;
  const query = await pool.query(
    item.insert(nameItem, descriptionItem, typeItem, codeItem, EncargadoItem)
  );
  res.redirect("/api/items/itemall");
};
/**
 *
 * @param {se inserta el el body los datos y en el parametro de ubicacion el id} req
 * @param {responde con el dato actualizado} res
 */
controller.update = async (req, res) => {
  const { nameItem, descriptionItem, typeItem, codeItem } = req.body;
  const { idItem } = req.params;
  const query = await pool.query(
    item.update(nameItem, descriptionItem, typeItem, idItem, codeItem)
  );

  res.redirect("/api/items/itemall");
};

module.exports = controller;
