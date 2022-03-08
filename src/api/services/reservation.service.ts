import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { ReservationDocument } from '@/interfaces/reservation.interface';
import Reservation from '@/models/reservation.model';
// import Quay from '@/models/quay.model';
// import Ship from '@/models/ship.model';

export function getAllReservation() {
    return Reservation.find().populate('ship').populate('quay');
}

export function createReservation(
    input: DocumentDefinition<ReservationDocument>
) {
    return Reservation.create(input);
}

export function findReservation(
    query: FilterQuery<ReservationDocument>,
    options: QueryOptions = { lean: true }
) {
    return Reservation.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<ReservationDocument>,
    update: UpdateQuery<ReservationDocument>,
    options: QueryOptions
) {
    return Reservation.findOneAndUpdate(query, update, options);
}

export function deleteReservation(query: FilterQuery<ReservationDocument>) {
    return Reservation.deleteOne(query);
}
