const constroller = {};
const pool = require("../database/database");
const lostItem = require("../query/lostItemsQuery");
/**
 * @param {*} req
 * @param {*} res
 */
constroller.listLostControllers = async (req, res) => {
  const getData = await pool.query(lostItem.selectLost());
  res.json(getData);
};

constroller.insertControllers = async (req, res) => {
  const insert = ({ idLostItem, dateLost, id_Loans } = req.body);
  const insertdata = await pool.query(
    lostItem.insertLost(idLostItem, dateLost, id_Loans)
  );
  res.redirect("/api/lostitem/alllost");
};

/**
 * este controllador obtiene rodos los
 * usuarios que perdieron un item
 * @param {*} req
 * @param {*} res
 */
constroller.getusuariosLost = async (req, res) => {
  const obtenerUsuario = await pool.query(lostItem.obtenerPersonaPerdido());
  res.json(obtenerUsuario);
};

/**
 * obtiene los obtjertos perdidos por fecha
 * @param {*} req
 * @param {*} res
 */
constroller.getUsuarioLostFecha = async (req, res) => {
  const consulta = ({ dateLost } = req.params);
  const obtenerItemPerdido = await pool.query(
    lostItem.obtenerItemPerdidoFecha(dateLost)
  );
  res.json(obtenerItemPerdido);
};

constroller.deleteLostItem=async(req,res)=>{
    const consulta = ({ idLostItem } = req.params);
    const obtenerItemPerdido = await pool.query(
      "delete from lost_items where idLostItem="+idLostItem+""
    );
    res.json("se elimino el item perdido");
}

module.exports = constroller;
