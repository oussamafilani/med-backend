import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions,
} from 'mongoose';

import { omit } from 'lodash';

import { comparePsw } from '@/helpers/comparePsw';

import { UserDocument } from '@/interfaces/user.interface';
import User from '@/models/user.model';

export function getAllUser() {
    // return User.create(input);
    return User.find();
}

export function createUser(
    input: Pick<
        DocumentDefinition<UserDocument>,
        'fullname' | 'email' | 'password' | 'role'
    >
) {
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

export async function validatePassword({
    email,
    password,
}: {
    email: UserDocument['email'];
    password: string;
}) {
    const user = await User.findOne({ email });

    if (!user) {
        return false;
    }

    const isValid = comparePsw(password, user.password);

    if (!isValid) {
        return false;
    }

    return omit(user.toJSON(), 'password');
}
