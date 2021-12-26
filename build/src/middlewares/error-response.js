'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
exports.errorResponse = void 0;
const logger_1 = __importDefault(require('../utils/logger'));
const errorResponse = (err, req, res, next) => {
    logger_1.default.error(err);
    res.status(err.code || 500).json({
        type: err.constructor.name,
        code: err.code || 500,
        message: err.message,
        stack: err.stack
    });
};
exports.errorResponse = errorResponse;
exports.default = exports.errorResponse;
