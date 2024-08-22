import userDao from '../models/persistence/user.dao';

/**
 * Add a user.
 * @param {object} details
 * @returns {*} 
 */

const addUser = (details) => userDao.insert(details);

/**
 * Get a suer from its Id.
 * param userId
 * @returns {T} 
 */

const getUser = (userId) => userDao.get(userId);

/**
 * Get All users
 * 
 * @returns {[]} 
 */

const getAllUsers = () => userDao.getAll();

/**
 * Update a user
 * @param userId
 * @param details
 * @returns {boolean/*} 
 */

const updateUser = (userId, details) => userDao.update(userId, details);

/**
 * remove a user.
 * @params {integer}
 * @returns {*} 
 */

const removeUser = (userId) => userDao.remove(userId);


export default {
    addUser,
    getUser,
    getAllUsers,
    updateUser,
    removeUser
}