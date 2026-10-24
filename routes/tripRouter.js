const express = require("express");
const tripController = require("../controllers/tripController");
const verifyAdmin = require("../middleware/verifyAdmin");
const validateTrip = require("../middleware/validateTrip");
const logRequest = require("../middleware/logRequest");

const router = express.Router();

router.use(logRequest);

router.post("/compare", tripController.compareTrips);
router.get("/", tripController.getAllTrips);
router.get("/:id", tripController.getTripById);
router.post("/", verifyAdmin, validateTrip, tripController.createTrip);
router.put("/:id", verifyAdmin, validateTrip, tripController.updateTrip);
router.delete("/:id", verifyAdmin, tripController.deleteTrip);

module.exports = router;
