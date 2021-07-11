const controller = {};
const pool = require("../database/database");
const loansQuery = require("../query/loansQuery");

/**
 * obtiene todos los prestamos que se
 * hicieron es un historial
 * @param {*} req
 * @param {*} res
 */
controller.list = async (req, res) => {
  const query = await pool.query(loansQuery.SelectLoans());
  res.json(query);
};

/**
 * obtiene toda la lista de los prestamos
 * pasandole un parametro
 * @param {obtiene el numero de control} req
 * @param {responde con prestamo con el numero de control} res
 */
controller.listnumberControl = async (req, res) => {
  const { controlNumberLoans } = req.params;
  const query = await pool.query(
    loansQuery.selectLoansControlNumber(controlNumberLoans)
  );
  res.json(query);
};

// get api for facebook

/**
 * inserta todos los datos de para poder guardar
 * todos los prestamos
 * @param {obtiene todo los datos del prestamos } req
 * @param {responde con json} res
 */
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

  res.redirect("/api/loans/loansall");
};

controller.update = async (req, res) => {
  const {
    controlNumberLoans,
    namePersonLoans,
    dateLoans,
    returnDateLoans,
    stateLoans,
  } = req.body;

  const { idLoans } = req.params;

  const query = await pool.query(
    loansQuery.updateLoans(
      controlNumberLoans,
      namePersonLoans,
      dateLoans,
      returnDateLoans,
      stateLoans,
      idLoans
    )
  );

  res.redirect("/api/loans/loansall");
};

controller.deleteLoans = async (req, res) => {
  const { idLoans } = req.params;
  var querys = await pool.query(
    "delete from `loans` where idLoans=" + idLoans + ""
  );
  res.json("se elimino el prestamo");
};

module.exports = controller;
