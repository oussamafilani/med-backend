import bcrypt from 'bcryptjs';

export async function hashPsw(arg: string): Promise<string> {
    return await bcrypt.hash(arg, 12);
}
