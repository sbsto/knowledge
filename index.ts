import { Server } from "./app/Server";
import express from 'express';
const app = express();

const port: string | undefined = process.env.PORT;

const server = new Server(app);
server.start(port);