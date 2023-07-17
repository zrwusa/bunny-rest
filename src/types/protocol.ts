export interface BunnyProtocol {
    http: {
        code: number,
        message?: string,
        description: string,
    },
    bizLogic: {
        code: string,
        message: string,
        payload? : any
    },
    error?: {
        code?: string,
        message?: string,
        stack?: string,
    }
    bunnyData?: any,
}