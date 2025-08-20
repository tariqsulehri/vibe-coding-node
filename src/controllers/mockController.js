import * as mockService from '../services/mockService.js';

/**
 * Controller: respond with generated fake users.
 *
 * @param {import('express').Request} req - Express request object. Accepts `query.count`.
 * @param {import('express').Response} res - Express response object.
 * @returns {void}
 */
export const getFakeUsers = async (req, res) => {
  const count = Math.max(1, Math.min(100, Number(req.query.count) || 10));
  const users = mockService.generateUsers(count);
  res.json({ ok: true, count: users.length, users });
};
