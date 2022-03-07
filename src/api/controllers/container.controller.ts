import { Request, Response } from 'express';
import { get } from 'lodash';
import {
    createContainer,
    findContainer,
    findAndUpdate,
    deleteContainer,
    getAllContainer,
} from '@/services/container.service';

export async function getAllContainerHandler(req: Request, res: Response) {
    const containe = await getAllContainer();

    return res.send(containe);
}

export async function createContainerHandler(req: Request, res: Response) {
    const body = req.body;

    const containe = await createContainer(body);

    return res.send(containe);
}

export async function updateContainerHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');
    const update = req.body;

    const containe = await findContainer({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    const updatedContainer = await findAndUpdate({ containeId }, update, {
        new: true,
    });

    return res.send(updatedContainer);
}

export async function getOneContainerHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findContainer({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    return res.send(containe);
}

export async function deleteContainerHandler(req: Request, res: Response) {
    const containeId = get(req, 'params.containeId');

    const containe = await findContainer({ containeId });

    if (!containe) {
        return res.sendStatus(404);
    }

    await deleteContainer({ containeId });

    return res.sendStatus(200);
}
