import express from 'express';

const router = express.Router();

import {
    getAllSupplierHandler,
    createSupplierHandler,
    updateSupplierHandler,
    getOneSupplierHandler,
    deleteSupplierHandler,
} from '@/controllers/supplier.controller';

router.get('/', getAllSupplierHandler);
router.post('/', createSupplierHandler);
router.put('/:supplierId', updateSupplierHandler);
router.get('/:supplierId', getOneSupplierHandler);
router.delete('/:supplierId', deleteSupplierHandler);

export default router;
