"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const cors = require("cors");
const doc_1 = __importDefault(require("./routers/doc"));
const user_1 = __importDefault(require("./routers/user"));
require("./db/mongoose");
class Server {
    constructor(app) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(doc_1.default);
        this.app.use(user_1.default);
        // routers will go here
        this.app.get("/api", (req, res) => {
            res.send("You have reached the API!");
        });
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static("./build/client/build"));
            this.app.get(/.*/, (req, res) => {
                res.sendFile("./build/client/build/index.html");
            });
        }
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
exports.Server = Server;
