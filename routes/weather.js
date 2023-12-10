const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weathercontroller");
const validate = require("../middl/validate");
router.post("/add", validate, weatherController.add);
router.get("/get", weatherController.get);
router.put("/update/:id",validate, weatherController.update);
router.get("/affichage", (req, res, next) => 
    res.render("affichage")
);

module.exports = router;
