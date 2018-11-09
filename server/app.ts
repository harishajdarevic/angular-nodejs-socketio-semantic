import * as express from "express";
import { Server } from "http";
import * as socketIo from "socket.io";

import { generateApp } from "./helpers/utility";
import { Operation } from "./routes/operation/helper";
import { apiRoutes } from "./routes/routes";
import * as path from 'path';

const app: express.Application = generateApp();
const server: Server = app.listen(process.env.PORT || 8765);

const io = socketIo(server);

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '../') + '/dist/'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

apiRoutes(app).catch((error) => console.log(error));

io.on("connection", (socket) => {
    socket.on("cancel", (event) => {
        if (event) {
            Operation.cancelTransaction();
        }
    });
});

export { server, io };
