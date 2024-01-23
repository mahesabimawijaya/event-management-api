import express from "express";
import * as eventController from "./../controllers/event.controller";

const router = express.Router();

router.post("/event", eventController.createEvent);
router.get("/events", eventController.getEvents);
router.get("/event/:id", eventController.getEventDetails);
router.put("/event/:id", eventController.updateEvent);
router.delete("/event/:id", eventController.deleteEvent);
router.get("/events/:location", eventController.filterLocation);
router.get("/events/type/:type", eventController.filterType);

export default router;
