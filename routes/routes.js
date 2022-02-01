//importaciones
const express = require("express");
const router = express.Router();

//rutas

router.get("/", (req, res) => {
  res.send("index");
});

// router.get("/about", (req, res) => {
//   res.render("about");
// });

// router.get("/work", (req, res) => {
//   res.render("work");
// });

// router.get("/gallery", (req, res) => {
//   res.render("gallery");
// });


//exportaciones
module.exports = router;
