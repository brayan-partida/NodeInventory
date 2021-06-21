const itemController = require("../controllers/itemControllers");
const router = require("express").Router();

router.get("/itemall", itemController.list);//toma toda la lista 
router.get("/nameitem/:nameitem", itemController.listName);//obtiee la la lista por nombre
router.post("/itemadd",itemController.add)//inserta el item
router.put("/updateitem/:idItem",itemController.update)//actualiza el item
module.exports = router;
