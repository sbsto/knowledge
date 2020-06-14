import mongoose from 'mongoose';

export interface IParagraph extends mongoose.Document {
    document: mongoose.Schema.Types.ObjectId;
    body: string;
    order: number;
};

const paraSchema = new mongoose.Schema({
    document: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Doc',
    },
    order: {
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
