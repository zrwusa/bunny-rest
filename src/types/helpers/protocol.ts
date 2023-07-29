export interface APIProtocol {
    http: {
        code: number,
        message?: string,
        description: string,
    },
    bizLogic: {
        code: string,
        message: string,
        payload?: any
    },
    error?: {
        code?: string,
        message?: string,
        stack?: string,
    }
    resData?: any,
}