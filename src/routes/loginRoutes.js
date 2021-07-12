const { Router } = require("express");
const loginControllers = require("../controllers/loginControlleer");
const router = require("express").Router();

/*
obtiene el token
 */
//outer.get("/selecttoken", loginControllers.);

/**
 * ruta para poder insertar nuevo usuario
 */
router.post("/signup", loginControllers.signupToken);

/**
 * ruta para poder ingresar en el usuario
 */
router.post("/signin", loginControllers.signinToken);

/**
ruta para obtener el menu de 
dicho usuario
*/
router.get("/me", loginControllers.meToken);

router.put("/updatetoken", loginControllers.updateToken);

router.delete("/deletetoken", loginControllers.deleteToken);

module.exports = router;
