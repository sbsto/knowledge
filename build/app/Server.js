"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const path = require("path");
class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express.static(path.resolve("./" + "build/client")));
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API!");
        });
        this.app.get("*", (req, res) => {
            res.sendFile(path.resolve("./" + "build/client/index.html"));
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
