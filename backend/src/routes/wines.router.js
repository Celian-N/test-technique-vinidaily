const express = require("express");
const router = express.Router();
const winesControllers = require("../controllers/wines.controller");

router.get("/", async (req, res) => {
  const wines = await winesControllers.getWines();

  if (!wines || wines.length == 0) {
    res.status(404).send("Not found.");
  } else {
    res.send({ wines });
  }
});
module.exports = router;