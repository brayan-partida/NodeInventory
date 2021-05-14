const controller = {};
const pool = require("../database/database");
const departament = require("../query/departamentQuery");

controller.list = async (req, res) => {
  const query = await pool.query(departament.selectFrom());
  res.json(query);
};

controller.add = async (req, res) => {
  const { idDepartament, nameDepartament } = req.body;
  const query = await pool.query(
    departament.addDepartament(idDepartament, nameDepartament)
  );
  res.redirect("/api/departament/departamentall");
};

controller.update = async (req, res) => {
  const { nameDepartament } = req.body;
  const { idDepartament } = req.params;
  const query = await pool.query(
    departament.updateDepartament(idDepartament, nameDepartament)
  );

  res.redirect("/api/departament/departamentall")
};

module.exports = controller;
