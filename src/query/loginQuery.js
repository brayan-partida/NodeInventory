const ObtenerNick = (nombre) => {
  const query = "select id,nick,pass,type,usersDepartament from users u where u.nick='" + nombre + "'";
  return query;
};

/**
 * "id":10,
        "nombre": "Brayan Enrique Ramirez Partida",
        "nick": "ciscosss",
        "pass": "cisco",
        "type": "admin",
        "usersDepartament": 1234
 */
exports.ObtenerNick = ObtenerNick;
