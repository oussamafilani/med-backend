import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { SupplierDocument } from '@/interfaces/supplier.interface';
import Supplier from '@/models/supplier.model';

export function getAllSupplier() {
    return Supplier.find();
}

export function createSupplier(input: DocumentDefinition<SupplierDocument>) {
    return Supplier.create(input);
}

export function findSupplier(
    query: FilterQuery<SupplierDocument>,
    options: QueryOptions = { lean: true }
) {
    return Supplier.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<SupplierDocument>,
    update: UpdateQuery<SupplierDocument>,
    options: QueryOptions
) {
    return Supplier.findOneAndUpdate(query, update, options);
}

export function deleteSupplier(query: FilterQuery<SupplierDocument>) {
    return Supplier.deleteOne(query);
}
