import pino from 'pino';
import * as fs from 'fs';
import * as path from 'path';

const appRoot = process.cwd(), logsDir = path.join(appRoot, 'logs'), logFilePath = path.join(logsDir, 'bunny-rest.log');

if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);
if (!fs.existsSync(logFilePath)) fs.writeFileSync(logFilePath, '');

// There is an issue when using the config.get<>('NODE_ENV'),
// that can cause environment variables messy
const isProduction = process.env.NODE_ENV === 'production';

let logger = pino({
    transport: {
        target: 'pino-pretty'
    },
    base: {
        pid: false,
    },
});

if (isProduction) {
    logger = pino({
        level: 'info',
        timestamp: pino.stdTimeFunctions.isoTime,
    }, pino.destination({dest: logFilePath, sync: true}));
}

export default logger;

export {logger};