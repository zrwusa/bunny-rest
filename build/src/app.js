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
const express_1 = __importDefault(require("express"));
const response_time_1 = __importDefault(require("response-time"));
const metrics_1 = require("./helpers/metrics");
const error_response_1 = __importDefault(require("./middlewares/error-response"));
const router_v1_1 = __importDefault(require("./routes/router-v1"));
const i18n_1 = __importDefault(require("./helpers/i18n"));
const protocol_1 = require("./helpers/protocol");
const rest_maker_1 = __importDefault(require("./helpers/rest-maker"));
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./helpers/logger"));
const redis_client_1 = require("./helpers/redis-client");
const swagger_1 = __importDefault(require("./helpers/swagger"));
const apollo_server_1 = require("./helpers/apollo-server");
const cors_1 = __importDefault(require("cors"));
const postgres_connect_1 = require("./helpers/postgres-connect");
const mongo_connect_1 = require("./helpers/mongo-connect");
const biz_logics_1 = require("./helpers/biz-logics");
const app = (0, express_1.default)();
// for Nginx loading balance
app.enable('trust proxy');
// Front-End with proxy without cors, response header looks like:
// {
//     'access-control-allow-origin': 'http://localhost:3000',
//     'connection': 'close',
//     'content-length': '123',
//     'content-type': 'application/json; charset=utf-8',
//     'date': 'Fri, 14 Jul 2023 07:46:37 GMT',
//     'etag': 'W/"7b-uhZvTda99PSqRJbg0msem2TKZok"',
//     'vary': 'Origin',
//     'x-access-token': 'eyJhbGciOiJSUzI1XXXR5cCI6IkpXVCJ9',
//     'x-powered-by': 'Express',
//     'x-refresh-token': 'eyJhbGciOiJSUzIXXXsInR5cCI6IkpXVCJ9'
// }
// Front-End browsers(Axios) with Back-End cors, response header looks like
// {
//     'content-length': '123',
//     'content-type': 'application/json; charset=utf-8',
//     'x-access-token': 'eyJhbGciOiJSUzI1XXXR5cCI6IkpXVCJ9',
//     'x-refresh-token': 'eyJhbGciOiJSUzIXXXsInR5cCI6IkpXVCJ9'
// }
const origins = config_1.default.get('CORS_ORIGINS');
app.use((0, cors_1.default)({
    origin: origins,
    methods: 'GET, POST, CREATE, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['x-access-token', 'x-refresh-token']
}));
app.use(i18n_1.default.init);
// Enhance i18n to read ts file in order to approach best practice
app.use((req, res, next) => {
    res.__ = function (phrase) {
        const locale = req.getLocale();
        const translation = biz_logics_1.BL[phrase][locale];
        return translation || phrase;
    };
    next();
});
app.use(express_1.default.json());
app.use((0, response_time_1.default)((req, res, time) => {
    var _a;
    if ((_a = req === null || req === void 0 ? void 0 : req.route) === null || _a === void 0 ? void 0 : _a.path) {
        metrics_1.restResponseTimeHistogram.observe({
            method: req.method,
            route: req.route.path,
            status_code: res.statusCode,
        }, time * 1000);
    }
}));
app.use('/api/v1', router_v1_1.default);
app.use(error_response_1.default);
const port = config_1.default.get('PORT');
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`App is running at http://localhost:${port}`);
    yield (0, postgres_connect_1.postgresConnect)();
    yield (0, mongo_connect_1.mongoConnect)();
    yield (0, redis_client_1.redisConnect)();
    yield (0, apollo_server_1.startApollo)();
    (0, metrics_1.startMetricsServer)();
    (0, swagger_1.default)(app, port);
    app.all('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res, biz_logics_1.BL.URL_NOT_FOUND));
    }));
}));
exports.default = app;
