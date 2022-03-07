import token from '@/utils/jwt.utils';
import { UserDocument } from '@/interfaces/user.interface';

export function createAccessToken(
    user: Pick<UserDocument, '_id' | 'role'>
): string {
    // Build and return the new access token
    const accessToken = token.createToken(user);

    return accessToken;
}
