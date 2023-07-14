"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDemoMutation = exports.DemoQuery = exports.demo = void 0;
const nexus_1 = require("nexus");
const graphql_demo_1 = require("../entities/graphql-demo");
exports.demo = (0, nexus_1.objectType)({
    name: 'Demo',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.float('price');
    }
});
let demos = [{
        id: 1,
        name: 'Demo name 1',
        price: 12.68
    }, {
        id: 2,
        name: 'Demo name 2',
        price: 22.22
    }];
exports.DemoQuery = (0, nexus_1.extendType)({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('demos', {
            type: 'Demo',
            resolve(_parent, _args, _context, _info) {
                return graphql_demo_1.GraphqlDemo.find();
            }
        });
    }
});
exports.CreateDemoMutation = (0, nexus_1.extendType)({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createDemo', {
            type: 'Demo',
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                price: (0, nexus_1.nonNull)((0, nexus_1.floatArg)()),
            },
            resolve(_parent, args, context, _info) {
                const { name, price } = args;
                return graphql_demo_1.GraphqlDemo.create({ name, price }).save();
            }
        });
    }
});
