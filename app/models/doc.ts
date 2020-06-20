import mongoose from 'mongoose';
import { DocEvent } from './';
import { IDocEvent } from './doc-event';

export interface IDoc extends mongoose.Document {
    tags: string[];
    owner: mongoose.Schema.Types.ObjectId;
    getTitle(): string;
};


const docSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tags: [{
        type: String,
        trim: true,
        required: false
    }]
}, {
    timestamps: true
})

docSchema.virtual('paragraphs', {
    ref: 'Paragraph',
    localField: '_id',
    foreignField: 'documentId'
})

docSchema.virtual("docEvents", {
    ref: "DocEvent",
    localField: "_id",
    foreignField: "documentId"
})

docSchema.methods.getTitle = async function () {
    const doc = this
    await doc.populate({
        path: 'docEvents',
        match: { type: 'titleChangeEvent' }
    }).execPopulate()

    if (!doc.docEvents) {
        return ""
    }

    return doc.docEvents[doc.docEvents.length - 1].data.title
}


const Doc = mongoose.model<IDoc>('Doc', docSchema)

export default Doc