const router = require("express").Router();
const UserController = require("../controllers/user.controllers");

router.get("/",UserController.test);

module.exports = router