//importaciones
const express = require("express");
const router = express.Router();

//rutas

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/players", (req, res) => {
  res.render("players");
});

router.get("/teams", (req, res) => {
  res.render("teams");
});

// router.get("/gallery", (req, res) => {
//   res.render("gallery");
// });


//exportaciones
module.exports = router;
