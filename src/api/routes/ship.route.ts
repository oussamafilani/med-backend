import express from 'express';

const router = express.Router();

import {
    getAllShipHandler,
    createShipHandler,
    updateShipHandler,
    getOneShipHandler,
    deleteShipHandler,
} from '@/controllers/ship.controller';

router.get('/', getAllShipHandler);
router.post('/', createShipHandler);
router.put('/:shipId', updateShipHandler);
router.get('/:shipId', getOneShipHandler);
router.delete('/:shipId', deleteShipHandler);

export default router;
