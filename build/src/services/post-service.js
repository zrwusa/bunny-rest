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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPosts = exports.deletePost = exports.findAndUpdatePost = exports.findPost = exports.createPost = void 0;
const metrics_1 = require("../helpers/metrics");
const post_entity_1 = require("../entities/post-entity");
function createPost(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'createPost',
        };
        const post = post_entity_1.Post.create(input);
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield post_entity_1.Post.save(post);
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return result;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.createPost = createPost;
function findPost(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'findPost',
        };
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield post_entity_1.Post.findOneBy(query);
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return result;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.findPost = findPost;
function findAndUpdatePost(query, update) {
    return __awaiter(this, void 0, void 0, function* () {
        return post_entity_1.Post.save(Object.assign(Object.assign({}, update), query));
    });
}
exports.findAndUpdatePost = findAndUpdatePost;
function deletePost(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield post_entity_1.Post.delete(Object.assign({}, query));
    });
}
exports.deletePost = deletePost;
function findPosts(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'findPosts',
        };
        const { from, offset } = query;
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const posts = post_entity_1.Post.find();
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return posts;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.findPosts = findPosts;
