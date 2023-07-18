import type {RESTFulProtocol} from '../types/helpers/restful';

const continueProcessing: RESTFulProtocol = {
    code: 100,
    message: 'Continue',
    description: 'indicates that the initial part of a request has been received and has not yet been rejected by the server.',
};

const switchingProtocols: RESTFulProtocol = {
    code: 101,
    message: 'Switching Protocols',
    description: 'indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.',
};

const processing: RESTFulProtocol = {
    code: 102,
    message: 'Processing',
    description: 'is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
};
const ok: RESTFulProtocol = {
    code: 200,
    message: 'OK',
    description: 'indicates that the request has succeeded.',
};

const created: RESTFulProtocol = {
    code: 201,
    message: 'Created',
    description: 'indicates that the request has been fulfilled and has resulted in one or more new resources being created.',
};

const accepted: RESTFulProtocol = {
    code: 202,
    message: 'Accepted',
    description: 'indicates that the request has been accepted for processing, but the processing has not been completed.',
};

const nonAuthoritativeInformation: RESTFulProtocol = {
    code: 203,
    message: 'Non-Authoritative Information',
    description: 'indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.',
};

const noContent: RESTFulProtocol = {
    code: 204,
    message: 'No Content',
    description: 'indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.',
};
const resetContent: RESTFulProtocol = {
    code: 205,
    message: 'Reset Content',
    description: 'indicates that the server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.',
};
const partialContent: RESTFulProtocol = {
    code: 206,
    message: 'Partial Content',
    description: 'indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.',
};
const multiStatus: RESTFulProtocol = {
    code: 207,
    message: 'Multi-Status',
    description: 'provides status for multiple independent operations.',
};
const imUsed: RESTFulProtocol = {
    code: 226,
    message: 'IM Used',
    description: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
};
const multipleChoices: RESTFulProtocol = {
    code: 300,
    message: 'Multiple Choices',
    description: 'indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.',
};
const movedPermanently: RESTFulProtocol = {
    code: 301,
    message: 'Moved Permanently',
    description: 'indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
};
const found: RESTFulProtocol = {
    code: 302,
    message: 'Found',
    description: 'indicates that the target resource resides temporarily under a different URI.',
};
const seeOther: RESTFulProtocol = {
    code: 303,
    message: 'See Other',
    description: 'indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.',
};
const notModified: RESTFulProtocol = {
    code: 304,
    message: 'Not Modified',
    description: 'indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.',
};
const useProxy: RESTFulProtocol = {
    code: 305,
    message: 'Use Proxy',
    description: '*deprecated*',
};
const temporaryRedirect: RESTFulProtocol = {
    code: 307,
    message: 'Temporary Redirect',
    description: 'indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.',
};
const permanentRedirect: RESTFulProtocol = {
    code: 308,
    message: 'Permanent Redirect',
    description: 'The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.',
};
const badRequest: RESTFulProtocol = {
    code: 400,
    message: 'Bad Request',
    description: 'indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.',
};
const unauthorized: RESTFulProtocol = {
    code: 401,
    message: 'Unauthorized',
    description: 'indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
};
const paymentRequired: RESTFulProtocol = {
    code: 402,
    message: 'Payment Required',
    description: '*reserved*',
};
const forbidden: RESTFulProtocol = {
    code: 403,
    message: 'Forbidden',
    description: 'indicates that the server understood the request but refuses to authorize it.',
};
const notFound: RESTFulProtocol = {
    code: 404,
    message: 'Not Found',
    description: 'indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
};
const methodNotAllowed: RESTFulProtocol = {
    code: 405,
    message: 'Method Not Allowed',
    description: 'indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.',
};
const notAcceptable: RESTFulProtocol = {
    code: 406,
    message: 'Not Acceptable',
    description: 'indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
};
const proxyAuthenticationRequired: RESTFulProtocol = {
    code: 407,
    message: 'Proxy Authentication Required',
    description: 'is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.',
};
const requestTimeout: RESTFulProtocol = {
    code: 408,
    message: 'Request Timeout',
    description: 'indicates that the server did not receive a complete request message within the time that it was prepared to wait.',
};
const conflict: RESTFulProtocol = {
    code: 409,
    message: 'Conflict',
    description: 'indicates that the request could not be completed due to a conflict with the current state of the resource.',
};
const gone: RESTFulProtocol = {
    code: 410,
    message: 'Gone',
    description: 'indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.',
};
const lengthRequired: RESTFulProtocol = {
    code: 411,
    message: 'Length Required',
    description: 'indicates that the server refuses to accept the request without a defined Content-Length.',
};
const preconditionFailed: RESTFulProtocol = {
    code: 412,
    message: 'Precondition Failed',
    description: 'indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.',
};
const payloadTooLarge: RESTFulProtocol = {
    code: 413,
    message: 'Payload Too Large',
    description: 'indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
};
const uriTooLong: RESTFulProtocol = {
    code: 414,
    message: 'URI Too Long',
    description: 'indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.',
};
const unsupportedMediaType: RESTFulProtocol = {
    code: 415,
    message: 'Unsupported Media Type',
    description: 'indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.',
};
const rangeNotSatisfiable: RESTFulProtocol = {
    code: 416,
    message: 'Range Not Satisfiable',
    description: 'indicates that none of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.',
};
const expectationFailed: RESTFulProtocol = {
    code: 417,
    message: 'Expectation Failed',
    description: 'indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.',
};
const imATeapot: RESTFulProtocol = {
    code: 418,
    message: 'I\'m a teapot',
    description: 'Any attempt to brew coffee with a teapot should result in the error code 418 I\'m a teapot.',
};
const unprocessableEntity: RESTFulProtocol = {
    code: 422,
    message: 'Unprocessable Entity',
    description: 'means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
};
const locked: RESTFulProtocol = {
    code: 423,
    message: 'Locked',
    description: 'means the source or destination resource of a method is locked.',
};
const failedDependency: RESTFulProtocol = {
    code: 424,
    message: 'Failed Dependency',
    description: 'means that the method could not be performed on the resource because the requested action depended on another action and that action failed.',
};
const upgradeRequired: RESTFulProtocol = {
    code: 426,
    message: 'Upgrade Required',
    description: 'indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
};
const preconditionRequired: RESTFulProtocol = {
    code: 428,
    message: 'Precondition Required',
    description: 'indicates that the origin server requires the request to be conditional.',
};
const tooManyRequests: RESTFulProtocol = {
    code: 429,
    message: 'Too Many Requests',
    description: 'indicates that the user has sent too many requests in a given amount of time (rate limiting).',
};
const requestHeaderFieldsTooLarge: RESTFulProtocol = {
    code: 431,
    message: 'Request Header Fields Too Large',
    description: 'indicates that the server is unwilling to process the request because its header fields are too large.',
};
const unavailableForLegalReasons: RESTFulProtocol = {
    code: 451,
    message: 'Unavailable For Legal Reasons',
    description: 'This status code indicates that the server is denying access to the resource in response to a legal demand.',
};
const internalServerError: RESTFulProtocol = {
    code: 500,
    message: 'Internal Server Error',
    description: 'indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.',
};
const notImplemented: RESTFulProtocol = {
    code: 501,
    message: 'Not Implemented',
    description: 'indicates that the server does not support the functionality required to fulfill the request.',
};
const badGateway: RESTFulProtocol = {
    code: 502,
    message: 'Bad Gateway',
    description: 'indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
};
const serviceUnavailable: RESTFulProtocol = {
    code: 503,
    message: 'Service Unavailable',
    description: 'indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
};
const gatewayTimeOut: RESTFulProtocol = {
    code: 504,
    message: 'Gateway Time-out',
    description: 'indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
};
const httpVersionNotSupported: RESTFulProtocol = {
    code: 505,
    message: 'HTTP Version Not Supported',
    description: 'indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.',
};
const variantAlsoNegotiates: RESTFulProtocol = {
    code: 506,
    message: 'Variant Also Negotiates',
    description: 'indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
};
const insufficientStorage: RESTFulProtocol = {
    code: 507,
    message: 'Insufficient Storage',
    description: 'means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
};
const networkAuthenticationRequired: RESTFulProtocol = {
    code: 511,
    message: 'Network Authentication Required',
    description: 'indicates that the client needs to authenticate to gain network access.',
};

