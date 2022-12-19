const express = require("express");
const router = express.Router();
const winesControllers = require("../controllers/wines.controller");

router.get("/:page", async (req, res) => {
  const { page } = req.params;
  const wines = await winesControllers.getWines({ page: page || 0 });

  if (!wines || wines.length == 0) {
    res.status(404).send("Not found.");
  } else {
    res.send({ wines });
  }
});
module.exports = router;
