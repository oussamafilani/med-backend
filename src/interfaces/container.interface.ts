import { Document } from 'mongoose';

export interface ContainerDocument extends Document {
    reference: string;
    dimensions: string;
    max_weight?: number;
    type?: string;
}
