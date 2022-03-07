import { Schema, model } from 'mongoose';
// import an interface representing a document in MongoDB.

import { SupplierDocument } from '@/interfaces/supplier.interface';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<SupplierDocument>({
    fullname: { type: String, required: true },
});

// 3. Create a Model.
const Supplier = model<SupplierDocument>('Supplier', schema);

export default Supplier;
