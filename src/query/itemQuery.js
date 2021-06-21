const itemfrom = () => {
  const query = "select * from item";
  return query;
};

const select = (nameItem) => {
  const query = "select * from item  where nameItem='" + nameItem + "'";
  return query;
};
//ANCHOR  QUERY QUE TRAE LOS ITEM POR NOMBRE

/**
 * inserta los item agregando todo estos campos
 * @param {*} nameItem
 * @param {*} descriptionItem
 * @param {*} typeItem
 * @param {*} codeItem
 * @param {*} EncargadoItem
 * @returns
 */
const insert = (
  nameItem,
  descriptionItem,
  typeItem,
  codeItem,
  EncargadoItem
) => {
  const query =
    "INSERT INTO `item`(`nameItem`, `descriptionItem`, `typeItem`, `codeItem` ,`EncargadoItem`)" +
    "values ('" +
    nameItem +
    "','" +
    descriptionItem +
    "','" +
    typeItem +
    "','" +
    codeItem +
    "'," +
    EncargadoItem +
    ")";
  return query;
};

const update = (nameItem, descriptionItem, typeItem, idItem, codeItem) => {
  const query =
    "update item set nameItem='" +
    nameItem +
    "' , descriptionItem='" +
    descriptionItem +
    "', typeItem='" +
    typeItem +
    "', codeItem='" +
    codeItem +
    "' where idItem=" +
    idItem +
    "";
  return query;
};

exports.itemfrom = itemfrom;
exports.select = select;
exports.insert = insert;
exports.update = update;
