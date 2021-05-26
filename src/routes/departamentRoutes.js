const router = require("express").Router();
const departamentController = require("../controllers/departamentControllers");
const controller = require("../controllers/usersControllers");

router.get("https://serviciosocialtec.herokuapp.com/departamentall", departamentController.list);
router.post("/departamentadd", departamentController.add);
router.put("/departamentupdate/:idDepartament", departamentController.update);

module.exports = router;
