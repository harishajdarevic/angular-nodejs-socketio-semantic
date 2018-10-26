import * as express from "express";
import { Server } from "http";
import * as socketIo from "socket.io";

import { generateApp } from "./helpers/utility";
import { Operation } from "./routes/operation/helper";
import { apiRoutes } from "./routes/routes";

const app: express.Application = generateApp();
const server: Server = app.listen(8765);

const io = socketIo(server);

apiRoutes(app).catch((error) => console.log(error));

io.on("connection", (socket) => {
    socket.on("cancel", (event) => {
        if (event) {
            Operation.cancelTransaction();
        }
    });
});

export { server, io };
