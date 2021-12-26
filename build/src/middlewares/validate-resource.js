'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const validate = (schema) => (req, res, next) => {
    const {body, query, params} = req;
    try {
        schema.parse({
            body: body,
            query: query,
            params: params,
        });
        next();
    } catch (e) {
        // todo 400?
        return res.status(400).send(e.errors);
    }
};
exports.default = validate;
