const selectFrom = () => {
  const select = "select * from users";
  return select;
};

const selectFromNick = (nick) => {
  const select = "select * from users where  nick='" + nick + "'";
  return select;
};

const addNick = (nombre, nick, pass, type, usersDepartament) => {
  const insert =
    "insert into users (nombre, nick, pass, type, usersDepartament)  values(" +
    "'" +
    nombre +
    "','" +
    nick +
    "'" +
    ",'" +
    pass +
    "','" +
    type +
    "'," +
    usersDepartament +
    ")";
  return insert;
};

const updateNick = (nombre, pass, type, usersDepartament,nick) => {
  const update =
    "UPDATE `users` SET `nombre`='" +
    nombre +
    "',`pass`='" +
    pass +
    "',`type`='" +
    type +
    "',`usersDepartament`=" +
    usersDepartament +
    " WHERE `nick`=+'" +
    nick +
    "'";
  return update;
};

exports.selectFrom = selectFrom;
exports.selectFromNick = selectFromNick;
exports.addNick = addNick;
exports.updateNick = updateNick;
