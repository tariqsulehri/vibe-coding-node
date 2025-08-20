import logger from '../utils/logger.js';

/**
 * Express error-handling middleware.
 * Logs the error and returns a safe response to the client.
 *
 * @param {Error & {status?: number}} err - The error thrown/forwarded in the app
 * @param {import('express').Request} req - Express request
 * @param {import('express').Response} res - Express response
 * @param {import('express').NextFunction} next - Next middleware (unused)
 */
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const safeMessage = status === 500 ? 'Internal Server Error' : err.message;

  logger.error(safeMessage, { path: req.path, stack: err.stack });

  res.status(status).json({
    ok: false,
    error: safeMessage,
  });
};

export default errorHandler;
