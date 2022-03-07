import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { QuayDocument } from '@/interfaces/quay.interface';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<QuayDocument>({
    reference: { type: String, required: true, unique: true },
    status: Boolean,
});

// 3. Create a Model.
const Quay = model<QuayDocument>('Quay', schema);

export default Quay;
