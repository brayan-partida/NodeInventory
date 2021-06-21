const controller = {};
const pool = require("../database/database");
const loansQuery = require("../query/loansQuery");

controller.list = async (req, res) => {
  const query = await pool.query(loansQuery.SelectLoans());
  res.json(query);
};

controller.add = async (req, res) => {
  const {
    controlNumberLoans,
    namePersonLoans,
    dateLoans,
    returnDateLoans,
    stateLoans,
    loandItems,
  } = req.body;
  const query = await pool.query(
    loansQuery.insertLoans(
      controlNumberLoans,
      namePersonLoans,
      dateLoans,
      returnDateLoans,
      stateLoans,
      loandItems
    )
  );

  res.redirect("/api/items/itemadd");
};

module.exports = controller;
