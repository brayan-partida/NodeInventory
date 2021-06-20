const itemController = require("../controllers/itemControllers");
const router = require("express").Router();

router.get("/itemall", itemController.list);
router.get("/nameitem/:nameitem", itemController.listName);
router.post("/itemadd",itemController.add)
router.put("/updateitem/:idItem",itemController.update)
module.exports = router;
