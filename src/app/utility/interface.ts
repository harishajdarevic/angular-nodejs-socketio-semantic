export interface IAPIResponse {
    status?: boolean;
    message?: string;
    progressId?: number;
}

export interface IWebSocket {
    barId: number;
    status: boolean;
    progress?: number;
    message?: string;
}
