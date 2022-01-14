import logger from 'pino';
import dayjs from 'dayjs';

export default logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});
