import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';
import { UserDocument } from '@/interfaces/user.interface';
import User from '@/models/user.model';

export function getAllUser() {
    // return User.create(input);
    return User.find();
}

export function createUser(input: DocumentDefinition<UserDocument>) {
    return User.create(input);
}

export function findUser(
    query: FilterQuery<UserDocument>,
    options: QueryOptions = { lean: true }
) {
    return User.findOne(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    options: QueryOptions
) {
    return User.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
    return User.deleteOne(query);
}
