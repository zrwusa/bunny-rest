"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("./common-entity");
const user_entity_1 = require("./user-entity");
var AddressCate;
(function (AddressCate) {
    AddressCate["HOME"] = "HOME";
    AddressCate["WORK"] = "WORK";
    AddressCate["SCHOOL"] = "SCHOOL";
})(AddressCate || (AddressCate = {}));
let Address = exports.Address = class Address extends common_entity_1.CommonEntity {
    constructor() {
        super(...arguments);
        this.category = AddressCate.HOME;
    }
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Address.prototype, "lineA", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Address.prototype, "lineB", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Address.prototype, "lineC", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int4',
    })
], Address.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AddressCate,
    })
], Address.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.addresses, 
    // CASCADE means delete foreign data while main data is being deleted,
    // otherwise you can use other options
    {
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id'
    })
], Address.prototype, "user", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)('address')
], Address);
