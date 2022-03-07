import { Document } from 'mongoose';

export interface QuayDocument extends Document {
    reference: string;
    status: boolean;
}
