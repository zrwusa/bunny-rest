// import {httpStatus} from './http-status';
// import {StringUtil} from './string';

// for(let status in httpStatus) {
//     const code = `export class ${StringUtil.toPascalCase(httpStatus[status].phrase)}Error extends Error {
//     code: string;
//     description: string;
//     constructor(message?: string) {
//         super(message || "${httpStatus[status].phrase}");
//         this.code = "${httpStatus[status].code}";
//         this.description = "${httpStatus[status].description}";
//     }
// }`
//     console.log(code);
// }

// export class NotFoundError extends Error {
//     code: number;
//     constructor(message?: string) {
//         super(message || 'Not Found');
//         this.code = 404;
//     }
// }
//
// export class ConflictError extends Error {
//     code: number;
//     constructor(message?: string) {
//         super(message || 'Conflict');
//         this.code = 409;
//     }
// }
//
// export class UnauthorizedError extends Error {
//     code: number;
//     constructor(message?: string) {
//         super(message || 'Unauthorized');
//         this.code = 401;
//     }
// }
//
// export class ForbiddenError extends Error {
//     code: number;
//     constructor(message?: string) {
//         super(message || 'Forbidden');
//         this.code = 403;
//     }
// }
//
// export class InternalServerError extends Error {
//     code: number;
//     constructor(message?: string) {
//         super(message || 'Internal Server');
//         this.code = 500;
//     }
// }

export class ContinueError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Continue');
        this.code = '100';
        this.description = 'indicates that the initial part of a request has been received and has not yet been rejected by the server.';
    }
}

export class SwitchingProtocolsError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Switching Protocols');
        this.code = '101';
        this.description = 'indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.';
    }
}

export class ProcessingError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Processing');
        this.code = '102';
        this.description = 'is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.';
    }
}

export class OkError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'OK');
        this.code = '200';
        this.description = 'indicates that the request has succeeded.';
    }
}

export class CreatedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Created');
        this.code = '201';
        this.description = 'indicates that the request has been fulfilled and has resulted in one or more new resources being created.';
    }
}

export class AcceptedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Accepted');
        this.code = '202';
        this.description = 'indicates that the request has been accepted for processing, but the processing has not been completed.';
    }
}

export class NonAuthoritativeInformationError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Non-Authoritative Information');
        this.code = '203';
        this.description = 'indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.';
    }
}

export class NoContentError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'No Content');
        this.code = '204';
        this.description = 'indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.';
    }
}

export class ResetContentError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Reset Content');
        this.code = '205';
        this.description = 'indicates that the server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.';
    }
}

export class PartialContentError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Partial Content');
        this.code = '206';
        this.description = 'indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.';
    }
}

export class MultiStatusError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Multi-Status');
        this.code = '207';
        this.description = 'provides status for multiple independent operations.';
    }
}

export class ImUsedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'IM Used');
        this.code = '226';
        this.description = 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.';
    }
}

export class MultipleChoicesError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Multiple Choices');
        this.code = '300';
        this.description = 'indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.';
    }
}

export class MovedPermanentlyError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Moved Permanently');
        this.code = '301';
        this.description = 'indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.';
    }
}

export class FoundError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Found');
        this.code = '302';
        this.description = 'indicates that the target resource resides temporarily under a different URI.';
    }
}

export class SeeOtherError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'See Other');
        this.code = '303';
        this.description = 'indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.';
    }
}

export class NotModifiedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Not Modified');
        this.code = '304';
        this.description = 'indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.';
    }
}

export class UseProxyError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Use Proxy');
        this.code = '305';
        this.description = '*deprecated*';
    }
}

export class TemporaryRedirectError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Temporary Redirect');
        this.code = '307';
        this.description = 'indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.';
    }
}

export class PermanentRedirectError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Permanent Redirect');
        this.code = '308';
        this.description = 'The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.';
    }
}

export class BadRequestError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Bad Request');
        this.code = '400';
        this.description = 'indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.';
    }
}

export class UnauthorizedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Unauthorized');
        this.code = '401';
        this.description = 'indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.';
    }
}

export class PaymentRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Payment Required');
        this.code = '402';
        this.description = '*reserved*';
    }
}

export class ForbiddenError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Forbidden');
        this.code = '403';
        this.description = 'indicates that the server understood the request but refuses to authorize it.';
    }
}

export class NotFoundError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Not Found');
        this.code = '404';
        this.description = 'indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.';
    }
}

export class MethodNotAllowedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Method Not Allowed');
        this.code = '405';
        this.description = 'indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.';
    }
}

export class NotAcceptableError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Not Acceptable');
        this.code = '406';
        this.description = 'indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.';
    }
}

export class ProxyAuthenticationRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Proxy Authentication Required');
        this.code = '407';
        this.description = 'is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.';
    }
}

export class RequestTimeoutError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Request Timeout');
        this.code = '408';
        this.description = 'indicates that the server did not receive a complete request message within the time that it was prepared to wait.';
    }
}

