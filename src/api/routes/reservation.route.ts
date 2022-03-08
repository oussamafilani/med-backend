import express from 'express';

const router = express.Router();

import {
    getAllReservationHandler,
    createReservationHandler,
    updateReservationHandler,
    getOneReservationHandler,
    deleteReservationHandler,
} from '@/controllers/reservation.controller';

router.get('/', getAllReservationHandler);
router.post('/', createReservationHandler);
router.put('/:reservationId', updateReservationHandler);
router.get('/:reservationId', getOneReservationHandler);
router.delete('/:reservationId', deleteReservationHandler);

export default router;
