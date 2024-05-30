const router = require("express").Router();
const UserController = require("../controllers/user.controllers");
const verifyUser = require("../utils/verifyUser");

router.post("/update/:id", verifyUser.verifyToken,UserController.updateUser);

module.exports = router;