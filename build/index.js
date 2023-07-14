"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
if (process.env.DOCKER_DEV !== 'yes') {
    const result = dotenv_flow_1.default.config();
    if (result.error) {
        console.error(result.error);
    }
}
require("./src/app");
