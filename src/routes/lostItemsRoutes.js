const Routes = require("express");
const router = Routes.Router();
const lostItemController = require("../controllers/lostItemsControllers");
const verificadoTokens = require("../Utils/verifyToken");

//ANCHOR obtiene todos los perdidos
/**
 * @brayan-partida
 * @
 */
//obtiene todos los perstamos
router.get(
  "/alllost",
  verificadoTokens,
  lostItemController.listLostControllers
);
//inserta los prestamos perdidos
router.post(
  "/insertlost",
  verificadoTokens,
  lostItemController.insertControllers
);
//obttiene todos los perstamos de los usuarios que perdieron un item
router.get("/lostloans", verificadoTokens, lostItemController.getusuariosLost);
//obttiene todos los perstamos de los usuarios que perdieron un item por fecha
router.get(
  "/lostitemdate/:dateLost",
  verificadoTokens,
  lostItemController.getUsuarioLostFecha
);
//elimina el itemlost
router.delete(
  "/deletelostitem/:idLostItem",
  verificadoTokens,
  lostItemController.deleteLostItem
);

module.exports = router;
