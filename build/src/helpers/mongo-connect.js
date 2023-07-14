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
exports.mongoConnect = void 0;
const config_1 = __importDefault(require("config"));
const mongo_data_source_1 = require("./mongo-data-source");
const logger_1 = __importDefault(require("./logger"));
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = config_1.default.get('MONGO_DB_URI');
        yield mongo_data_source_1.MongoDS.initialize();
        logger_1.default.info(`Successfully connected to MongoDB ${url}`);
    }
    catch (e) {
        logger_1.default.error('Could not connect to MongoDB');
        logger_1.default.error(e);
    }
});
exports.mongoConnect = mongoConnect;
