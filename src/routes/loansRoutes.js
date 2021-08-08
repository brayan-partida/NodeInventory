const { Router } = require("express");
const loansControllers = require("../controllers/loansControllers");
const verificadoTokens = require("../Utils/verifyToken");
const router = require("express").Router();

router.get("/loansall", loansControllers.list);

router.post("/loansadd", verificadoTokens, loansControllers.add);
router.put("/loansupdate/:idLoans", verificadoTokens, loansControllers.update);
router.get(
  "/loanscontroll/:controlNumberLoans",
  verificadoTokens,
  loansControllers.listnumberControl
);
router.delete(
  "/loansdelete/:idLoans",
  verificadoTokens,
  loansControllers.deleteLoans
);

module.exports = router;
