import express = require('express')
import cors = require('cors')
import path = require('path')
import { docRouter, docEventRouter, userRouter } from './routers';
import './db/mongoose'

import { Express, Request, Response } from "express";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(docRouter)
        this.app.use(userRouter)
        this.app.use(docEventRouter)

        // routers will go here
        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        })

        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, "../client/build")))

            this.app.get(/.*/, (req: Request, res: Response): void => {
                res.sendFile(path.join(__dirname, "../client/build/index.html"))
            })
        }

    }

    public start(port: string | undefined): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}