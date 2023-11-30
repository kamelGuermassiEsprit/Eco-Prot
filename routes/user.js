const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/add", userController.add);
router.get("/loginPage", (req, res, next) => {
  res.render("login");
});
router.get("/home", (req, res, next) => {
  res.render("home");
});

router.post("/login", userController.login);
/* router.get("/getall", joueurController.getall);
router.get("/getbyid/:id", joueurController.getbyid);
router.delete("/deletebyid/:id", joueurController.deletebyid);
router.put("/attaque/:id1/:id2", joueurController.attaque);
router.post("/addpartie/:id1/:id2", joueurController.addpartie);
router.get("/partie", (req, res, next) => {
  res.render("partie");
}); */
module.exports = router;
