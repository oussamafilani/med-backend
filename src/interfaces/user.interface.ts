import { Document } from 'mongoose';

export interface UserDocument extends Document {
    fullname: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'QUAY_MANAGER' | 'PORT_MANAGER';
    createdAt: Date;
    updatedAt: Date;
}
