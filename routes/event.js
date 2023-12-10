const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventcontroller"); 




router.post("/addevent", eventController.add);

router.get("/showevents", eventController.getEvents);

router.get("/:id", eventController.getEventById);


router.put("/:id", eventController.updateEventById);

router.delete("/:id", eventController.deleteEventById);

module.exports = router;