"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsSchema = void 0;
const zod_1 = require("zod");
const query = (0, zod_1.object)({
    from: (0, zod_1.string)({
        required_error: 'From is required',
    }),
    offset: (0, zod_1.string)({
        required_error: 'Offset is required',
    }),
});
exports.getPostsSchema = (0, zod_1.object)({
    query
});
