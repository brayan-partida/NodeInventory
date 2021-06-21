//const { query } = require("../database/database")

const SelectLoans = () => {
  const Query = "select * from loans";
  return Query;
};

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

exports.insertLoans = insertLoans;
exports.SelectLoans = SelectLoans;
/**
 * INSERT INTO `loans` (`idLoans`, `controlNumberLoans`,
 *  `namePersonLoans`, `dateLoans`, `returnDateLoans`,
 * `stateLoans`, `loandItems`) VALUES (NULL, '15401043',
 * 'Brayan Partida', '2021-06-09', '2021-08-11', 'prestado', '12');
 */
