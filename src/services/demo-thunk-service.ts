import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {DemoThunkEntity} from '../entities/demo-thunk-entity';
import {FindOptionsWhere} from 'typeorm';

export async function createDemoThunk(input: Partial<DemoThunkEntity>) {
    const metricsLabels = {
        operation: 'createDemoThunk',
    };
    const post = DemoThunkEntity.create(input);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await DemoThunkEntity.save(post);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findDemoThunk(
    query: Pick<FindOptionsWhere<DemoThunkEntity>, 'id'>
) {
    const metricsLabels = {
        operation: 'findDemoThunk',
    };

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await DemoThunkEntity.findOneBy(query);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findAndUpdateDemoThunk(query: Pick<DemoThunkEntity, 'id'>, update: Partial<DemoThunkEntity>) {
    return DemoThunkEntity.save({...update, ...query} as DemoThunkEntity);
}

export async function deleteDemoThunk(query: Pick<DemoThunkEntity, 'id'>) {
    return await DemoThunkEntity.delete({...query});
}

export async function findDemoThunks(query: Partial<{ from: number, offset: number }>) {
    const metricsLabels = {
        operation: 'findDemoThunks',
    };
    const {from, offset} = query;
    const timer = databaseResponseTimeHistogram.startTimer();
    try {

        const posts = DemoThunkEntity.find();
        timer({...metricsLabels, success: 'true'});
        return posts;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}
