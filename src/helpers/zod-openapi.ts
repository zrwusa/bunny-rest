import {OpenApiGeneratorV3, OpenAPIRegistry} from '../libs/zod-to-openapi/src';
import fs from 'fs';
import * as yaml from 'yaml';
import config from 'config';

export const openApiRegistry = new OpenAPIRegistry();

export const openApiBearerAuth = openApiRegistry.registerComponent('securitySchemes', 'bearerAuth', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
});

export const security = [{[openApiBearerAuth.name]: []}];

export function getOpenApiDocumentation() {
    const generator = new OpenApiGeneratorV3(openApiRegistry.definitions);
    const OPEN_API_URL = config.get<string>('OPEN_API_URL');
    return generator.generateDocument({
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'Bunny httpStatusMap API',
            description: 'Bunny httpStatusMap API description',
        },
        servers: [{url: OPEN_API_URL}],
    });
}

export function writeDocumentation() {
    // OpenAPI JSON
    const docs = getOpenApiDocumentation();
    fs.writeFileSync(`${process.cwd()}/src/openapi/generated.json`, JSON.stringify(docs), {
        encoding: 'utf-8',
    });

    // YAML equivalent
    const fileContent = yaml.stringify(docs);
    fs.writeFileSync(`${process.cwd()}/src/openapi/generated.yaml`, fileContent, {
        encoding: 'utf-8',
    });
}

