import express from 'express';

const router = express.Router();

import {
    getAllUserHandler,
    createUserHandler,
    updateUserHandler,
    getOneUserHandler,
    deleteUserHandler,
} from '@/controllers/user.controller';

router.get('/', getAllUserHandler);
router.post('/', createUserHandler);
router.put('/:userId', updateUserHandler);
router.get('/:userId', getOneUserHandler);
router.delete('/:userId', deleteUserHandler);

export default router;
