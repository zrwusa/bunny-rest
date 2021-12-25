import _ from 'lodash';

export class StringUtil {
    // camelCase
    static toCamelCase(str: string) {
        return _.camelCase(str);
    }

    // snake_case
    static toSnakeCase(str: string) {
        return _.snakeCase(str);
    }

    // PascalCase
    static toPascalCase(str: string) {
        return _.startCase(_.camelCase(str)).replace(/ /g, '');
    }

    // CONSTANT_CASE
    static toConstantCase(str: string) {
        return _.upperCase(str).replace(/ /g, '_');
    }

    // kebab-case
    static toKebabCase(str: string) {
        return _.kebabCase(str);
    }

    // lowercase
    static toLowerCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '');
    }

    // Title Case
    static toTitleCase(str: string) {
        return _.startCase(_.camelCase(str));
    }

    // Sentence case
    static toSentenceCase(str: string) {
        return _.upperFirst(_.lowerCase(str));
    }

    // path/case
    static toPathCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '/');
    }

    // dot.case
    static toDotCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '.');
    }
}
