import express = require('express')
import path = require('path')
import cors = require('cors')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

import { Express, Request, Response } from "express";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.json())
        this.app.use(cors())

        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.resolve("./" + "build/client")))

            this.app.get(/.*/, (req: Request, res: Response): void => {
                res.sendFile(path.resolve("./" + "build/client/build/index.html"))
            })
        }

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        })


    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}