export enum ApiStatus {
    idle = 'idle',
    loading = 'loading',
    successed = 'successed',
    failed = 'failed',
}

export enum ApiResponseStatus {
    success = 'success',
    fail = 'fail',
}

export type Api<Data = unknown> = {
    status: ApiStatus
    data: Data
    error: string
}

export type ApiState = {
    [apiKey: string]: Api
}

export type ResponseData<Data = unknown> = {
    result: keyof ApiResponseStatus
    data: Data
    feedback?: string
}