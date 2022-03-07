import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { QuayDocument } from '@/interfaces/quay.interface';
import Quay from '@/models/quay.model';

export function getAllQuay() {
    return Quay.find();
}

export function createQuay(input: DocumentDefinition<QuayDocument>) {
    return Quay.create(input);
}

export function findQuay(
    query: FilterQuery<QuayDocument>,
    options: QueryOptions = { lean: true }
) {
    return Quay.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<QuayDocument>,
    update: UpdateQuery<QuayDocument>,
    options: QueryOptions
) {
    return Quay.findOneAndUpdate(query, update, options);
}

export function deleteQuay(query: FilterQuery<QuayDocument>) {
    return Quay.deleteOne(query);
}
