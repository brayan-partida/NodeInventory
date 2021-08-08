const { Router } = require("express");
const loginControllers = require("../controllers/loginControlleer");
const router = require("express").Router();

router.post("/signin", loginControllers.Login);

router.get("/me", loginControllers.meToken);


router.put("/updatetoken", loginControllers.updateToken);

router.delete("/deletetoken", loginControllers.deleteToken);

//router.post("/login", loginControllers.Login);



module.exports = router;
