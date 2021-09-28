const itemController = require("../controllers/itemControllers");
const verificadoTokens = require("../Utils/verifyToken");
const router = require("express").Router();

router.get("/itemall",verificadoTokens,itemController.list);//toma toda la lista 
router.get("/nameitem/:nameitem",verificadoTokens, itemController.listName);//obtiee la la lista por nombre
router.post("/itemadd",verificadoTokens,itemController.add)//inserta el item
router.put("/updateitem/:idItem",verificadoTokens,itemController.update)//actualiza el item
module.exports = router;
