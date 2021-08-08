const express = require("express");
//const controller = require("../controllers/usersControllers");
const controllerUsers = require("../controllers/usersControllers");
const verificadoTokens = require("../Utils/verifyToken");
const router = express.Router();

router.get("/allUsers", verificadoTokens, controllerUsers.list); //get all
router.get("/UserNick/:nick",verificadoTokens, controllerUsers.listNick); //get all
router.post("/Useradd",verificadoTokens, controllerUsers.add);
router.put("/updateUser/:nick", verificadoTokens, controllerUsers.update);
//router.post("/insertrestaurants", controllersRestaurants.save);
//router.delete("/deleterestaurants/:id", controller.delete);
//router.put("/update/:id", controller.update);

module.exports = router;
