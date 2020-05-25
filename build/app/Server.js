"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const path = require("path");
const cors = require("cors");
class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(cors());
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.resolve("./" + "build/client")));
            this.app.get(/.*/, (req, res) => {
                res.sendFile(path.resolve("./" + "build/client/build/index.html"));
            });
        }
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API!");
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
