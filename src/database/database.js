//CONFIG FOR MYSQL

const mysql = require('mysql');
 const { database } = require('./keys');
const { promisify } = require('util');
 const pool = mysql.createPool(database);

 pool.getConnection((err, connection) => {
     if (err) {

        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
             console.error('error al conectar la base de dato');
         }
        if (err.code === 'ER__CON_COUNT_ERROR') {
            console.error('TARDADA LA CONACCTION');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('CONECTION REGRESADA NO CONSUTADA BIEN EN LAS LLAVES DE ENTRADA');
        }
   }
     if (connection) connection.release();
    console.log('conectada ala base de datos');
     return;

 });
 pool.query = promisify(pool.query);
 module.exports = pool;