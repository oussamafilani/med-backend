import { Router, Response, Request } from 'express';
const router = Router();

import Auth from '@/routes/auth.route';
import User from '@/routes/user.route';
import Container from '@/routes/container.route';
import Supplier from '@/routes/supplier.route';
import Ship from '@/routes/ship.route';
import Quay from '@/routes/quay.route';
import Reservation from '@/routes/reservation.route';

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hi 👋',
    });
});

router.use('/auth', Auth);
router.use('/users', User);
router.use('/containers', Container);
router.use('/suppliers', Supplier);
router.use('/ships', Ship);
router.use('/quays', Quay);
router.use('/reservations', Reservation);

export default router;
