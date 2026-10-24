const trips = [
    { id: 1, destination: "Cairo", country: "Egypt", cost: 300 },
    { id: 2, destination: "USA", country: "United States", cost: 311 },
    { id: 3, destination: "Dubai", country: "UAE", cost: 312 }
];
let nextTripId = 4;

function findTripById(id) {
    for (let i = 0; i < trips.length; i += 1) {
        if (trips[i].id === id) {
            return trips[i];
        }
    }

    return null;
}

function addTrip(destination, country, cost) {
    const trip = {
        id: nextTripId,
        destination,
        country,
        cost
    };

    nextTripId += 1;
    trips.push(trip);
    return trip;
}

function updateTrip(id, destination, country, cost) {
    const trip = findTripById(id);

    if (!trip) {
        return null;
    }

    trip.destination = destination;
    trip.country = country;
    trip.cost = cost;
    return trip;
}

function removeTrip(id) {
    for (let i = 0; i < trips.length; i += 1) {
        if (trips[i].id === id) {
            trips.splice(i, 1);
            return true;
        }
    }

    return false;
}

module.exports = {
    trips,
    findTripById,
    addTrip,
    updateTrip,
    removeTrip
};
