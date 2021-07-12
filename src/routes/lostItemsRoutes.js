const Routes = require("express");
const router = Routes.Router();
const lostItemController = require("../controllers/lostItemsControllers");

//ANCHOR obtiene todos los perdidos
/**
 * @brayan-partida
 * @
 */
//obtiene todos los perstamos
router.get("/alllost", lostItemController.listLostControllers);
//inserta los prestamos perdidos
router.post("/insertlost", lostItemController.insertControllers);
//obttiene todos los perstamos de los usuarios que perdieron un item
router.get("/lostloans", lostItemController.getusuariosLost);
//obttiene todos los perstamos de los usuarios que perdieron un item por fecha
router.get("/lostitemdate/:dateLost", lostItemController.getUsuarioLostFecha);
//elimina el itemlost
router.delete("/deletelostitem/:idLostItem", lostItemController.deleteLostItem);

module.exports = router;
