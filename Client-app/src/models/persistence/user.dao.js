import usersdb from '../data/users.data';

/**
 * Insert a user
 * @param req
 * @param res
 * @returns {*}
**/

const insert = (details) => {
 
    const newUser = { id: usersdb.length + 1 , ...details };
    usersdb.push(newUser);

    return newUser;
}


const get = (userId) => usersdb.find((user) => user.id === userId);

const getAll = () => usersdb;

/**
 * Update a user from its ID.
 * @param {integer}
 * @param {Object}
 * @returns {boolean/*}
**/

const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;

    usersdb.map((user, index) => {
        if(user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if(!existingUser) {
        return null;
    }
    
    /* */
    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    usersdb.splice(userIndex, 1, updatedUser);

    return updatedUser;
}

/**
 * Remove a userfrom its ID
 * @param UserId
 * @param newDetails
 * @returns {*}
**/

const remove = (userId) => {
    const deleteUser = (user, index) => {
        if(user.id === userId) {
            // rempove the array element of the found user
            usersdb.splice(index, 1);
        }
    };

    return usersdb.find(deleteUser);
}

export default {
    insert,
    get,
    getAll,
    update,
    remove
}