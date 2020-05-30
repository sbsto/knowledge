import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Doc, { IDoc } from './Doc'

interface IToken {
    _id: mongoose.Types.ObjectId;
    token: string;
}

interface IUserSchema extends mongoose.Document {
    name: string;
    email: string;
    age?: number;
    password: string;
    tokens: IToken[];
}

// for methods
export interface IUser extends IUserSchema {
    getDocs(): IDoc[];
    generateAuthToken(): string;
    toJSON(): any;
}

// for statics
interface IUserModel extends mongoose.Model<IUser> {
    findByCredentials(email: string, password: string): IUser;
}

const userSchema = new mongoose.Schema({
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
        validate(value: string) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
            return true
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value: number) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
            return true
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value: string) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password".')
            }
            return true
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
})

userSchema.virtual('docs', {
    ref: 'Doc',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({
        _id: user._id.toString()
    }, process.env.JWT_SECRET!, {
        expiresIn: '72h'
    })

    user.tokens = user.tokens.concat({
        token
    })
    await user.save()

    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.getDocs = async function () {
    const user = this
    await user.populate({
        path: 'docs'
    }).execPopulate()
    return user.docs
}

userSchema.statics.findByCredentials = async (email: string, password: string) => {
    const user = await User.findOne({
        email
    })
    if (!user) {
        throw new Error('Unable to login.')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login.')
    }
    return user
}

// hash plain-text passwords
userSchema.pre('save', async function (next) {
    const user = this as IUser
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// delete user docs when user is removed
userSchema.pre('remove', async function (next) {
    const user = this as IUser
    await Doc.deleteMany({
        owner: user._id
    })
    next()
})

// this is saying that INSTANCES of User have type IUser, 
// but User has type IUserModel.
const User = mongoose.model<IUser, IUserModel>('User', userSchema);
export default User;