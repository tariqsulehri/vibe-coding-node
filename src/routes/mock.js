import express from 'express';
import { getFakeUsers } from '../controllers/mockController.js';

const router = express.Router();

// GET /api/mock/users
router.get('/users', getFakeUsers);

export default router;
