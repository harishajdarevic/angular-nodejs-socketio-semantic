import { Request, Response, Router } from "express";
import { Operation } from "./helper";

export class OperationRoutes {

    private router: Router = Router();

    public getRouter(): Router {

        this.router.post("/start", async (request: Request, response: Response) => {
            try {

                const progressId = request.body.progressId;

                if (!progressId) {

                    return Operation.response(response, false, "You didn't send progressId. Please send (1, 2 or 3).");

                }

                switch (progressId) {

                    // Progress bar 1
                    case 1: {
                        Operation.longOperationStartAndFinish();

                        return Operation.response(
                            response,
                            true,
                            "Operation started.",
                            progressId);

                    }
                    // Progress bar 2
                    case 2: {
                        Operation.longOperationStartAndStopInTheMiddle();

                        return Operation.response(
                            response,
                            true,
                            "Operation started.",
                            progressId);

                    }
                    // Progress bar 3
                    case 3: {
                        Operation.longOperationStartAndStopOnUserCancel();

                        return Operation.response(
                            response,
                            true,
                            "Operation started.",
                            progressId);

                    }
                    default: {

                        return Operation.response(
                            response,
                            true,
                            "You sent progressId: " + progressId + " which is not valid. Please send (1, 2 or 3 ).",
                            progressId);
                    }
                }

            } catch (e) {
                return response.json(e);
            }
        });

        return this.router;

    }

}