export class ConflictError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Conflict');
        this.code = '409';
        this.description = 'indicates that the request could not be completed due to a conflict with the current state of the resource.';
    }
}

export class GoneError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Gone');
        this.code = '410';
        this.description = 'indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.';
    }
}

export class LengthRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Length Required');
        this.code = '411';
        this.description = 'indicates that the server refuses to accept the request without a defined Content-Length.';
    }
}

export class PreconditionFailedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Precondition Failed');
        this.code = '412';
        this.description = 'indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.';
    }
}

export class PayloadTooLargeError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Payload Too Large');
        this.code = '413';
        this.description = 'indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.';
    }
}

export class UriTooLongError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'URI Too Long');
        this.code = '414';
        this.description = 'indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.';
    }
}

export class UnsupportedMediaTypeError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Unsupported Media Type');
        this.code = '415';
        this.description = 'indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.';
    }
}

export class RangeNotSatisfiableError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Range Not Satisfiable');
        this.code = '416';
        this.description = 'indicates that none of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.';
    }
}

export class ExpectationFailedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Expectation Failed');
        this.code = '417';
        this.description = 'indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.';
    }
}

export class ImATeapotError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'I\'m a teapot');
        this.code = '418';
        this.description = 'Any attempt to brew coffee with a teapot should result in the error code 418 I\'m a teapot.';
    }
}

export class UnprocessableEntityError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Unprocessable Entity');
        this.code = '422';
        this.description = 'means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.';
    }
}

export class LockedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Locked');
        this.code = '423';
        this.description = 'means the source or destination resource of a method is locked.';
    }
}

export class FailedDependencyError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Failed Dependency');
        this.code = '424';
        this.description = 'means that the method could not be performed on the resource because the requested action depended on another action and that action failed.';
    }
}

export class UpgradeRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Upgrade Required');
        this.code = '426';
        this.description = 'indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.';
    }
}

export class PreconditionRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Precondition Required');
        this.code = '428';
        this.description = 'indicates that the origin server requires the request to be conditional.';
    }
}

export class TooManyRequestsError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Too Many Requests');
        this.code = '429';
        this.description = 'indicates that the user has sent too many requests in a given amount of time (rate limiting).';
    }
}

export class RequestHeaderFieldsTooLargeError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Request Header Fields Too Large');
        this.code = '431';
        this.description = 'indicates that the server is unwilling to process the request because its header fields are too large.';
    }
}

export class UnavailableForLegalReasonsError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Unavailable For Legal Reasons');
        this.code = '451';
        this.description = 'This status code indicates that the server is denying access to the resource in response to a legal demand.';
    }
}

export class InternalServerError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Internal Server Error');
        this.code = '500';
        this.description = 'indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.';
    }
}

export class NotImplementedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Not Implemented');
        this.code = '501';
        this.description = 'indicates that the server does not support the functionality required to fulfill the request.';
    }
}

export class BadGatewayError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Bad Gateway');
        this.code = '502';
        this.description = 'indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.';
    }
}

export class ServiceUnavailableError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Service Unavailable');
        this.code = '503';
        this.description = 'indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.';
    }
}

export class GatewayTimeOutError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Gateway Time-out');
        this.code = '504';
        this.description = 'indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.';
    }
}

export class HttpVersionNotSupportedError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'HTTP Version Not Supported');
        this.code = '505';
        this.description = 'indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.';
    }
}

export class VariantAlsoNegotiatesError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Variant Also Negotiates');
        this.code = '506';
        this.description = 'indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.';
    }
}

export class InsufficientStorageError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Insufficient Storage');
        this.code = '507';
        this.description = 'means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.';
    }
}

export class NetworkAuthenticationRequiredError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || 'Network Authentication Required');
        this.code = '511';
        this.description = 'indicates that the client needs to authenticate to gain network access.';
    }
}

export class InformationalError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Informational**');
        this.code = '1xx';
        this.description = 'indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response. ~ [sure](http://www.urbandictionary.com/define.php?term=sure)';
    }
}

export class SuccessfulError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Successful**');
        this.code = '2xx';
        this.description = 'indicates that the client\'s request was successfully received, understood, and accepted. ~ [cool](https://twitter.com/DanaDanger/status/183316183494311936)';
    }
}

export class RedirectionError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Redirection**');
        this.code = '3xx';
        this.description = 'indicates that further action needs to be taken by the user agent in order to fulfill the request. ~ [ask that dude over there](https://twitter.com/DanaDanger/status/183316183494311936)';
    }
}

export class ClientError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Client Error**');
        this.code = '4xx';
        this.description = 'indicates that the client seems to have erred. ~ [*you* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)';
    }
}

export class ServerError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Server Error**');
        this.code = '5xx';
        this.description = 'indicates that the server is aware that it has erred or is incapable of performing the requested method. ~ [*we* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)';
    }
}

export class DeveloperError extends Error {
    code: string;
    description: string;

    constructor(message?: string) {
        super(message || '**Developer Error**');
        this.code = '7xx';
        this.description = '[err](http://www.urbandictionary.com/define.php?term=err)';
    }
}
