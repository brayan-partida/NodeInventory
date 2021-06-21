const controller = {};
const pool = require("../database/database");
const departament = require("../query/departamentQuery");

//obtiene todos los datos de todos los departamentso
controller.list = async (req, res) => {
  const query = await pool.query(departament.selectFrom());
  res.json(query);
};

//inserta los departamentos
controller.add = async (req, res) => {
  const { idDepartament, nameDepartament } = req.body;
  const query = await pool.query(
    departament.addDepartament(idDepartament, nameDepartament)
  );
  res.redirect("/api/departament/departamentall");
};

//actualiza los departamentos como su nombre y su id
controller.update = async (req, res) => {
  const { nameDepartament } = req.body;
  const { idDepartament } = req.params;
  const query = await pool.query(
    departament.updateDepartament(idDepartament, nameDepartament)
  );

  res.redirect("/api/departament/departamentall");
};

module.exports = controller;
