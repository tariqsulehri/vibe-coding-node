import express from 'express';
import mockRoutes from './mock.js';

const router = express.Router();

router.use('/mock', mockRoutes);

router.get('/', (req, res) => res.json({ ok: true, version: '1.0.0' }));

export default router;
