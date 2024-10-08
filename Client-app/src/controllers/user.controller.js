import userService from "../services/user.service";

import { StatusCodes } from "http-status-codes";


const STATUS = {
    success: 'OK',
    failure: 'NO'
};

/**
 * Retrieve a user
 * @param req
 * @param res
 * @returns {*}
**/

const getAllUsers = (req, res) => {
    const users =  userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No Users Found.'
    })
};

/**
 * Add a user
 * @param req
 * @param res
 * @returns {*}
**/

const addUser = (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user);


    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser,
    });
}    

const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user =  userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user, 
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} is not Found.`
    })
}

/**
 * Update a user
 * @param req
 * @param res
 * @returns {*}
**/

const updateUser = (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id, 10);

    const updatedUser = userService.updateUser(id, user);

    if(updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updatedUser,
        });
    } 
    else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} is not found.`,
        });
    }
};

/**
 * Remove a user
 * @param req
 * @param res
 * @returns {*}
**/

const deleteUser = (req, res) => {
    const { params } = req; 
    const id = parseInt(params.id);
    const user = userService.getUser(id);
    if (user) {
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} has been deleted.`,
        });
    }
    else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} couldn't been deleted.`,
        })
    }
}


export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}