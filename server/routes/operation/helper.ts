import { Response} from "express";
import { io } from "../../app";

export class Operation {

    public static canceled: boolean = false;
    /**
     * Timeout function to make execution longer.
     * @param ms
     * @returns {Promise<>}
     */
    public static timeOut(ms) {
        return new Promise((fulfill) => {
            setTimeout(fulfill, ms);
        });
    }

    /**
     * Long runing operation used to start and finish
     * and socket emit to Angular application
     * @returns {Promise<void>}
     */

    public static async longOperationStartAndFinish() {
        const iterations = 101;

        for (let i = 0; i < iterations; i++) {

            io.sockets.emit("#progress", {
                barId: 1,
                status: true,
                progress: i,
            });

            if (i === 100) {
                io.sockets.emit("#progress", {
                    barId: 1,
                    status: true,
                    message: "Operation finished!",
                });
            }

            await this.timeOut(100);
        }
    }

    /**
     * Long runing operation used to start and stop in the middle
     * and socket emit error
     * @returns {Promise<void>}
     */
    public static async longOperationStartAndStopInTheMiddle() {
        const iterations = 101;

        for (let i = 0; i <= iterations; i++) {

            io.sockets.emit("#progress", {
                barId: 2,
                status: true,
                progress: i,
            });

            if (i === 50) {
                io.sockets.emit("#progress", {
                    barId: 2,
                    status: false,
                    message: "Error occured on data processing!",
                });

                break;
            }

            await this.timeOut(100);
        }
    }

    /**
     * Long runing operation used to start and stop when user press cancel button.
     * @returns {Promise<void>}
     */
    public static async longOperationStartAndStopOnUserCancel() {

        const iterations = 101;

        for (let i = 0; i < iterations; i++) {

            io.sockets.emit("#progress", {
                barId: 3,
                status: true,
                progress: i,
            });

            if (this.canceled) {
                this.canceled = false;

                io.sockets.emit("#progress", {
                    barId: 3,
                    status: false,
                    message: "Operation canceled by user!",
                });

                break;
            }

            if (i === 100) {
                io.sockets.emit("#progress", {
                    barId: 3,
                    status: false,
                    message: "Operation finished!",
                });
            }

            await this.timeOut(100);
        }
    }

    /**
     * Server response
     */
    public static response(response: Response, status: boolean, message: string, progressId: number = 0) {

        let serverResponse = {
            status,
            message,
        };

        if (progressId) {
            serverResponse = Object.assign({}, serverResponse, {
               progressId,
           });
        }

        return response.json(serverResponse);
    }

    public static async cancelTransaction() {
        this.canceled = true;
    }

}
