

const selectFrom = () => {
  const select = "select * from departament";
  return select;
};

const addDepartament = (idDepartament, nameDepartament) => {
  const add =
    "insert into departament values(" +
    idDepartament +
    ",'" +
    nameDepartament +
    "')";
  return add;
};

const updateDepartament = (idDepartament, nameDepartament) => {
  const update =
    "update departament  set nameDepartament='" +
    nameDepartament +
    "' where idDepartament=" +
    idDepartament +
    "";
  return update;
};



exports.selectFrom = selectFrom;
exports.addDepartament = addDepartament;
exports.updateDepartament = updateDepartament;
