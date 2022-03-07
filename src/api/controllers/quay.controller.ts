import { Request, Response } from 'express';
import { get } from 'lodash';
import {
    createQuay,
    findQuay,
    findAndUpdate,
    deleteQuay,
    getAllQuay,
} from '@/services/quay.service';

export async function getAllQuayHandler(req: Request, res: Response) {
    const containe = await getAllQuay();

    return res.send(containe);
}

export async function createQuayHandler(req: Request, res: Response) {
    const body = req.body;

    const containe = await createQuay(body);

    return res.send(containe);
}

export async function updateQuayHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');
    const update = req.body;

    const containe = await findQuay({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    const updatedQuay = await findAndUpdate({ containeId }, update, {
        new: true,
    });

    return res.send(updatedQuay);
}

export async function getOneQuayHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findQuay({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    return res.send(containe);
}

export async function deleteQuayHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findQuay({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    await deleteQuay({ containeId });

    return res.sendStatus(200);
}
