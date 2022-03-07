import bcrypt from 'bcryptjs';

export function comparePsw(arg: string, arg1: string): boolean {
    return bcrypt.compareSync(arg, arg1);
}
