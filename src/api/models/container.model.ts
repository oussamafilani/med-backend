import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { ContainerDocument } from '@/interfaces/container.interface';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ContainerDocument>({
    reference: { type: String, required: true },
    dimensions: String,
    max_weight: Number,
    type: String,
});

// 3. Create a Model.
const Container = model<ContainerDocument>('User', schema);

export default Container;
