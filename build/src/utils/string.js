"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = void 0;
const lodash_1 = __importDefault(require("lodash"));
class StringUtil {
    /**
     * @return camelCase
     * @param str
     */
    static toCamelCase(str) {
        return lodash_1.default.camelCase(str);
    }
    /**
     * @return snake_case
     * @param str
     */
    static toSnakeCase(str) {
        return lodash_1.default.snakeCase(str);
    }
    /**
     * @return PascalCase
     * @param str
     */
    static toPascalCase(str) {
        return lodash_1.default.startCase(lodash_1.default.camelCase(str)).replace(/ /g, '');
    }
    /**
     * @return CONSTANT_CASE
     * @param str
     */
    static toConstantCase(str) {
        return lodash_1.default.upperCase(str).replace(/ /g, '_');
    }
    /**
     * @return kebab-case
     * @param str
     */
    static toKebabCase(str) {
        return lodash_1.default.kebabCase(str);
    }
    /**
     * @return lowercase
     * @param str
     */
    static toLowerCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '');
    }
    /**
     * @return Title Case
     * @param str
     */
    static toTitleCase(str) {
        return lodash_1.default.startCase(lodash_1.default.camelCase(str));
    }
    /**
     * @return Sentence case
     * @param str
     */
    static toSentenceCase(str) {
        return lodash_1.default.upperFirst(lodash_1.default.lowerCase(str));
    }
    /**
     * @return path/case
     * @param str
     */
    static toPathCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '/');
    }
    /**
     * @return dot.case
     * @param str
     */
    static toDotCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '.');
    }
}
exports.StringUtil = StringUtil;
