import { Router } from 'express';

const router = Router();

import apiRouter from './apiRouter';

router.use('/api/v1', apiRouter);

export default router;
