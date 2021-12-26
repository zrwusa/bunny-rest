'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
exports.StringUtil = void 0;
const lodash_1 = __importDefault(require('lodash'));

class StringUtil {
    // camelCase
    static toCamelCase(str) {
        return lodash_1.default.camelCase(str);
    }

    // snake_case
    static toSnakeCase(str) {
        return lodash_1.default.snakeCase(str);
    }

    // PascalCase
    static toPascalCase(str) {
        return lodash_1.default.startCase(lodash_1.default.camelCase(str)).replace(/ /g, '');
    }

    // CONSTANT_CASE
    static toConstantCase(str) {
        return lodash_1.default.upperCase(str).replace(/ /g, '_');
    }

    // kebab-case
    static toKebabCase(str) {
        return lodash_1.default.kebabCase(str);
    }

    // lowercase
    static toLowerCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '');
    }

    // Title Case
    static toTitleCase(str) {
        return lodash_1.default.startCase(lodash_1.default.camelCase(str));
    }

    // Sentence case
    static toSentenceCase(str) {
        return lodash_1.default.upperFirst(lodash_1.default.lowerCase(str));
    }

    // path/case
    static toPathCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '/');
    }

    // dot.case
    static toDotCase(str) {
        return lodash_1.default.lowerCase(str).replace(/ /g, '.');
    }
}

exports.StringUtil = StringUtil;
