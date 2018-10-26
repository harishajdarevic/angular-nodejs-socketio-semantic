export interface IAPIResponse {
    status?: boolean;
    message?: string;
}

export interface IWebSocket {
    barId: string;
    status: boolean;
    progress?: number;
    message?: string;
}
