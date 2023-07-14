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
exports.postgresConnect = void 0;
const config_1 = __importDefault(require("config"));
const postgres_data_source_1 = require("./postgres-data-source");
const logger_1 = __importDefault(require("./logger"));
const postgresConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = config_1.default.get('POSTGRES_URI');
        yield postgres_data_source_1.PgDS.initialize();
        logger_1.default.info(`Successfully connected to Postgres ${url}`);
    }
    catch (e) {
        logger_1.default.error('Could not connect to Postgres');
        logger_1.default.error(e);
    }
});
exports.postgresConnect = postgresConnect;
