export enum ApiStatus {
    'idle',
    'loading',
    'successed',
    'failed',
}

export enum ApiResponseStatus {
    'success',
    'fail',
}

export type Api<Data = unknown> = {
    status: ApiStatus
    data: Data
    error: string
}

export type ApiState = {
    [apiKey: string]: Api
}