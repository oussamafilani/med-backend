import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { UserDocument } from '@/interfaces/user.interface';

// 2. Create a Schema corresponding to the document interface.
const Userschema = new Schema<UserDocument>(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
    },
    { timestamps: true }
);

// 3. Create a Model.
const User = model<UserDocument>('User', Userschema);

export default User;
