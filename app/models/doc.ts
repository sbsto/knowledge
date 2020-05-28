import mongoose from 'mongoose';

export interface IDoc extends mongoose.Document {
    body: string;
    tags: string[];
    owner: mongoose.Schema.Types.ObjectId;
};

const docSchema = new mongoose.Schema({
    body: {
        type: String,
        trim: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Doc = mongoose.model<IDoc>('Doc', docSchema)

export default Doc