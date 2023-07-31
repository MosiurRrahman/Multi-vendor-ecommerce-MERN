const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { authMiddleWare } = require("../middlewares/authMiddleware");

router.post("/admin-login", authControllers.admin_login);
router.get("/get-user", authMiddleWare, authControllers.getUser);

module.exports = router;
