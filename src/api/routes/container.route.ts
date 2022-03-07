import express from 'express';

const router = express.Router();

import {
    getAllContainerHandler,
    createContainerHandler,
    updateContainerHandler,
    getOneContainerHandler,
    deleteContainerHandler,
} from '@/controllers/container.controller';

router.get('/', getAllContainerHandler);
router.post('/', createContainerHandler);
router.put('/:containerId', updateContainerHandler);
router.get('/:containerId', getOneContainerHandler);
router.delete('/:containerId', deleteContainerHandler);

export default router;
