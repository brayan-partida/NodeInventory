const { Router } = require("express");
const loansControllers = require("../controllers/loansControllers");
const router = require("express").Router();

router.get("/loansall", loansControllers.list);

router.post("/loansadd", loansControllers.add);
router.put("/loansupdate/:idLoans",loansControllers.update)
router.get("/loanscontroll/:controlNumberLoans",loansControllers.listnumberControl);
router.delete("/loansdelete/:idLoans",loansControllers.deleteLoans)

module.exports = router;