const RESTFul = {
    continueProcessing,
    switchingProtocols,
    processing,
    ok,
    created,
    accepted,
    nonAuthoritativeInformation,
    noContent,
    resetContent,
    partialContent,
    multiStatus,
    imUsed,
    multipleChoices,
    movedPermanently,
    found,
    seeOther,
    notModified,
    useProxy,
    temporaryRedirect,
    permanentRedirect,
    badRequest,
    unauthorized,
    paymentRequired,
    forbidden,
    notFound,
    methodNotAllowed,
    notAcceptable,
    proxyAuthenticationRequired,
    requestTimeout,
    conflict,
    gone,
    lengthRequired,
    preconditionFailed,
    payloadTooLarge,
    uriTooLong,
    unsupportedMediaType,
    rangeNotSatisfiable,
    expectationFailed,
    imATeapot,
    unprocessableEntity,
    locked,
    failedDependency,
    upgradeRequired,
    preconditionRequired,
    tooManyRequests,
    requestHeaderFieldsTooLarge,
    unavailableForLegalReasons,
    internalServerError,
    notImplemented,
    badGateway,
    serviceUnavailable,
    gatewayTimeOut,
    httpVersionNotSupported,
    variantAlsoNegotiates,
    insufficientStorage,
    networkAuthenticationRequired,
    '100': continueProcessing,
    '101': switchingProtocols,
    '102': processing,
    '200': ok,
    '201': created,
    '202': accepted,
    '203': nonAuthoritativeInformation,
    '204': noContent,
    '205': resetContent,
    '206': partialContent,
    '207': multiStatus,
    '226': imUsed,
    '300': multipleChoices,
    '301': movedPermanently,
    '302': found,
    '303': seeOther,
    '304': notModified,
    '305': useProxy,
    '307': temporaryRedirect,
    '308': permanentRedirect,
    '400': badRequest,
    '401': unauthorized,
    '402': paymentRequired,
    '403': forbidden,
    '404': notFound,
    '405': methodNotAllowed,
    '406': notAcceptable,
    '407': proxyAuthenticationRequired,
    '408': requestTimeout,
    '409': conflict,
    '410': gone,
    '411': lengthRequired,
    '412': preconditionFailed,
    '413': payloadTooLarge,
    '414': uriTooLong,
    '415': unsupportedMediaType,
    '416': rangeNotSatisfiable,
    '417': expectationFailed,
    '418': imATeapot,
    '422': unprocessableEntity,
    '423': locked,
    '424': failedDependency,
    '426': upgradeRequired,
    '428': preconditionRequired,
    '429': tooManyRequests,
    '431': requestHeaderFieldsTooLarge,
    '451': unavailableForLegalReasons,
    '500': internalServerError,
    '501': notImplemented,
    '502': badGateway,
    '503': serviceUnavailable,
    '504': gatewayTimeOut,
    '505': httpVersionNotSupported,
    '506': variantAlsoNegotiates,
    '507': insufficientStorage,
    '511': networkAuthenticationRequired
};
export default RESTFul;


