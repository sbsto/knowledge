"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const docSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Types.ObjectId,
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
});
const Doc = mongoose_1.default.model('Doc', docSchema);
exports.default = Doc;
