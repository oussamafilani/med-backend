import express from 'express';

const router = express.Router();

import {
    getAllQuayHandler,
    createQuayHandler,
    updateQuayHandler,
    getOneQuayHandler,
    deleteQuayHandler,
} from '@/controllers/quay.controller';

router.get('/', getAllQuayHandler);
router.post('/', createQuayHandler);
router.put('/:quayId', updateQuayHandler);
router.get('/:quayId', getOneQuayHandler);
router.delete('/:quayId', deleteQuayHandler);

export default router;
