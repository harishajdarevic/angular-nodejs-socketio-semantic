import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { SocketService } from "./socket/socket.service";
import { API_ROOT } from "./utility/config";
import { httpOptions } from "./utility/constant";
import {IAPIResponse, IWebSocket} from "./utility/interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  public progress: Array<{ id: number, progress: number }> = [
      {
          id: 1,
          progress: 0,
      },
      {
          id: 2,
          progress: 0,
      },
      {
          id: 3,
          progress: 0,
      },
  ];

  public response: IAPIResponse[] = [
      {
          status: false,
          message: "",

      },
      {
          status: false,
          message: "",
      },
      {
          status: false,
          message: "",
      },
  ];

  constructor(private socketService: SocketService, private http: HttpClient) {

    // socket listener
    this.socketService.socket.on("#progress", (event: IWebSocket) => {

        if (event.barId) {
            this.progress[event.barId].progress = event.progress;

            // if error occur or cancel operation
            if (!event.status) {
                this.response[event.barId].status = event.status;
                this.response[event.barId].message = event.message;
            }
        }
    });
  }

  /**
   * Start long running operation that will finish successfully.
   * @progressId: number
   * - progressId: 1 = first progress bar
   * - progressId: 2 = second progress bar
   * - progressId: 3 = third progress bar
   */
  public startOperation(progressId: number) {
      console.log("starting operation: ", progressId);
      this.http.post(`${API_ROOT}operation/start`, { progressId: progressId }, httpOptions)
          .subscribe((response: IAPIResponse) => {
            this.response[0].status = response.status;
            this.response[0].message = response.message;
          });
          
  }

    /**
     * Start long running operation and cancel when user press cancel button.
     */
    public cancel() {
        this.socketService.socket.emit("cancel", true);
    }

}
