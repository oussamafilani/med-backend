import express from 'express';

const router = express.Router();

import { createUserSessionHandler } from '@/controllers/auth.controller';

router.post('/', createUserSessionHandler);

export default router;
