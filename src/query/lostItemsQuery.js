const { query } = require("express");
const { insertLoans } = require("./loansQuery");

/**
 * obtiene todos lost item perdidos
 * @returns regresa el query
 *
 */
const selectLost = () => {
  var query = "select * from lost_items";
  return query;
};

const insertLost = (idLostItem, dateLost, id_Loans) => {
  var query =
    "INSERT INTO `lost_items`(`idLostItem`, `dateLost`, `id_Loans`) VALUES (" +
    idLostItem +
    ",'" +
    dateLost +
    "'," +
    id_Loans +
    ")";
  return query;
};

const obtenerPersonaPerdido = () => {
  var query =
    "select lo.controlNumberLoans, lo.namePersonLoans,lo.dateLoans as 'Fecha prestamo', li.dateLost as 'Fecha perdido', i.nameItem as 'Item perdido', i.descriptionItem as 'Descripcion item', u.nombre as 'Nombre encargado',d.nameDepartament as 'Departamento' from lost_items li INNER JOIN loans lo on (lo.idLoans=li.id_Loans) inner join item i on(i.idItem=lo.loandItems) inner join users u on (i.EncargadoItem=u.id) INNER join departament d on(u.usersDepartament=d.idDepartament)";
  return query;
};

/**
 * obtiene los objetos perdidos por fecha
 * @param {*} fecha
 */
const obtenerItemPerdidoFecha = (fecha) => {
  var query =
    "select lo.controlNumberLoans, lo.namePersonLoans,lo.dateLoans as 'Fecha prestamo', li.dateLost as 'Fecha perdido', i.nameItem as 'Item perdido', i.descriptionItem as 'Descripcion item', u.nombre as 'Nombre encargado',d.nameDepartament as 'Departamento' from lost_items li INNER JOIN loans lo on (lo.idLoans=li.id_Loans) inner join item i on(i.idItem=lo.loandItems) inner join users  u on (i.EncargadoItem=u.id) INNER join departament d on(u.usersDepartament=d.idDepartament) where li.dateLost='" +
    fecha +
    "'";
  return query;
};

exports.insertLost = insertLost;
exports.selectLost = selectLost;
exports.obtenerPersonaPerdido = obtenerPersonaPerdido;
exports.obtenerItemPerdidoFecha = obtenerItemPerdidoFecha;
