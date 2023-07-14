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
exports.startApollo = void 0;
const apollo_server_1 = require("apollo-server");
const graphql_demo_schema_1 = require("../schemas/graphql-demo-schema");
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("config"));
const postgres_data_source_1 = require("./postgres-data-source");
const startApollo = () => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = config_1.default.get('APOLLO_PORT');
    const apolloServer = new apollo_server_1.ApolloServer({
        schema: graphql_demo_schema_1.graphqlDemoSchema,
        context: postgres_data_source_1.PgDS
    });
    try {
        const server = yield apolloServer.listen(PORT);
        logger_1.default.info(`Successfully started Apollo Server ${server.url}`);
    }
    catch (err) {
        logger_1.default.error('Could not start Apollo Server');
        logger_1.default.error(err);
    }
});
exports.startApollo = startApollo;
