const router = require("express").Router();
const UserController = require("../controllers/user.controllers");
const verifyUser = require("../utils/verifyUser");

router.post("/update/:id", verifyUser.verifyToken,UserController.updateUser);
router.delete("/delete/:id", verifyUser.verifyToken,UserController.deleteUser);

module.exports = router;