import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { ShipDocument } from '@/interfaces/ship.interface';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ShipDocument>({
    reference: { type: String, required: true, unique: true },
    nationality: String,
    tonnage: Number,
});

// 3. Create a Model.
const Ship = model<ShipDocument>('Ship', schema);

export default Ship;
