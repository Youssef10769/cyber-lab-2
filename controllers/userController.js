const userModel = require("../models/userModel");

function isValidNameAndEmail(name, email) {
    return typeof name === "string"
        && name.trim().length > 0
        && typeof email === "string"
        && email.trim().length > 0;
}

function getUserId(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ message: "ID must be a positive integer" });
        return null;
    }

    return id;
}

function createUser(req, res) {
    const { name, email } = req.body || {};

    if (!isValidNameAndEmail(name, email)) {
        return res.status(400).json({ message: "Name and email must be non-empty strings" });
    }

    const user = userModel.addUser(name.trim(), email.trim());
    return res.status(201).json(user);
}

function getAllUsers(req, res) {
    return res.status(200).json(userModel.users);
}

function getUserById(req, res) {
    const id = getUserId(req, res);

    if (id === null) {
        return;
    }

    const user = userModel.findUserById(id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
}

function updateUser(req, res) {
    const id = getUserId(req, res);

    if (id === null) {
        return;
    }

    const { name, email } = req.body || {};

    if (!isValidNameAndEmail(name, email)) {
        return res.status(400).json({ message: "Name and email must be non-empty strings" });
    }

    const user = userModel.updateUser(id, name.trim(), email.trim());

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
}

function deleteUser(req, res) {
    const id = getUserId(req, res);

    if (id === null) {
        return;
    }

    if (!userModel.removeUser(id)) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
