import {ApolloServer} from 'apollo-server';
import {graphqlDemoSchema} from '../schemas/graphql-demo-schema';
import logger from './logger';
import config from 'config';
import {PgDS} from './postgres-data-source';

export const startApollo = async () => {
    const PORT = config.get<number>('APOLLO_PORT');

    const apolloServer = new ApolloServer({
        schema: graphqlDemoSchema,
        context: PgDS
    });

    try {
        const server = await apolloServer.listen(PORT);
        logger.info(`Apollo Server started ${server.url}`);
    } catch (err) {
        logger.error('Could not start Apollo Server');
        logger.error(err);
    }
}