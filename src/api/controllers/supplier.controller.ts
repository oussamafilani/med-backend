import { Request, Response } from 'express';
import { get } from 'lodash';
import {
    createSupplier,
    findSupplier,
    findAndUpdate,
    deleteSupplier,
    getAllSupplier,
} from '@/services/supplier.service';

export async function getAllSupplierHandler(req: Request, res: Response) {
    const containe = await getAllSupplier();

    return res.send(containe);
}

export async function createSupplierHandler(req: Request, res: Response) {
    const body = req.body;

    const containe = await createSupplier(body);

    return res.send(containe);
}

export async function updateSupplierHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');
    const update = req.body;

    const containe = await findSupplier({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    const updatedSupplier = await findAndUpdate({ containeId }, update, {
        new: true,
    });

    return res.send(updatedSupplier);
}

export async function getOneSupplierHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findSupplier({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    return res.send(containe);
}

export async function deleteSupplierHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findSupplier({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    await deleteSupplier({ containeId });

    return res.sendStatus(200);
}
