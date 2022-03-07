import { Router, Response, Request } from 'express';
const router = Router();

import User from '@/routes/user.route';
import Container from '@/routes/container.route';

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hi 👋',
    });
});

router.use('/users', User);
router.use('/Container', Container);

export default router;
