"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("./common-entity");
let Session = exports.Session = class Session extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Session.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
    })
], Session.prototype, "valid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    })
], Session.prototype, "userAgent", void 0);
exports.Session = Session = __decorate([
    (0, typeorm_1.Entity)('session')
], Session);
