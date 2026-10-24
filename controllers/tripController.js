const tripModel = require("../models/tripModel");

function getTripId(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ message: "ID must be a positive integer" });
        return null;
    }

    return id;
}

function getAllTrips(req, res) {
    return res.status(200).json(tripModel.trips);
}

function getTripById(req, res) {
    const id = getTripId(req, res);

    if (id === null) {
        return;
    }

    const trip = tripModel.findTripById(id);

    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }

    return res.status(200).json(trip);
}

function createTrip(req, res) {
    const { destination, country, cost } = req.body;
    const trip = tripModel.addTrip(destination.trim(), country.trim(), cost);

    return res.status(201).json(trip);
}

function updateTrip(req, res) {
    const id = getTripId(req, res);

    if (id === null) {
        return;
    }

    const { destination, country, cost } = req.body;
    const trip = tripModel.updateTrip(id, destination.trim(), country.trim(), cost);

    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }

    return res.status(200).json(trip);
}

function deleteTrip(req, res) {
    const id = getTripId(req, res);

    if (id === null) {
        return;
    }

    if (!tripModel.removeTrip(id)) {
        return res.status(404).json({ message: "Trip not found" });
    }

    return res.status(200).json({ message: "Trip deleted successfully" });
}

function compareTrips(req, res) {
    const { tripId1, tripId2 } = req.body || {};
    const firstId = Number(tripId1);
    const secondId = Number(tripId2);

    if (!Number.isInteger(firstId)
        || firstId <= 0
        || !Number.isInteger(secondId)
        || secondId <= 0
        || firstId === secondId) {
        return res.status(400).json({
            message: "Provide two different positive integer trip IDs"
        });
    }

    let firstTrip = null;
    let secondTrip = null;

    for (let i = 0; i < tripModel.trips.length; i += 1) {
        if (tripModel.trips[i].id === firstId) {
            firstTrip = tripModel.trips[i];
        }

        if (tripModel.trips[i].id === secondId) {
            secondTrip = tripModel.trips[i];
        }
    }

    if (!firstTrip || !secondTrip) {
        return res.status(404).json({ message: "One or both trips were not found" });
    }

    let cheaperDestination = "Neither trip is cheaper";

    if (firstTrip.cost < secondTrip.cost) {
        cheaperDestination = firstTrip.destination;
    } else if (secondTrip.cost < firstTrip.cost) {
        cheaperDestination = secondTrip.destination;
    }

    return res.status(200).json({
        trip1: firstTrip.destination,
        trip2: secondTrip.destination,
        costDifference: Math.abs(firstTrip.cost - secondTrip.cost),
        cheaperDestination
    });
}

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip,
    compareTrips
};
