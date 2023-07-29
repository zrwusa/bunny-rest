import {PostEntity} from '../entities';
import {FindOptionsWhere} from 'typeorm';
import {serviceProfile} from '../helpers';

export async function createPost(input: Partial<PostEntity>) {
    const post = PostEntity.create(input);
    return await serviceProfile('createPost', async () => await PostEntity.save(post));
}

export async function findPost(query: Pick<FindOptionsWhere<PostEntity>, 'id'>) {
    return await serviceProfile('findPost', async () => await PostEntity.findOneBy(query))
}

export async function findAndUpdatePost(query: Pick<PostEntity, 'id'>, update: Partial<PostEntity>) {
    return await serviceProfile('findAndUpdatePost', async () => await PostEntity.save({...update, ...query} as PostEntity));
}

export async function deletePost(query: Pick<PostEntity, 'id'>) {
    return await serviceProfile('deletePost', async () => await PostEntity.delete({...query}));
}

export async function findPosts(query: Partial<{ from: number, offset: number }>) {
    const {from, offset} = query;
    return await serviceProfile('findPosts', async () => await PostEntity.find());
}