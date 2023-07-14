"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConnect = exports.redisClient = void 0;
const redis_1 = require("redis");
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./logger"));
const url = config_1.default.get('REDIS_URI');
exports.redisClient = (0, redis_1.createClient)({
    url
});
function redisConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.redisClient.connect();
            logger_1.default.info(`Successfully connected to Redis ${url}`);
        }
        catch (err) {
            logger_1.default.error('Could not connect to Redis');
            logger_1.default.error(err);
        }
    });
}
exports.redisConnect = redisConnect;
exports.default = exports.redisClient;
