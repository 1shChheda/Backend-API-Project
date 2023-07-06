const winston = require('winston');
const { format, transports, createLogger } = winston;
const fs = require('fs');
const path = require('path');

// to get the current date in the format DD-MM-YYYY
const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
};

// to create the main logs folder if it doesn't exist
const logsFolder = path.join(__dirname, 'logs');
if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
}

// to create a subfolder for the current date
const createLogsSubfolder = () => {
    const currentDate = getCurrentDate();
    const subfolderPath = path.join(logsFolder, currentDate);

    if (!fs.existsSync(subfolderPath)) {
        fs.mkdirSync(subfolderPath);
    }

    return subfolderPath;
};

const loggerAllTransports = [
    new transports.File({
        level: 'info',
        filename: path.join(createLogsSubfolder(), 'allLogs.log'),
    }),
];

const loggerErrorTransports = [
    new transports.File({
        level: 'error',
        filename: path.join(createLogsSubfolder(), 'errorLogs.log'),
    }),
];

const loggerWarnTransports = [
    new transports.File({
        level: 'warn',
        filename: path.join(createLogsSubfolder(), 'warnLogs.log'),
    }),
];

if (process.env.NODE_ENV !== 'production') {
    loggerAllTransports.push(new transports.Console());
    loggerErrorTransports.push(new transports.Console());
    loggerWarnTransports.push(new transports.Console());
}

// To log the timestamp in our local time format (i.e. in IST)
const formatTimestamp = format((info, opts) => {
    if (opts && opts.timezone) {
        info.timestamp = new Date().toLocaleString('en-US', { timeZone: opts.timezone });
    }
    return info;
});

const allLogger = createLogger({
    transports: loggerAllTransports,
    format: format.combine(formatTimestamp({ timezone: 'Asia/Kolkata' }), format.json(), format.prettyPrint()),
});

const errorLogger = createLogger({
    transports: loggerErrorTransports,
    format: format.combine(formatTimestamp({ timezone: 'Asia/Kolkata' }), format.json(), format.prettyPrint()),
});

const warnLogger = createLogger({
    transports: loggerWarnTransports,
    format: format.combine(formatTimestamp({ timezone: 'Asia/Kolkata' }), format.json(), format.prettyPrint()),
});

module.exports = {
    allLogger,
    errorLogger,
    warnLogger,
};