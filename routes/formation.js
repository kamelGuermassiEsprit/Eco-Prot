const express = require("express");
const router = express.Router();
const formationController = require("../controller/formationcontroller"); // Adjust the path accordingly




router.post("/addformation", formationController.add);

router.get("/showformations", formationController.getFormations);

router.get("/:id", formationController.getFormationById);

router.put("/:id", formationController.updateFormationById);


router.delete("/:id", formationController.deleteFormationById);





module.exports = router;