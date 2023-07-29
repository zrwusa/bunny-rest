import {Express, Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {name, version} from '../../package.json';
import {logger} from './logger';

export function startSwaggerDocs(app: Express, port: number) {
    const options: swaggerJsdoc.Options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: `${name} API Docs`,
                version,
            },
            components: {
                securitySchemas: {
                    bearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
            security: [
                {
                    bearerAuth: [],
                },
            ],
        },
        apis: ['./src/openapi/**/*.yaml'],
    };

    const swaggerSpec = swaggerJsdoc(options);

    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get('/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        return res.send(swaggerSpec);
    });

    logger.info(`Swagger Docs Server started http://localhost:${port}/docs`);
}