import {DemoThunkEntity} from '../entities';
import {FindOptionsWhere} from 'typeorm';
import {serviceProfile} from '../helpers';

export async function createDemoThunk(input: Partial<DemoThunkEntity>) {
    const post = DemoThunkEntity.create(input);
    return await serviceProfile('createDemoThunk', async () => await DemoThunkEntity.save(post));
}

export async function findDemoThunk(
    query: Pick<FindOptionsWhere<DemoThunkEntity>, 'id'>
) {
    return await serviceProfile('findDemoThunk', async () => await DemoThunkEntity.findOneBy(query));
}

export async function findAndUpdateDemoThunk(query: Pick<DemoThunkEntity, 'id'>, update: Partial<DemoThunkEntity>) {
    return await serviceProfile('findAndUpdateDemoThunk', async () => await DemoThunkEntity.save({...update, ...query} as DemoThunkEntity));
}

export async function deleteDemoThunk(query: Pick<DemoThunkEntity, 'id'>) {
    return await serviceProfile('deleteDemoThunk', async () => await DemoThunkEntity.delete({...query}))
}

export async function findDemoThunks(query: Partial<{ from: number, offset: number }>) {
    const {from, offset} = query;
    return await serviceProfile('findDemoThunks', async () => DemoThunkEntity.find());
}
