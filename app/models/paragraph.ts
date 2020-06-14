import mongoose from 'mongoose';

export interface IParagraph extends mongoose.Document {
    documentId: mongoose.Schema.Types.ObjectId;
    body: string;
    positionInDoc: number;
};

const paraSchema = new mongoose.Schema({
    documentId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Doc',
    },
    positionInDoc: {
        type: Number,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: false
    },
}, {
    timestamps: true
})

const Paragraph = mongoose.model<IParagraph>('Paragraph', paraSchema)

export default Paragraph
