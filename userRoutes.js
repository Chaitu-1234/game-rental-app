const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/:username", userController.getUserDetails);
router.put("/:userId", userController.updateUserDetails);

module.exports = router;
