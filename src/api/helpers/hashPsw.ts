import bcrypt from 'bcryptjs';

export function hashPsw(arg: string): string {
    return bcrypt.hashSync(arg, 12);
}
