import express from 'express'
import Doc from '../models/Doc'
import auth, { AuthRequest } from '../middleware/auth'
import { Request, Response } from 'express'

const router = express.Router()

router.post('/api/docs/create', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const task = new Doc({
        ...authReq.body,
        owner: authReq.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})

// maybe attach a method to user that allows us to get docs 
router.get('/api/docs/list', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        const docs = await authReq.user.getDocs()
        console.log(docs)
        res.send(authReq.user.getDocs())
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/tasks/:id', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const _id = authReq.params.id
    try {
        const task = await Doc.findOne({
            _id,
            owner: authReq.user._id
        })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/api/tasks/:id', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const updates = Object.keys(authReq.body)
    const allowedUpdates = ['body']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates.'
        })
    }

    try {
        var doc = await Doc.findOne({
            _id: authReq.params.id,
            owner: authReq.user._id
        })

        if (!doc) {
            return res.status(404).send()
        }
        doc = { ...doc, ...authReq.body }
        await doc!.save()
        res.send(doc)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/api/tasks/:id', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        const doc = await Doc.findOneAndDelete({
            _id: authReq.params.id,
            owner: authReq.user._id
        })
        if (!doc) {
            return res.status(404).send()
        }
        res.send(doc)
    } catch (e) {
        res.status(500).send()
    }
})

export default router