import _ from 'lodash';

export class StringUtil {
    /**
     * @return camelCase
     * @param str
     */
    static toCamelCase(str: string) {
        return _.camelCase(str);
    }

    /**
     * @return snake_case
     * @param str
     */
    static toSnakeCase(str: string) {
        return _.snakeCase(str);
    }

    /**
     * @return PascalCase
     * @param str
     */
    static toPascalCase(str: string) {
        return _.startCase(_.camelCase(str)).replace(/ /g, '');
    }

    /**
     * @return CONSTANT_CASE
     * @param str
     */
    static toConstantCase(str: string) {
        return _.upperCase(str).replace(/ /g, '_');
    }

    /**
     * @return kebab-case
     * @param str
     */
    static toKebabCase(str: string) {
        return _.kebabCase(str);
    }

    /**
     * @return lowercase
     * @param str
     */
    static toLowerCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '');
    }

    /**
     * @return Title Case
     * @param str
     */
    static toTitleCase(str: string) {
        return _.startCase(_.camelCase(str));
    }

    /**
     * @return Sentence case
     * @param str
     */
    static toSentenceCase(str: string) {
        return _.upperFirst(_.lowerCase(str));
    }

    /**
     * @return path/case
     * @param str
     */
    static toPathCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '/');
    }

    /**
     * @return dot.case
     * @param str
     */
    static toDotCase(str: string) {
        return _.lowerCase(str).replace(/ /g, '.');
    }
}
