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
const User_1 = __importDefault(require("../models/User"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/api/users/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    const user = new User_1.default(authReq.body);
    try {
        yield user.save();
        const token = yield user.generateAuthToken();
        res.status(201).send({
            user,
            token
        });
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
router.post('/api/users/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        const user = yield User_1.default.findByCredentials(authReq.body.email, authReq.body.password);
        const token = yield user.generateAuthToken();
        res.send({
            user,
            token
        });
    }
    catch (e) {
        res.status(400).send();
    }
}));
router.post('/api/users/logout', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        authReq.user.tokens = authReq.user.tokens.filter((token) => token.token !== authReq.token);
        yield authReq.user.save();
        res.send();
    }
    catch (e) {
        res.status(500).send();
    }
}));
router.post('/api/users/logoutAll', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        authReq.user.tokens = [];
        yield authReq.user.save();
        res.send();
    }
    catch (e) {
        res.status(500).send();
    }
}));
router.get('/api/users/me', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    res.send(authReq.user);
}));
router.patch('/api/users/me', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    const updates = Object.keys(authReq.body);
    const validUpdates = ['name', 'email', 'age', 'password'];
    const isValidOperation = updates.every((update) => validUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates.' });
    }
    try {
        const updatedUser = yield User_1.default.findByIdAndUpdate(authReq.user._id, authReq.body, { new: true, runValidators: true });
        if (!updatedUser) {
            throw new Error('No user found.');
        }
        res.send(updatedUser);
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
router.delete('/api/users/me', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authReq = req;
    try {
        yield authReq.user.remove();
        res.send(authReq.user);
    }
    catch (e) {
        res.status(500).send();
    }
}));
exports.default = router;
