const router = require("express").Router();
const authController = require("../controllers/auth.controllers");

router.post("/signup",authController.signup);
router.post("/signin",authController.signin);
router.post("/google",authController.google);

module.exports = router;