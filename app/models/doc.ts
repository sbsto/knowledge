import mongoose from 'mongoose';

export interface IDoc extends mongoose.Document {
    title: string;
    body: string;
    tags: string[];
    owner: mongoose.Schema.Types.ObjectId;
};

const docSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true
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

const Doc = mongoose.model<IDoc>('Doc', docSchema)

export default Doc