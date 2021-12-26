'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const user_controller_1 = require('../controllers/user-controller');
const validate_resource_1 = __importDefault(require('../middlewares/validate-resource'));
const user_schema_1 = require('../schemas/user-schema');
const session_schema_1 = require('../schemas/session-schema');
const session_controller_1 = require('../controllers/session-controller');
const require_user_1 = __importDefault(require('../middlewares/require-user'));
const product_schema_1 = require('../schemas/product-schema');
const product_controller_1 = require('../controllers/product-controller');
const router = express_1.default.Router();
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
router.get('/ping', (req, res) => res.status(200).send('pong'));
/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
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
router.post('/api/users', (0, validate_resource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
/**
 * @openapi
 * '/api/sessions':
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
router.post('/api/sessions', (0, validate_resource_1.default)(session_schema_1.createSessionSchema), session_controller_1.createUserSessionHandler);
router.get('/api/sessions', require_user_1.default, session_controller_1.getUserSessionsHandler);
router.delete('/api/sessions', require_user_1.default, session_controller_1.deleteSessionHandler);
router.post('/api/products', [require_user_1.default, (0, validate_resource_1.default)(product_schema_1.createProductSchema)], product_controller_1.createProductHandler);
router.put('/api/products/:productId', [require_user_1.default, (0, validate_resource_1.default)(product_schema_1.updateProductSchema)], product_controller_1.updateProductHandler);
/**
 * @openapi
 * '/api/products/{productId}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the productId
 *     parameters:
 *      - name: productId
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
router.get('/api/products/:productId', (0, validate_resource_1.default)(product_schema_1.getProductSchema), product_controller_1.getProductHandler);
router.delete('/api/products/:productId', [require_user_1.default, (0, validate_resource_1.default)(product_schema_1.deleteProductSchema)], product_controller_1.deleteProductHandler);
exports.default = router;
