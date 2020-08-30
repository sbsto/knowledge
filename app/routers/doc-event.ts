import express from 'express'
import { DocEvent } from '../models'
import auth, { AuthRequest } from '../middleware/auth'
import { Request, Response } from 'express'

const router = express.Router()

router.post('/api/doc-event/create', auth, async (req: Request, res: Response) => {
    const authReq = req as AuthRequest
    const docEvent = new DocEvent(authReq.body)
    try {
        await docEvent.save()
        res.status(201).send(docEvent)
    } catch (e) {
        res.status(400).send(e)
    }
})

export default router