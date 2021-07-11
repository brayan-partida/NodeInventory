//const { query } = require("../database/database")

const { query } = require("../database/database");

const SelectLoans = () => {
  const Query = "select * from loans";
  return Query;
};

const selectLoansControlNumber = (controlNumberLoans) => {
  const query =
    "select * from loans where controlNumberLoans='" + controlNumberLoans + "'";
  return query;
};

/**
 * insertta todos los datos del prestamos
 * @param {*} controlNumberLoans
 * @param {*} namePersonLoans
 * @param {*} dateLoans
 * @param {*} returnDateLoans
 * @param {*} stateLoans
 * @param {*} loandItems
 * @returns
 */
const insertLoans = (
  controlNumberLoans,
  namePersonLoans,
  dateLoans,
  returnDateLoans,
  stateLoans,
  loandItems
) => {
  const Query =
    "INSERT INTO `loans` (`controlNumberLoans`," +
    "`namePersonLoans`, `dateLoans`, `returnDateLoans`," +
    "`stateLoans`, `loandItems`) VALUES ('" +
    controlNumberLoans +
    "','" +
    namePersonLoans +
    "','" +
    dateLoans +
    "','" +
    returnDateLoans +
    "','" +
    stateLoans +
    "'," +
    loandItems +
    ")";

  return Query;
};

/**
 *
 * @param {} controlNumberLoans
 * @param {f} namePersonLoans
 * @param {f} dateLoans
 * @param {f} returnDateLoans
 * @param {} stateLoans
 * @param {} idLoans
 * @returns  retorna el valor de cadena
 */
const updateLoans = (
  controlNumberLoans,
  namePersonLoans,
  dateLoans,
  returnDateLoans,
  stateLoans,
  idLoans
) => {
  const Query =
    "UPDATE `loans` SET `controlNumberLoans`=" +
    controlNumberLoans +
    ",`namePersonLoans`='" +
    namePersonLoans +
    "',`dateLoans`='" +
    dateLoans +
    "',`returnDateLoans`='" +
    returnDateLoans +
    "',`stateLoans`='" +
    stateLoans +
    "'  WHERE idLoans=" +
    idLoans +
    "";

  return Query;
};

/**
 * query que elimina los prestamos
 * @param {*} idLoans
 * @returns
 */
const deleteLoans = (idLoans) => {
  query = "delete from `loans` where idLoans=" + idLoans + "";
  return query;
};

/**
 *obtiene las exportacion
 *
 *
 */
exports.insertLoans = insertLoans;
exports.SelectLoans = SelectLoans;
exports.updateLoans = updateLoans;
exports.selectLoansControlNumber = selectLoansControlNumber;
exports.deleteLoans = deleteLoans;
