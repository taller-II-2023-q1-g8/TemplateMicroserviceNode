const express = require("express");
const controller = require("../application/user/use_cases")
const router = express.Router();

router.get("/", controller.get_all);

router.get("/:userId", controller.get_one);

router.post("/", controller.create_one);

router.delete("/:userId", controller.delete_one);

module.exports = router;