import { Router, Response, Request } from 'express';
const router = Router();

import Auth from '@/routes/auth.route';
import User from '@/routes/user.route';
import Container from '@/routes/container.route';

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hi 👋',
    });
});

router.use('/auth', Auth);
router.use('/users', User);
router.use('/Container', Container);

export default router;
