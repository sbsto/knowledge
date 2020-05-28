import express from 'express'
import Doc from '../models/Doc'
import auth from '../middleware/auth'
import { Request, Response } from 'express'
import { IUser } from '../models/user'

const router = express.Router()


interface AuthRequest extends Request {
    user: IUser;
}

router.post('/api/docs/create', auth, async (req: AuthRequest, res: Response) => {
    const task = new Doc({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})

// GET /api/tasks?completed=false
// GET /api/tasks?limit=10&skip=10
// GET /api/tasks?sortBy=createdAt:asc
router.get('/api/docs/list', auth, async (req: AuthRequest, res) => {
    try {
        await req.user.populate({
            path: 'docs'
        }).execPopulate()
        res.send(req.user.docs)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/tasks/:id', auth, async (req: AuthRequest, res) => {
    const _id = req.params.id
    try {
        const task = await Doc.findOne({
            _id,
            owner: req.user._id
        })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/api/tasks/:id', auth, async (req: AuthRequest, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['body']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates.'
        })
    }

    try {
        const doc = await Doc.findOne({
            _id: req.params.id,
            owner: req.user._id
        })

        if (!doc) {
            return res.status(404).send()
        }

        updates.forEach((update) => doc[update] = req.body[update])
        await doc.save()
        res.send(doc)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/api/tasks/:id', auth, async (req: AuthRequest, res) => {
    try {
        const doc = await Doc.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
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