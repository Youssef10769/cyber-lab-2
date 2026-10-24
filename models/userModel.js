const users = [];
let nextUserId = 1;

function addUser(name, email) {
    const user = {
        id: nextUserId,
        name,
        email
    };

    nextUserId += 1;
    users.push(user);
    return user;
}

function findUserById(id) {
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].id === id) {
            return users[i];
        }
    }

    return null;
}

function updateUser(id, name, email) {
    const user = findUserById(id);

    if (!user) {
        return null;
    }

    user.name = name;
    user.email = email;
    return user;
}

function removeUser(id) {
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].id === id) {
            users.splice(i, 1);
            return true;
        }
    }

    return false;
}

module.exports = {
    users,
    addUser,
    findUserById,
    updateUser,
    removeUser
};
