import { Application } from "express";
import { OperationRoutes } from "./operation/index";

export async function apiRoutes(app: Application) {

    app.use("/server/operation/", new OperationRoutes().getRouter());

}
