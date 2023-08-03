import type {Context} from '../types';

import {extendType, floatArg, nonNull, objectType, stringArg} from 'nexus';
import {NexusGenObjects} from '../schemas';
import {DemoGraphql} from '../entities';

export const demo = objectType({
    name: 'Demo',
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('name')
        t.nonNull.float('price')
    }
});

const demos: NexusGenObjects['Demo'][] = [{
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
            resolve(_parent, _args, _context, _info): Promise<DemoGraphql[]> {
                return DemoGraphql.find();
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
            resolve(_parent, args, context: Context, _info): Promise<DemoGraphql> {
                const {name, price} = args;
                return DemoGraphql.create({name, price}).save();
            }
        })
    }
})