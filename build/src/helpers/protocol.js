"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapSend = void 0;
const wrapSend = (res, protocol, resData) => {
    return res.status(protocol.httpCode).send(Object.assign(Object.assign({}, protocol), { resData })).end();
};
exports.wrapSend = wrapSend;
