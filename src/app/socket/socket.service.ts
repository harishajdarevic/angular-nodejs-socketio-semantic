import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import * as io from "socket.io-client";
import { environment } from '../../environments/environment';

@Injectable()
export class SocketService {

    public socket: SocketIOClient.Socket;

    constructor() {
        console.log("window.location.hostname: ", window.location.hostname);
        console.log("environment.socketUrl ", environment.socketUrl);
        
        this.socket = io.connect(environment.socketUrl, {
            transports: ["websocket"],
        });
    }

    public isConnected(): Observable<boolean> {
        return of(this.socket.connected);
    }

}
