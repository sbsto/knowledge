import express from 'express'
import { Doc } from '../models'
import auth, { AuthRequest } from '../middleware/auth'
import { Request, Response } from 'express'

const router = express.Router()

router.post('/api/docs/create', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const doc = new Doc({
        ...authReq.body,
        owner: authReq.user._id
    })
    try {
        await doc.save()
        res.status(201).send(doc)

    } catch (e) {
        res.status(400).send(e)
    }
})

// maybe attach a method to user that allows us to get docs 
router.get('/api/docs/list', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    try {
        const docs = await authReq.user.getDocs()
        res.send(docs)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/api/docs/:id', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const _id = authReq.params.id
    try {
        const doc: any = await Doc.findOne({
            _id,
            owner: authReq.user._id
        })

        if (!doc) {
            return res.status(404).send()
        }

        const docWithTitle = { ...doc._doc, title: await doc.getTitle() }

        res.send(docWithTitle)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/api/docs/:id', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const updates = Object.keys(authReq.body)
    const validUpdates = ['title', 'body']
    const isValidOperation = updates.every((update) => validUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid updates.'
        })
    }

    try {
        const updatedDoc = await Doc.findOneAndUpdate({
            _id: authReq.params.id,
            owner: authReq.user._id
        }, authReq.body, { new: true, runValidators: true })
        if (!updatedDoc) {
            return res.status(404).send()
        }
        res.send(updatedDoc)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/api/docs/:id', auth, async (req: Request, res: Response) => {
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