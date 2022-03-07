import jwt from 'jsonwebtoken';
import 'dotenv/config';

import { UserDocument } from '@/interfaces/user.interface';

export const createToken = (
    user: Pick<UserDocument, '_id' | 'role'>
): string => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET as jwt.Secret,
        {
            expiresIn: '1d',
        }
    );
};

export default { createToken };
