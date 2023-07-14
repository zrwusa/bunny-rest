"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostCtrl = exports.updatePostCtrl = exports.createPostCtrl = exports.getPostsCtrl = void 0;
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const post_service_1 = require("../services/post-service");
// todo can we use Zob schema as the Request type?
function getPostsCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { from, offset } = req.query;
        try {
            const posts = yield (0, post_service_1.findPosts)({ from: parseFloat(from), offset: parseFloat(offset) });
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), posts);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getPostsCtrl = getPostsCtrl;
function createPostCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        try {
            const post = yield (0, post_service_1.createPost)(body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), post);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.createPostCtrl = createPostCtrl;
function updatePostCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { body } = req;
        try {
            const post = yield (0, post_service_1.findPost)({ id });
            if (!post) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            const updatedPost = yield (0, post_service_1.findAndUpdatePost)({ id }, body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), updatedPost);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.updatePostCtrl = updatePostCtrl;
function deletePostCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const post = yield (0, post_service_1.findPost)({ id });
            if (!post) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            const deletedPost = yield (0, post_service_1.deletePost)({ id });
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), deletedPost);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deletePostCtrl = deletePostCtrl;
