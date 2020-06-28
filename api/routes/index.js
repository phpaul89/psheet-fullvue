const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/saveSheet", (request, response, next) => {
  console.log("from backend: ", request.body);
  response.send("x");
});

module.exports = router;
