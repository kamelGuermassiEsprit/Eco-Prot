const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//router.post("/add", userController.add);
router.get("/", (req, res, next) => {
  res.render("login");
});
router.get("/home", (req, res, next) => {
  res.render("home");
});

//router.post("/login", userController.login);
router.post("/addAcount", userController.createAcount);

router.get("/createAcount", (req, res, next) => {
  res.render("createAcount");
});
/* router.get("/getall", joueurController.getall);
router.get("/getbyid/:id", joueurController.getbyid);
router.delete("/deletebyid/:id", joueurController.deletebyid);
router.put("/attaque/:id1/:id2", joueurController.attaque);
router.post("/addpartie/:id1/:id2", joueurController.addpartie);
router.get("/partie", (req, res, next) => {
  res.render("partie");
}); */
module.exports = router;
