//API route for messages
const express = require("express");
const router = express.Router();

//test route
router.get("/", (req, res) => {
  res.send("route works");
});

module.exports = router;
