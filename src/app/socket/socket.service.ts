import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import * as io from "socket.io-client";
import { environment } from '../../environments/environment';

@Injectable()
export class SocketService {

    public socket: SocketIOClient.Socket;

    constructor() {
        
        this.socket = io.connect(environment.serverUrl, {
            transports: ["websocket"],
        });
    }

    public isConnected(): Observable<boolean> {
        return of(this.socket.connected);
    }

}
