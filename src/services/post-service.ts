import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {Post} from '../entities/post-entity';

export async function createPost(input: Partial<Post>) {
    const metricsLabels = {
        operation: 'createPost',
    };
    const post = Post.create(input);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await Post.save(post);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findPost(
    query: Pick<Post, 'id'>
) {
    const metricsLabels = {
        operation: 'findPost',
    };

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await Post.findOne({...query});
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findAndUpdatePost(query: Pick<Post, 'id'>, update: Partial<Post>) {
    return Post.save({...update, ...query} as Post);
}

export async function deletePost(query: Pick<Post, 'id'>) {
    return await Post.delete({...query});
}


export async function findPosts(query: Partial<{ from: number, offset: number }>) {
    const metricsLabels = {
        operation: 'findPosts',
    };
    const {from, offset} = query;
    const timer = databaseResponseTimeHistogram.startTimer();
    try {

        const posts = Post.find();
        timer({...metricsLabels, success: 'true'});
        return posts;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}
