import { Document } from 'mongoose';

export interface SupplierDocument extends Document {
    fullname: string;
}
