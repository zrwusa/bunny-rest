import {dbRTHistogram} from './metrics';

export const serviceProfile = async (metricLabelObjOrString: {[key: string]: string} | string, fun: () => Promise<any>) => {
    if (typeof metricLabelObjOrString === 'string') metricLabelObjOrString = {operation: metricLabelObjOrString};

    const timer = dbRTHistogram.startTimer();

    try {
        const result = await fun();
        timer({...metricLabelObjOrString, success: 'true'});
        return result;
    } catch (err) {
        timer({...metricLabelObjOrString, success: 'false'});
        throw err;
    }
}