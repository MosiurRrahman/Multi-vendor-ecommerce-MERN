const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { authMiddleWare } = require("../middlewares/authMiddleware");

// Public route: Admin login
router.post("/admin-login", authControllers.admin_login);

// Protected route: Get user details
router.get("/get-user", authMiddleWare, authControllers.getUser);

// Public route: Seller registration
router.post('/seller-register', authControllers.seller_register);
// Public route: Seller registration
router.post('/seller-login', authControllers.seller_login);

module.exports = router;
