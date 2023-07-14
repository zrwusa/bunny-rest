"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("./common-entity");
const product_entity_1 = require("./product-entity");
let Order = exports.Order = class Order extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'numeric',
    })
], Order.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Order.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int4',
    })
], Order.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Product, {
        // cascade: true means delete connected data while main data is being deleted
        cascade: true
    }),
    (0, typeorm_1.JoinTable)({
        name: 'orders_products',
        joinColumn: {
            name: 'order',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'product',
            referencedColumnName: 'id'
        }
    })
], Order.prototype, "products", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)('order')
], Order);
