//Api route for new user
const express = require("express");
const router = express.Router();

//test route
router.get("/", (req, res) => {
  res.json({ message: "route works!" });
});

router.post("/", (req, res) => {
  res.send(200);
});

module.exports = router;
