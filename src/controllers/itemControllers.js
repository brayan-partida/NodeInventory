const controller = {};
const pool = require("../database/database");
const item = require("../query/itemQuery");

controller.list = async (req, res) => {
  const query = await pool.query(item.itemfrom());
  res.json(query);
};

controller.listName = async (req, res) => {
  const { nameitem } = req.params;
  const query = await pool.query(item.select(nameitem));
  res.json(query);
};

controller.add = async (req, res) => {
  const { nameItem, descriptionItem, typeItem, EncargadoItem } = req.body;
  const query = await pool.query(
    item.insert(nameItem, descriptionItem, typeItem, EncargadoItem)
  );
  res.redirect("/api/items/itemall");
};

module.exports = controller;
