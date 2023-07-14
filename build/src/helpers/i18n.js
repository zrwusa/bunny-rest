"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = void 0;
const i18n_1 = require("i18n");
exports.i18n = new i18n_1.I18n();
exports.i18n.configure({
    locales: ['en', 'zh', 'es'],
    defaultLocale: 'en',
    register: global,
    // directory: path.join(__dirname, '/../locales')
});
exports.default = exports.i18n;
