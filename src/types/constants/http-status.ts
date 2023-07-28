//maintaining a uniform response structure, adding the cache-control, setting the response HTTP status, removing the undefined keys, etc are handled by the ApiResponse class itself.
export type HttpStatus = {
    [key in string]: {
        code: string,
        phrase: string,
        description: string,
        spec_title: string,
        spec_href: string
    }
}