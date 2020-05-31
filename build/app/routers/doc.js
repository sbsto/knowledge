"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Doc_1 = __importDefault(require("../models/Doc"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/api/docs/create', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    const doc = new Doc_1.default(Object.assign(Object.assign({}, authReq.body), { owner: authReq.user._id }));
    try {
        yield doc.save();
        res.status(201).send(doc);
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
// maybe attach a method to user that allows us to get docs 
router.get('/api/docs/list', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        const docs = yield authReq.user.getDocs();
        res.send(docs);
    }
    catch (e) {
        res.status(500).send();
    }
}));
router.get('/api/docs/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    const _id = authReq.params.id;
    try {
        const doc = yield Doc_1.default.findOne({
            _id,
            owner: authReq.user._id
        });
        if (!doc) {
            return res.status(404).send();
        }
        res.send(doc);
    }
    catch (e) {
        res.status(500).send();
    }
}));
router.patch('/api/docs/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    const updates = Object.keys(authReq.body);
    const validUpdates = ['title', 'body'];
    const isValidOperation = updates.every((update) => validUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates.'
        });
    }
    try {
        const updatedDoc = yield Doc_1.default.findOneAndUpdate({
            _id: authReq.params.id,
            owner: authReq.user._id
        }, authReq.body, { new: true, runValidators: true });
        if (!updatedDoc) {
            return res.status(404).send();
        }
        res.send(updatedDoc);
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
router.delete('/api/docs/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        const doc = yield Doc_1.default.findOneAndDelete({
            _id: authReq.params.id,
            owner: authReq.user._id
        });
        if (!doc) {
            return res.status(404).send();
        }
        res.send(doc);
    }
    catch (e) {
        res.status(500).send();
    }
}));
exports.default = router;
