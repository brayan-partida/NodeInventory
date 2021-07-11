const { Router } = require("express");
const loginControllers = require("../controllers/loginControlleer");
const router = require("express").Router();

/*
obtiene el token
 */
router.get("/selecttoken", loginControllers.createToken);

router.post("/signup", loginControllers.signupToken);

router.post("/signin", loginControllers.signinToken);

router.get("/me", loginControllers.meToken);


router.put("/updatetoken", loginControllers.updateToken);

router.delete("/deletetoken", loginControllers.deleteToken);

module.exports = router;
