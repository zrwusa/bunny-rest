import {extendType, floatArg, nonNull, objectType, stringArg} from 'nexus';
import {NexusGenObjects} from '../schemas/nexus-typegen';
import {GraphqlDemo} from '../entities/graphql-demo';
import {Context} from '../types/context';

export const demo = objectType({
    name: 'Demo',
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('name')
        t.nonNull.float('price')
    }
});

let demos: NexusGenObjects['Demo'][] = [{
    id: 1,
    name: 'Demo name 1',
    price: 12.68
}, {
    id: 2,
    name: 'Demo name 2',
    price: 22.22
}];

export const DemoQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('demos', {
            type: 'Demo',
            resolve(_parent, _args, _context, _info): Promise<GraphqlDemo[]> {
                return GraphqlDemo.find();
            }
        })
    }
});

export const CreateDemoMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createDemo', {
            type: 'Demo',
            args: {
                name: nonNull(stringArg()),
                price: nonNull(floatArg()),
            },
            resolve(_parent, args, context: Context, _info): Promise<GraphqlDemo> {
                const {name, price} = args;
                return GraphqlDemo.create({name, price}).save();
            }
        })
    }
})