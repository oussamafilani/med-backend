import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { ContainerDocument } from '@/interfaces/container.interface';
import Container from '@/models/container.model';

export function getAllContainer() {
    return Container.find();
}

export function createContainer(input: DocumentDefinition<ContainerDocument>) {
    return Container.create(input);
}

export function findContainer(
    query: FilterQuery<ContainerDocument>,
    options: QueryOptions = { lean: true }
) {
    return Container.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<ContainerDocument>,
    update: UpdateQuery<ContainerDocument>,
    options: QueryOptions
) {
    return Container.findOneAndUpdate(query, update, options);
}

export function deleteContainer(query: FilterQuery<ContainerDocument>) {
    return Container.deleteOne(query);
}
