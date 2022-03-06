import { Router } from 'express';

const router = Router();

import User from '@/routes/user.route';
import Container from '@/routes/container.route';

router.use('/users', User);
router.use('/Container', Container);

export default router;
