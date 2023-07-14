"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const validate_request_1 = __importDefault(require("../middlewares/validate-request"));
const user_schema_1 = require("../schemas/user-schema");
const session_schema_1 = require("../schemas/session-schema");
const session_controller_1 = require("../controllers/session-controller");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const jwt_auth_1 = __importDefault(require("../middlewares/jwt-auth"));
const product_schema_1 = require("../schemas/product-schema");
const product_controller_1 = require("../controllers/product-controller");
const logger_1 = __importDefault(require("../helpers/logger"));
const order_controller_1 = require("../controllers/order-controller");
const user_addresses_schema_1 = require("../schemas/user-addresses-schema");
const orders_products_schema_1 = require("../schemas/orders-products-schema");
const orders_products_controller_1 = require("../controllers/orders-products-controller");
const order_pruducts_controller_1 = require("../controllers/order-pruducts-controller");
const user_addresses_controller_1 = require("../controllers/user-addresses-controller");
const order_products_schema_1 = require("../schemas/order-products-schema");
const post_controller_1 = require("../controllers/post-controller");
const posts_schema_1 = require("../schemas/posts-schema");
const post_schema_1 = require("../schemas/post-schema");
const routerV1 = express_1.default.Router();
/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Ping
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
routerV1.get('/ping', (req, res) => {
    logger_1.default.info('yeah it ran');
    (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), res.__('PONG'));
});
/**
 * @openapi
 * 'api/v1/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserBody'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
routerV1.post('/users', (0, validate_request_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserCtrl);
routerV1.delete('/users/:id', user_controller_1.deleteUserCtrl);
routerV1.post('/users/:id/addresses', [(0, validate_request_1.default)(user_addresses_schema_1.createUserAddressesSchema), jwt_auth_1.default], user_addresses_controller_1.createUserAddressesCtrl);
/**
 * @openapi
 * 'api/v1/sessions':
 *  post:
 *     tags:
 *     - Session
 *     summary: Create a session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSessionInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSessionResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
routerV1.post('/sessions', (0, validate_request_1.default)(session_schema_1.createSessionSchema), session_controller_1.createUserSessionCtrl);
routerV1.get('/sessions', jwt_auth_1.default, session_controller_1.getUserSessionCtrl);
routerV1.delete('/sessions', jwt_auth_1.default, session_controller_1.deleteSessionCtrl);
routerV1.post('/products', [jwt_auth_1.default, (0, validate_request_1.default)(product_schema_1.createProductSchema)], product_controller_1.createProductCtrl);
routerV1.put('/products/:id', [jwt_auth_1.default, (0, validate_request_1.default)(product_schema_1.updateProductSchema)], product_controller_1.updateProductCtrl);
/**
 * @openapi
 * 'api/v1/products/{id}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Product'
 *       404:
 *         description: Product not found
 */
routerV1.get('/products/:id', [jwt_auth_1.default, (0, validate_request_1.default)(product_schema_1.getProductSchema)], product_controller_1.getProductCtrl);
routerV1.delete('/products/:id', [jwt_auth_1.default, (0, validate_request_1.default)(product_schema_1.deleteProductSchema)], product_controller_1.deleteProductCtrl);
routerV1.post('/orders', [jwt_auth_1.default], order_controller_1.createOrderCtrl);
routerV1.get('/orders', [jwt_auth_1.default], order_controller_1.getOrdersCtrl);
routerV1.delete('/orders/:id', [jwt_auth_1.default], order_controller_1.deleteOrdersCtrl);
routerV1.post('/orders/:id/products', [(0, validate_request_1.default)(order_products_schema_1.createOrderProductsSchema), jwt_auth_1.default], order_pruducts_controller_1.createOrderProductsCtrl);
routerV1.get('/orders/products', [(0, validate_request_1.default)(orders_products_schema_1.getOrdersProductsSchema), jwt_auth_1.default], orders_products_controller_1.getOrdersProductsCtrl);
routerV1.get('/posts', [(0, validate_request_1.default)(posts_schema_1.getPostsSchema)], post_controller_1.getPostsCtrl);
routerV1.delete('/posts/:id', [jwt_auth_1.default, (0, validate_request_1.default)(post_schema_1.deletePostSchema)], post_controller_1.deletePostCtrl);
routerV1.post('/posts', [(0, validate_request_1.default)(post_schema_1.createPostSchema)], post_controller_1.createPostCtrl);
exports.default = routerV1;
