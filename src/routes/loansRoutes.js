const loansControllers = require("../controllers/loansControllers");
const router = require("express").Router();

router.get("/loansall", loansControllers.list);
router.post("/loansadd", loansControllers.add);

module.exports = router;
