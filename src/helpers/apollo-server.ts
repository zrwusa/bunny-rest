import {ApolloServer} from 'apollo-server';
import {graphqlDemoSchema} from '../schemas/graphql-demo-schema';
import logger from './logger';
import config from 'config';
import {Connection} from 'typeorm';

export const startApollo = async (pgConn: Connection | undefined) => {
    const PORT = config.get<string>('APOLLO_PORT');

    const apolloServer = new ApolloServer({
        schema: graphqlDemoSchema,
        context: pgConn
    });

    try {
        const server = await apolloServer.listen(PORT);
        logger.info(`Successfully started Apollo Server ${server.url}`);
    } catch (err) {
        logger.error('Could not start Apollo Server');
        logger.error(err);
    }
}