const express = require("express");
//const controller = require("../controllers/usersControllers");
const controllerUsers = require("../controllers/usersControllers");
const router = express.Router();
const pool = require("../database/database");

router.get("/allUsers", controllerUsers.list); //get all
router.get("/UserNick/:nick", controllerUsers.listNick); //get all
router.post("/Useradd",controllerUsers.add)
router.put("/updateUser/:nick",controllerUsers.update)
//router.post("/insertrestaurants", controllersRestaurants.save);
//router.delete("/deleterestaurants/:id", controller.delete);
//router.put("/update/:id", controller.update);

module.exports = router;
