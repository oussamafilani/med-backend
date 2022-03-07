import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { ShipDocument } from '@/interfaces/ship.interface';
import Ship from '@/models/ship.model';

export function getAllShip() {
    return Ship.find();
}

export function createShip(input: DocumentDefinition<ShipDocument>) {
    return Ship.create(input);
}

export function findShip(
    query: FilterQuery<ShipDocument>,
    options: QueryOptions = { lean: true }
) {
    return Ship.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<ShipDocument>,
    update: UpdateQuery<ShipDocument>,
    options: QueryOptions
) {
    return Ship.findOneAndUpdate(query, update, options);
}

export function deleteShip(query: FilterQuery<ShipDocument>) {
    return Ship.deleteOne(query);
}
