import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { ReservationDocument } from '@/interfaces/reservation.interface';

// 2. Create a Schema corresponding to the document interface.
const Reservationschema = new Schema<ReservationDocument>(
    {
        from: { type: Date, required: true },
        to: { type: Date, required: true, unique: true },
        ship: { type: Schema.Types.ObjectId, ref: 'Ship', required: true },
        quay: { type: Schema.Types.ObjectId, ref: 'Quay', required: true },
        status: {
            type: String,
            enum: {
                values: ['approved', 'panding', 'rejected'],
                default: 'panding',
            },
        },
    },
    { timestamps: true }
);

// 3. Create a Model.
const Reservation = model<ReservationDocument>(
    'Reservation',
    Reservationschema
);

export default Reservation;
