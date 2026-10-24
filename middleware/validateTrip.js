function validateTrip(req, res, next) {
    const { destination, country, cost } = req.body || {};

    if (typeof destination !== "string"
        || destination.trim().length === 0
        || typeof country !== "string"
        || country.trim().length === 0
        || typeof cost !== "number"
        || !Number.isFinite(cost)
        || cost <= 0) {
        return res.status(400).json({
            message: "Destination and country must be non-empty strings, and cost must be a positive number"
        });
    }

    req.body.destination = destination.trim();
    req.body.country = country.trim();
    return next();
}

module.exports = validateTrip;
