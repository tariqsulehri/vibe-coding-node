const levels = ['error', 'warn', 'info', 'debug'];
const configured = process.env.LOG_LEVEL || 'info';

const logger = {
  error: (msg, meta) => {
    if (levels.indexOf('error') <= levels.indexOf(configured)) console.error(build('error', msg, meta));
  },
  warn: (msg, meta) => {
    if (levels.indexOf('warn') <= levels.indexOf(configured)) console.warn(build('warn', msg, meta));
  },
  info: (msg, meta) => {
    if (levels.indexOf('info') <= levels.indexOf(configured)) console.log(build('info', msg, meta));
  },
  debug: (msg, meta) => {
    if (levels.indexOf('debug') <= levels.indexOf(configured)) console.debug(build('debug', msg, meta));
  }
};

function build(level, msg, meta) {
  const base = { timestamp: new Date().toISOString(), level, message: msg };
  if (meta) base.meta = meta;
  try { return JSON.stringify(base); } catch (err) { return String(base); }
}

export default logger;
