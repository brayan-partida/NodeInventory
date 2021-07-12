const bcrypt = require("bcryptjs");

const { get } = require("../routes/loginRoutes");

/*class User {
  constructor(id, nombre, nick, pass, type, usersDepartament) {
    this.id = id;
    this.nombre = nombre;
    this.nick = nick;
    this.pass = pass;
    this.type = type;
    this.usersDepartament = usersDepartament;
  }


 var  id, nombre, nick, pass, type, usersDepartament;
 
}*/

encryptPasswoord = async (pass) => {
  const salt = await bcrypt.getSalt(10);
  return bcrypt.hash(pass, salt);
};

User = function (id, nombre, nick, pass, type, usersDepartament) {
  // var id, nombre, nick, pass, type, usersDepartament;

  /**
   *
   * @param {id} id
   */
  this.setId = function (ids) {
    this.id = ids;
  };

  this.getId = function () {
    return id;
  };
  /**
   *
   * @param {*} nombre
   */
  this.setNombre = function (nombres) {
    nombre = nombres;
  };

  this.getNombre = function () {
    return (nombre = generateHashPassword(nombre));
  };

  /**
   *
   * @param {*} nick
   */
  this.setNick = function (nicks) {
    this.nick = nicks;
  };

  this.getNick = function () {
    return nick;
  };

  /**
   *
   * @param {*} pass
   */
  this.setPass = function (passes) {
    this.pass = passes;
  };

  this.getPass = function () {
    return pass;
  };

  /** 
     @param {type} type
      */
  this.setType = function (types) {
    this.type = types;
  };

  this.getType = function () {
    return type;
  };

  /** 
     @param {type} usersDepartament
      */
  this.setUsersDepartament = function (usersDepartaments) {
    this.usersDepartament = usersDepartaments;
  };

  this.getUsersDepartament = function () {
    return usersDepartament;
  };
  /***/
  /**
   * metodo que obtiene todo el parametro y lo encrypta
   *
   * @param {*} plainPassword
   * @returns
   */
  const generateHashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(10));
  };
};

module.exports = User;
//module.exports=encryptPasswoord
