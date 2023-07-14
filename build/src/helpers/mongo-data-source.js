"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDS = void 0;
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const url = config_1.default.get('MONGO_DB_URI');
exports.MongoDS = new typeorm_1.DataSource({
    // name: 'mongodb_connection',
    type: 'mongodb',
    url,
    // namingStrategy: new SnakeNamingStrategy(),
    // entities: [User, Order, Address, Product, GraphqlDemo, Post],
    // synchronize: true,
    // logging: ['error', 'warn'],
    // subscribers: [],
    // migrations: [],
});
