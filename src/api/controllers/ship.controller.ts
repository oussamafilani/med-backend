import { Request, Response } from 'express';
import { get } from 'lodash';
import {
    createShip,
    findShip,
    findAndUpdate,
    deleteShip,
    getAllShip,
} from '@/services/ship.service';

export async function getAllShipHandler(req: Request, res: Response) {
    const containe = await getAllShip();

    return res.send(containe);
}

export async function createShipHandler(req: Request, res: Response) {
    const body = req.body;

    const containe = await createShip(body);

    return res.send(containe);
}

export async function updateShipHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');
    const update = req.body;

    const containe = await findShip({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    const updatedShip = await findAndUpdate({ containeId }, update, {
        new: true,
    });

    return res.send(updatedShip);
}

export async function getOneShipHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findShip({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    return res.send(containe);
}

export async function deleteShipHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findShip({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    await deleteShip({ containeId });

    return res.sendStatus(200);
}
