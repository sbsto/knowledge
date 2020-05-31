import jwt from 'jsonwebtoken'
import { User, IUser } from '../models'
import { Request, NextFunction } from 'express'

export interface AuthRequest extends Request {
    user: IUser;
    token: string;
}

const auth = async (req: any, res: any, next: NextFunction) => {
    try {
        const token = req.header('Authorization')!.replace('Bearer ', '')
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!)
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token
        })

        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({
            error: 'Please authenticate.'
        })
    }

}

export default auth