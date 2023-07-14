"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDS = void 0;
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user-entity");
const order_entity_1 = require("../entities/order-entity");
const address_entity_1 = require("../entities/address-entity");
const product_entity_1 = require("../entities/product-entity");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const graphql_demo_1 = require("../entities/graphql-demo");
const post_entity_1 = require("../entities/post-entity");
const url = config_1.default.get('POSTGRES_URI');
exports.PgDS = new typeorm_1.DataSource({
    type: 'postgres',
    url,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    entities: [user_entity_1.User, order_entity_1.Order, address_entity_1.Address, product_entity_1.Product, graphql_demo_1.GraphqlDemo, post_entity_1.Post],
    synchronize: true,
    logging: ['error', 'warn'],
    subscribers: [],
    migrations: [],
});
