import mongoose from 'mongoose';

export interface IDocEvent extends mongoose.Document {
    title: string;
    tags: string[];
    owner: mongoose.Schema.Types.ObjectId;
};

const docEventSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required: true
    },
    documentId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Doc'
    }
}, {
    timestamps: true
})

const DocEvent = mongoose.model<IDocEvent>('DocEvent', docEventSchema)

export default DocEvent
