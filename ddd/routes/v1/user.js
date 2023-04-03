const express = require("express");
const controller = require("../../application/user/user_application")
const router = express.Router();

router.get("/", controller.get_all);

router.get("/:dni", controller.get_one);

router.post("/", controller.create_one);

router.delete("/:dni", controller.delete_one);

module.exports = router;