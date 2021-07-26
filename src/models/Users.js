const bcrypt = require("bcryptjs");

const { get } = require("../routes/loginRoutes");
//ANCHOR HOLA
User = function (id, nombre, nick, pass, type, usersDepartament) {
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
    return nombre;
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
    return (pass = generateHashPassword(pass));
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

  // const createToken=()
};

module.exports = User;
//module.exports=encryptPasswoord
