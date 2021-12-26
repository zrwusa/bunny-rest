'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const config_1 = __importDefault(require('config'));
const logger_1 = __importDefault(require('./utils/logger'));
const connect_1 = __importDefault(require('./utils/connect'));
const response_time_1 = __importDefault(require('response-time'));
const metrics_1 = require('./utils/metrics');
const swagger_1 = __importDefault(require('./utils/swagger'));
const deserialize_user_1 = __importDefault(require('./middlewares/deserialize-user'));
const base_router_1 = __importDefault(require('./routers/base-router'));
const errors_1 = require('./utils/errors');
const error_response_1 = __importDefault(require('./middlewares/error-response'));
dotenv_1.default.config();
const port = config_1.default.get('port');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(deserialize_user_1.default);
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
app.use(base_router_1.default);
app.all('*', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // in an async function we must use next(error) instead of throw syntax
    next(new errors_1.NotFoundError('Not found'));
}));
app.use(error_response_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`App is running at http://localhost:${port}`);
    yield (0, connect_1.default)();
    (0, metrics_1.startMetricsServer)();
    (0, swagger_1.default)(app, port);
}));
