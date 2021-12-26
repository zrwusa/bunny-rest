'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const mongoose_1 = __importDefault(require('mongoose'));
const nanoid_1 = require('nanoid');
const nanoid = (0, nanoid_1.customAlphabet)('abcdefghijklmnopqrstuvwxyz0123456789', 10);
const productSchema = new mongoose_1.default.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`,
    },
    user: {type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
}, {
    timestamps: true,
});
const ProductModel = mongoose_1.default.model('Product', productSchema);
exports.default = ProductModel;
