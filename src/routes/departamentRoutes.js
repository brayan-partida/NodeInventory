const router = require("express").Router();
const departamentController = require("../controllers/departamentControllers");
const controller = require("../controllers/usersControllers");
const verificadoTokens = require("../Utils/verifyToken");

router.get("/departamentall", verificadoTokens, departamentController.list);
router.post("/departamentadd", verificadoTokens, departamentController.add);
router.put(
  "/departamentupdate/:idDepartament",
  verificadoTokens,
  departamentController.update
);

module.exports = router;
