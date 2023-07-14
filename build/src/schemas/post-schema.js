"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostSchema = exports.deletePostSchema = exports.updatePostSchema = exports.createPostSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *   schema:
 *     Post:
 *       type: object
 *       required:
 *        - content
 *       properties:
 *         title:
 *           type: string
 */
const body = (0, zod_1.object)({
    content: (0, zod_1.string)({
        required_error: 'Content is required',
    })
});
const params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: 'Post id is required',
    }),
});
exports.createPostSchema = (0, zod_1.object)({
    body,
});
exports.updatePostSchema = (0, zod_1.object)({
    body,
    params
});
exports.deletePostSchema = (0, zod_1.object)({
    params
});
exports.getPostSchema = (0, zod_1.object)({
    params
});
