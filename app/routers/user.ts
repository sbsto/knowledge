import express, { Request, Response } from 'express'
import User, { IUserProps, IUser } from '../models/User'
import auth, { AuthRequest } from '../middleware/auth'

const router = express.Router()

router.post('/api/users/create', async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const user = new User(authReq.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user,
            token
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/users/login', async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        const user = await User.findByCredentials(authReq.body.email, authReq.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/api/users/logout', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        authReq.user.tokens = authReq.user.tokens.filter((token) => token.token !== authReq.token)
        await authReq.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/api/users/logoutAll', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        authReq.user.tokens = []
        await authReq.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/users/me', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    res.send(authReq.user)
})

function isValidProp(user: IUser, prop: string): prop is keyof IUserProps {
    return prop in Object.keys(user)
}

function updateUser(req: AuthRequest, property: string): void {
    if (isValidProp(req.user, property) && property != "age") {
        req.user[property] = req.body[property]
    } else if (property == "age") {
        req.user[property] = req.body[property]
    }
}

router.patch('/api/users/me', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const updates = Object.keys(authReq.body)

    try {
        updates.forEach((update) => updateUser(authReq, update))
        await authReq.user.save()
        res.send(authReq.user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/api/users/me', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        await authReq.user.remove()
        res.send(authReq.user)
    } catch (e) {
        res.status(500).send()
    }
})

export default router