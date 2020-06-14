import mongoose from 'mongoose';

export interface IDoc extends mongoose.Document {
    title: string;
    tags: string[];
    owner: mongoose.Schema.Types.ObjectId;
};

const docSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
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

const Doc = mongoose.model<IDoc>('Doc', docSchema)

export default Doc