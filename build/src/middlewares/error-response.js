"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
const logger_1 = __importDefault(require("../helpers/logger"));
const protocol_1 = require("../helpers/protocol");
const rest_maker_1 = require("../helpers/rest-maker");
const errorResponse = (err, req, res, next) => {
    logger_1.default.error(err);
    const status = err.code || err.statusCode;
    (0, protocol_1.wrapSend)(res, Object.assign(Object.assign({}, (0, rest_maker_1.internalServerError)(res)), { errorCode: status, errorMessage: err.message, errorStack: err.stack }));
};
exports.errorResponse = errorResponse;
exports.default = exports.errorResponse;
