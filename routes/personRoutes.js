const express = require('express');
const router = express.Router();

router.post("/register", (req, res) => {
    res.json({message: "Register the person"})
});

router.post("/login", (req, res) => {
    res.json({message: "Login the person"})
});

router.get("/current", (req, res) => {
    res.json({message: "Current person information"})
});

module.exports = router;