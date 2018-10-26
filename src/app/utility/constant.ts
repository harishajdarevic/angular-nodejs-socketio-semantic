import { HttpHeaders } from "@angular/common/http";

// HTTP options
export const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

// enums
export enum API {
    ROOT = "http://localhost:8765/server/",
    SYNC_START = "sync/start",
}
