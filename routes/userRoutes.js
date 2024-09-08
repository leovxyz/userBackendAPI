const express = require('express');
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({message: "Register the user"})
});

router.post("/login", (req, res) => {
    res.json({message: "Login  user"})
});

router.get("/current", (req, res) => {
    res.json({message: "Current user information"})
});

module.exports = router;