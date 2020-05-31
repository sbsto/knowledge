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
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Doc_1 = __importDefault(require("./Doc"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error('Invalid email');
            }
            return true;
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive');
            }
            return true;
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password".');
            }
            return true;
        }
    },
    tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
}, {
    timestamps: true
});
userSchema.virtual('docs', {
    ref: 'Doc',
    localField: '_id',
    foreignField: 'owner'
});
userSchema.methods.generateAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const token = jsonwebtoken_1.default.sign({
            _id: user._id.toString()
        }, process.env.JWT_SECRET, {
            expiresIn: '72h'
        });
        user.tokens = user.tokens.concat({
            token
        });
        yield user.save();
        return token;
    });
};
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;
    return userObject;
};
userSchema.methods.getDocs = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        yield user.populate({
            path: 'docs'
        }).execPopulate();
        return user.docs;
    });
};
userSchema.statics.findByCredentials = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({
        email
    });
    if (!user) {
        throw new Error('Unable to login.');
    }
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Unable to login.');
    }
    return user;
});
// hash plain-text passwords
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (user.isModified('password')) {
            user.password = yield bcryptjs_1.default.hash(user.password, 8);
        }
        next();
    });
});
// delete user docs when user is removed
userSchema.pre('remove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        yield Doc_1.default.deleteMany({
            owner: user._id
        });
        next();
    });
});
// this is saying that INSTANCES of User have type IUser, 
// but User has type IUserModel.
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
