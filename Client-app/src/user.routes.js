const express = require('express');
import { expressYupMiddleware } from 'express-yup-middleware';
import { getUser, addUser, updateUser, deleteUser } from './user.schema';
import userController from './controllers/user.controller';

const router = express.Router();

const STATUS = {
    success: 'OK',
    failure: 'NO'
};

router.get('/all', userController.getAllUsers);

router.get('/:id', expressYupMiddleware({ schemaValidator: getUser }), 
    userController.getUser
);

router.post('/', expressYupMiddleware({ schemaValidator: addUser }),
    userController.addUser 
);

router.put('/update/:id', expressYupMiddleware({ schemaValidator: updateUser }),
    userController.updateUser
);

router.delete('/:id', expressYupMiddleware({ schemaValidator: deleteUser }), 
    userController.deleteUser
);

export default router;