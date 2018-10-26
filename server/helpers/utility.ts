import * as cors from "cors";
import * as  express from "express";

export function generateApp(): express.Application {

    // express configuration
    const app: express.Application = express();
    app.use(cors()); // cors settings
    app.set("port", 5678); // cors settings
    return app;
}
