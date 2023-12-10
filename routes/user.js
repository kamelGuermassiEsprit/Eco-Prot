const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/getall", userController.getall);
router.get("/getbyid/:id", userController.getbyid);
router.get("/", (req, res, next) => {
  res.render("login");
});
router.get("/home", (req, res, next) => {
  res.render("home");
});

router.post("/login", userController.login);
router.post("/addAcount", userController.createAcount);

router.get("/createAcount", (req, res, next) => {
  res.render("createAcount");
});

router.get("/getbyid/:id", userController.getbyid);
router.delete("/deletebyid/:id", userController.deletebyid);

module.exports = router;
