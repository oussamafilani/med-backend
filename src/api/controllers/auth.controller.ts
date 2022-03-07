import { Router, Request, Response, NextFunction } from 'express';
import { validatePassword } from '@/services/user.service';
import { createAccessToken } from '@/services/auth.service';

import Token from '@/utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
    /**
     * Attempt to login a user
     */

    // validate the email and password
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    // Create a session
    // const session = await createSession(user._id, user.role);

    // create access token
    const accessToken = createAccessToken(user);

    return res.send({ accessToken });
}
