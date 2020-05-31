import express, { Request, Response } from 'express'
import { User, IToken } from '../models'
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
        authReq.user.tokens = authReq.user.tokens.filter((token: IToken) => token.token !== authReq.token)
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

router.patch('/api/users/me', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const updates = Object.keys(authReq.body)
    const validUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation = updates.every((update) => validUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates.' })
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(authReq.user._id, authReq.body, { new: true, runValidators: true })
        if (!updatedUser) {
            throw new Error('No user found.')
        }
        res.send(updatedUser)
    } catch (e) {
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