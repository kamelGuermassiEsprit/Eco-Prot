const express = require("express");
const router = express.Router();
const formationController = require("../controller/formationcontroller"); // Adjust the path accordingly




// Create a new formation
router.post("/addformation", formationController.add);

// Get all events
router.get("/showformations", formationController.getFormations);

// Get a single event by ID
router.get("/:id", formationController.getFormationById);

// Update an event by ID
router.put("/:id", formationController.updateFormationById);

// Delete an event by ID
router.delete("/:id", formationController.deleteFormationById);





module.exports = router;