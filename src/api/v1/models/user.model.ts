import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { User } from '@/interfaces/user.interface';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
    fullname: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// 3. Create a Model.
const UserModel = model<User>('User', schema);

export default UserModel;
