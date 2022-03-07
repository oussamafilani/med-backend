import { Request, Response } from 'express';
import { get } from 'lodash';
import { hashPsw } from '@/helpers/hashPsw';
import {
    createUser,
    findUser,
    findAndUpdate,
    deleteUser,
    getAllUser,
} from '@/services/user.service';

export async function getAllUserHandler(req: Request, res: Response) {
    const user = await getAllUser();

    return res.send(user);
}

export async function createUserHandler(req: Request, res: Response) {
    const { fullname, email, password, role } = req.body;

    const hasdPsw = hashPsw(password);

    const user = await createUser({
        fullname,
        email,
        password: hasdPsw,
        role,
    });

    return res.send(user);
}

export async function updateUserHandler(req: Request, res: Response) {
    const userId = get(req, 'params.userId');
    const update = req.body;

    const user = await findUser({ userId });

    if (!user) {
        return res.sendStatus(404);
    }

    const updatedUser = await findAndUpdate({ userId }, update, { new: true });

    return res.send(updatedUser);
}

export async function getOneUserHandler(req: Request, res: Response) {
    const userId = get(req, 'params.userId');

    const user = await findUser({ userId });

    if (!user) {
        return res.sendStatus(404);
    }

    return res.send(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
    const userId = get(req, 'params.userId');

    const user = await findUser({ userId });

    if (!user) {
        return res.sendStatus(404);
    }

    await deleteUser({ userId });

    return res.sendStatus(200);
}
