import { Request, Response } from 'express';
import { get } from 'lodash';
import {
    createReservation,
    findReservation,
    findAndUpdate,
    deleteReservation,
    getAllReservation,
} from '@/services/reservation.service';

export async function getAllReservationHandler(req: Request, res: Response) {
    const containe = await getAllReservation();

    return res.send(containe);
}

export async function createReservationHandler(req: Request, res: Response) {
    const body = req.body;

    const containe = await createReservation(body);

    return res.send(containe);
}

export async function updateReservationHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');
    const update = req.body;

    const containe = await findReservation({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    const updatedReservation = await findAndUpdate({ containeId }, update, {
        new: true,
    });

    return res.send(updatedReservation);
}

export async function getOneReservationHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findReservation({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    return res.send(containe);
}

export async function deleteReservationHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findReservation({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    await deleteReservation({ containeId });

    return res.sendStatus(200);
}
