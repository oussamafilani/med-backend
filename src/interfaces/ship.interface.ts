import { Document } from 'mongoose';

export interface ShipDocument extends Document {
    reference: string;
    nationality?: string;
    tonnage?: number;
}
