const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventcontroller"); 




// Create a new event
router.post("/addevent", eventController.add);

// Get all events
router.get("/showevents", eventController.getEvents);

// Get a single event by ID
router.get("/:id", eventController.getEventById);

// Update an event by ID
router.put("/:id", eventController.updateEventById);

// Delete an event by ID
router.delete("/:id", eventController.deleteEventById);

module.exports = router;