import { Document, Types } from 'mongoose';

export interface ReservationDocument extends Document {
    from: Date;
    to: Date;
    ship: Types.ObjectId;
    quay: Types.ObjectId;
    status: 'approved' | 'panding' | 'rejected';
}
