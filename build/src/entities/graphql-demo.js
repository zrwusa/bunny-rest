"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlDemo = void 0;
const typeorm_1 = require("typeorm");
let GraphqlDemo = exports.GraphqlDemo = class GraphqlDemo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], GraphqlDemo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], GraphqlDemo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
    })
], GraphqlDemo.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], GraphqlDemo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], GraphqlDemo.prototype, "updatedAt", void 0);
exports.GraphqlDemo = GraphqlDemo = __decorate([
    (0, typeorm_1.Entity)('graphql_demo')
], GraphqlDemo);
