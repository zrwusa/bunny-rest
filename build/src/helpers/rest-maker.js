"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badGateway = exports.notImplemented = exports.internalServerError = exports.unavailableForLegalReasons = exports.requestHeaderFieldsTooLarge = exports.tooManyRequests = exports.preconditionRequired = exports.upgradeRequired = exports.failedDependency = exports.locked = exports.unprocessableEntity = exports.imATeapot = exports.expectationFailed = exports.rangeNotSatisfiable = exports.unsupportedMediaType = exports.uriTooLong = exports.payloadTooLarge = exports.preconditionFailed = exports.lengthRequired = exports.gone = exports.conflict = exports.requestTimeout = exports.proxyAuthenticationRequired = exports.notAcceptable = exports.methodNotAllowed = exports.notFound = exports.forbidden = exports.paymentRequired = exports.unauthorized = exports.badRequest = exports.permanentRedirect = exports.temporaryRedirect = exports.useProxy = exports.notModified = exports.seeOther = exports.found = exports.movedPermanently = exports.multipleChoices = exports.imUsed = exports.multiStatus = exports.partialContent = exports.resetContent = exports.noContent = exports.nonAuthoritativeInformation = exports.accepted = exports.created = exports.ok = exports.processing = exports.switchingProtocols = exports.continueProcessing = void 0;
exports.networkAuthenticationRequired = exports.insufficientStorage = exports.variantAlsoNegotiates = exports.httpVersionNotSupported = exports.gatewayTimeOut = exports.serviceUnavailable = void 0;
const continueProcessing = (res, params) => ({
    httpCode: 100,
    httpMessage: 'Continue',
    httpDescription: 'indicates that the initial part of a request has been received and has not yet been rejected by the server.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: params === null || params === void 0 ? void 0 : params.en
});
exports.continueProcessing = continueProcessing;
const switchingProtocols = (res, params) => ({
    httpCode: 101,
    httpMessage: 'Switching Protocols',
    httpDescription: 'indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.switchingProtocols = switchingProtocols;
const processing = (res, params) => ({
    httpCode: 102,
    httpMessage: 'Processing',
    httpDescription: 'is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.processing = processing;
const ok = (res, params) => ({
    httpCode: 200,
    httpMessage: 'OK',
    httpDescription: 'indicates that the request has succeeded.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.ok = ok;
const created = (res, params) => ({
    httpCode: 201,
    httpMessage: 'Created',
    httpDescription: 'indicates that the request has been fulfilled and has resulted in one or more new resources being created.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.created = created;
const accepted = (res, params) => ({
    httpCode: 202,
    httpMessage: 'Accepted',
    httpDescription: 'indicates that the request has been accepted for processing, but the processing has not been completed.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.accepted = accepted;
const nonAuthoritativeInformation = (res, params) => ({
    httpCode: 203,
    httpMessage: 'Non-Authoritative Information',
    httpDescription: 'indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.nonAuthoritativeInformation = nonAuthoritativeInformation;
const noContent = (res, params) => ({
    httpCode: 204,
    httpMessage: 'No Content',
    httpDescription: 'indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.noContent = noContent;
const resetContent = (res, params) => ({
    httpCode: 205,
    httpMessage: 'Reset Content',
    httpDescription: 'indicates that the server has fulfilled the request and desires that the user agent reset the document view, which caused the request to be sent, to its original state as received from the origin server.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.resetContent = resetContent;
const partialContent = (res, params) => ({
    httpCode: 206,
    httpMessage: 'Partial Content',
    httpDescription: 'indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.partialContent = partialContent;
const multiStatus = (res, params) => ({
    httpCode: 207,
    httpMessage: 'Multi-Status',
    httpDescription: 'provides status for multiple independent operations.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.multiStatus = multiStatus;
const imUsed = (res, params) => ({
    httpCode: 226,
    httpMessage: 'IM Used',
    httpDescription: 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.imUsed = imUsed;
const multipleChoices = (res, params) => ({
    httpCode: 300,
    httpMessage: 'Multiple Choices',
    httpDescription: 'indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.multipleChoices = multipleChoices;
const movedPermanently = (res, params) => ({
    httpCode: 301,
    httpMessage: 'Moved Permanently',
    httpDescription: 'indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.movedPermanently = movedPermanently;
const found = (res, params) => ({
    httpCode: 302,
    httpMessage: 'Found',
    httpDescription: 'indicates that the target resource resides temporarily under a different URI.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.found = found;
const seeOther = (res, params) => ({
    httpCode: 303,
    httpMessage: 'See Other',
    httpDescription: 'indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.seeOther = seeOther;
const notModified = (res, params) => ({
    httpCode: 304,
    httpMessage: 'Not Modified',
    httpDescription: 'indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.notModified = notModified;
const useProxy = (res, params) => ({
    httpCode: 305,
    httpMessage: 'Use Proxy',
    httpDescription: '*deprecated*',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.useProxy = useProxy;
const temporaryRedirect = (res, params) => ({
    httpCode: 307,
    httpMessage: 'Temporary Redirect',
    httpDescription: 'indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.temporaryRedirect = temporaryRedirect;
const permanentRedirect = (res, params) => ({
    httpCode: 308,
    httpMessage: 'Permanent Redirect',
    httpDescription: 'The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.permanentRedirect = permanentRedirect;
const badRequest = (res, params) => ({
    httpCode: 400,
    httpMessage: 'Bad Request',
    httpDescription: 'indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.badRequest = badRequest;
const unauthorized = (res, params) => ({
    httpCode: 401,
    httpMessage: 'Unauthorized',
    httpDescription: 'indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.unauthorized = unauthorized;
const paymentRequired = (res, params) => ({
    httpCode: 402,
    httpMessage: 'Payment Required',
    httpDescription: '*reserved*',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.paymentRequired = paymentRequired;
const forbidden = (res, params) => ({
    httpCode: 403,
    httpMessage: 'Forbidden',
    httpDescription: 'indicates that the server understood the request but refuses to authorize it.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.forbidden = forbidden;
const notFound = (res, params) => ({
    httpCode: 404,
    httpMessage: 'Not Found',
    httpDescription: 'indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.notFound = notFound;
const methodNotAllowed = (res, params) => ({
    httpCode: 405,
    httpMessage: 'Method Not Allowed',
    httpDescription: 'indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.methodNotAllowed = methodNotAllowed;
const notAcceptable = (res, params) => ({
    httpCode: 406,
    httpMessage: 'Not Acceptable',
    httpDescription: 'indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.notAcceptable = notAcceptable;
const proxyAuthenticationRequired = (res, params) => ({
    httpCode: 407,
    httpMessage: 'Proxy Authentication Required',
    httpDescription: 'is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.proxyAuthenticationRequired = proxyAuthenticationRequired;
const requestTimeout = (res, params) => ({
    httpCode: 408,
    httpMessage: 'Request Timeout',
    httpDescription: 'indicates that the server did not receive a complete request message within the time that it was prepared to wait.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.requestTimeout = requestTimeout;
const conflict = (res, params) => ({
    httpCode: 409,
    httpMessage: 'Conflict',
    httpDescription: 'indicates that the request could not be completed due to a conflict with the current state of the resource.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.conflict = conflict;
const gone = (res, params) => ({
    httpCode: 410,
    httpMessage: 'Gone',
    httpDescription: 'indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.gone = gone;
const lengthRequired = (res, params) => ({
    httpCode: 411,
    httpMessage: 'Length Required',
    httpDescription: 'indicates that the server refuses to accept the request without a defined Content-Length.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.lengthRequired = lengthRequired;
const preconditionFailed = (res, params) => ({
    httpCode: 412,
    httpMessage: 'Precondition Failed',
    httpDescription: 'indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.preconditionFailed = preconditionFailed;
const payloadTooLarge = (res, params) => ({
    httpCode: 413,
    httpMessage: 'Payload Too Large',
    httpDescription: 'indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.payloadTooLarge = payloadTooLarge;
const uriTooLong = (res, params) => ({
    httpCode: 414,
    httpMessage: 'URI Too Long',
    httpDescription: 'indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.uriTooLong = uriTooLong;
const unsupportedMediaType = (res, params) => ({
    httpCode: 415,
    httpMessage: 'Unsupported Media Type',
    httpDescription: 'indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.unsupportedMediaType = unsupportedMediaType;
const rangeNotSatisfiable = (res, params) => ({
    httpCode: 416,
    httpMessage: 'Range Not Satisfiable',
    httpDescription: 'indicates that none of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.rangeNotSatisfiable = rangeNotSatisfiable;
const expectationFailed = (res, params) => ({
    httpCode: 417,
    httpMessage: 'Expectation Failed',
    httpDescription: 'indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.expectationFailed = expectationFailed;
const imATeapot = (res, params) => ({
    httpCode: 418,
    httpMessage: 'I\'m a teapot',
    httpDescription: 'Any attempt to brew coffee with a teapot should result in the error code 418 I\'m a teapot.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.imATeapot = imATeapot;
const unprocessableEntity = (res, params) => ({
    httpCode: 422,
    httpMessage: 'Unprocessable Entity',
    httpDescription: 'means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.unprocessableEntity = unprocessableEntity;
const locked = (res, params) => ({
    httpCode: 423,
    httpMessage: 'Locked',
    httpDescription: 'means the source or destination resource of a method is locked.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.locked = locked;
const failedDependency = (res, params) => ({
    httpCode: 424,
    httpMessage: 'Failed Dependency',
    httpDescription: 'means that the method could not be performed on the resource because the requested action depended on another action and that action failed.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.failedDependency = failedDependency;
const upgradeRequired = (res, params) => ({
    httpCode: 426,
    httpMessage: 'Upgrade Required',
    httpDescription: 'indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.upgradeRequired = upgradeRequired;
const preconditionRequired = (res, params) => ({
    httpCode: 428,
    httpMessage: 'Precondition Required',
    httpDescription: 'indicates that the origin server requires the request to be conditional.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.preconditionRequired = preconditionRequired;
const tooManyRequests = (res, params) => ({
    httpCode: 429,
    httpMessage: 'Too Many Requests',
    httpDescription: 'indicates that the user has sent too many requests in a given amount of time (rate limiting).',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.tooManyRequests = tooManyRequests;
const requestHeaderFieldsTooLarge = (res, params) => ({
    httpCode: 431,
    httpMessage: 'Request Header Fields Too Large',
    httpDescription: 'indicates that the server is unwilling to process the request because its header fields are too large.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.requestHeaderFieldsTooLarge = requestHeaderFieldsTooLarge;
const unavailableForLegalReasons = (res, params) => ({
    httpCode: 451,
    httpMessage: 'Unavailable For Legal Reasons',
    httpDescription: 'This status code indicates that the server is denying access to the resource in response to a legal demand.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.unavailableForLegalReasons = unavailableForLegalReasons;
const internalServerError = (res, params) => ({
    httpCode: 500,
    httpMessage: 'Internal Server Error',
    httpDescription: 'indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.internalServerError = internalServerError;
const notImplemented = (res, params) => ({
    httpCode: 501,
    httpMessage: 'Not Implemented',
    httpDescription: 'indicates that the server does not support the functionality required to fulfill the request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.notImplemented = notImplemented;
const badGateway = (res, params) => ({
    httpCode: 502,
    httpMessage: 'Bad Gateway',
    httpDescription: 'indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.badGateway = badGateway;
const serviceUnavailable = (res, params) => ({
    httpCode: 503,
    httpMessage: 'Service Unavailable',
    httpDescription: 'indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.serviceUnavailable = serviceUnavailable;
const gatewayTimeOut = (res, params) => ({
    httpCode: 504,
    httpMessage: 'Gateway Time-out',
    httpDescription: 'indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.gatewayTimeOut = gatewayTimeOut;
const httpVersionNotSupported = (res, params) => ({
    httpCode: 505,
    httpMessage: 'HTTP Version Not Supported',
    httpDescription: 'indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.httpVersionNotSupported = httpVersionNotSupported;
const variantAlsoNegotiates = (res, params) => ({
    httpCode: 506,
    httpMessage: 'Variant Also Negotiates',
    httpDescription: 'indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.variantAlsoNegotiates = variantAlsoNegotiates;
const insufficientStorage = (res, params) => ({
    httpCode: 507,
    httpMessage: 'Insufficient Storage',
    httpDescription: 'means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.insufficientStorage = insufficientStorage;
const networkAuthenticationRequired = (res, params) => ({
    httpCode: 511,
    httpMessage: 'Network Authentication Required',
    httpDescription: 'indicates that the client needs to authenticate to gain network access.',
    bizLogicCode: params === null || params === void 0 ? void 0 : params.code,
    bizLogicMessage: (params === null || params === void 0 ? void 0 : params.key) ? res.__(params.key) : '',
});
exports.networkAuthenticationRequired = networkAuthenticationRequired;
const RESTFul = {
    continueProcessing: exports.continueProcessing,
    switchingProtocols: exports.switchingProtocols,
    processing: exports.processing,
    ok: exports.ok,
    created: exports.created,
    accepted: exports.accepted,
    nonAuthoritativeInformation: exports.nonAuthoritativeInformation,
    noContent: exports.noContent,
    resetContent: exports.resetContent,
    partialContent: exports.partialContent,
    multiStatus: exports.multiStatus,
    imUsed: exports.imUsed,
    multipleChoices: exports.multipleChoices,
    movedPermanently: exports.movedPermanently,
    found: exports.found,
    seeOther: exports.seeOther,
    notModified: exports.notModified,
    useProxy: exports.useProxy,
    temporaryRedirect: exports.temporaryRedirect,
    permanentRedirect: exports.permanentRedirect,
    badRequest: exports.badRequest,
    unauthorized: exports.unauthorized,
    paymentRequired: exports.paymentRequired,
    forbidden: exports.forbidden,
    notFound: exports.notFound,
    methodNotAllowed: exports.methodNotAllowed,
    notAcceptable: exports.notAcceptable,
    proxyAuthenticationRequired: exports.proxyAuthenticationRequired,
    requestTimeout: exports.requestTimeout,
    conflict: exports.conflict,
    gone: exports.gone,
    lengthRequired: exports.lengthRequired,
    preconditionFailed: exports.preconditionFailed,
    payloadTooLarge: exports.payloadTooLarge,
    uriTooLong: exports.uriTooLong,
    unsupportedMediaType: exports.unsupportedMediaType,
    rangeNotSatisfiable: exports.rangeNotSatisfiable,
    expectationFailed: exports.expectationFailed,
    imATeapot: exports.imATeapot,
    unprocessableEntity: exports.unprocessableEntity,
    locked: exports.locked,
    failedDependency: exports.failedDependency,
    upgradeRequired: exports.upgradeRequired,
    preconditionRequired: exports.preconditionRequired,
    tooManyRequests: exports.tooManyRequests,
    requestHeaderFieldsTooLarge: exports.requestHeaderFieldsTooLarge,
    unavailableForLegalReasons: exports.unavailableForLegalReasons,
    internalServerError: exports.internalServerError,
    notImplemented: exports.notImplemented,
    badGateway: exports.badGateway,
    serviceUnavailable: exports.serviceUnavailable,
    gatewayTimeOut: exports.gatewayTimeOut,
    httpVersionNotSupported: exports.httpVersionNotSupported,
    variantAlsoNegotiates: exports.variantAlsoNegotiates,
    insufficientStorage: exports.insufficientStorage,
    networkAuthenticationRequired: exports.networkAuthenticationRequired,
};
exports.default = RESTFul;
