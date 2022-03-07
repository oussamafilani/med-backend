import { Document } from 'mongoose';

export interface CategoryDocument extends Document {
    label: string;
}
