"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_1 = require("../helpers/protocol");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const validateRequest = (schema) => (req, res, next) => {
    const { body, query, params } = req;
    try {
        schema.parse({
            body: body,
            query: query,
            params: params,
        });
        next();
    }
    catch (e) {
        // const err: any = new UnprocessableEntityError();
        // const status = err.code || err.statusCode;
        // let statusCode = parseInt(status);
        //
        // return res.status(statusCode).send({
        //     type: err.constructor.name,
        //     code: status && status.toString() || 'unknown',
        //     message: e.errors,
        //     stack: err.stack
        // });
        return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unprocessableEntity(res), e.errors);
    }
};
exports.default = validateRequest;
