import {makeSchema} from 'nexus';
import {join} from 'path';
import * as types from '../graphql';

const cwd = process.cwd();

export const graphqlDemoSchema = makeSchema({
    types,
    outputs: {
        schema: join(cwd, '/src/schemas/schema.graphql'),
        typegen: join(cwd, '/src/schemas/nexus-typegen.ts')
    }
})