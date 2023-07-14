"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAddressesSchema = void 0;
const zod_1 = require("zod");
const body = (0, zod_1.object)({
    lineA: (0, zod_1.string)({
        required_error: 'Line a is required',
    }),
    lineB: (0, zod_1.string)({
        required_error: 'Line b is required',
    }),
    lineC: (0, zod_1.string)({
        required_error: 'Line c is required',
    }),
    postCode: (0, zod_1.number)({
        required_error: 'Post code is required',
    }),
    category: (0, zod_1.string)({
        required_error: 'Category is required',
    })
});
const params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: 'User id is required',
    }),
});
exports.createUserAddressesSchema = (0, zod_1.object)({
    params,
    body,
});
