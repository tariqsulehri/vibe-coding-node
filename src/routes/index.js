import express from 'express';
import os from 'os';
import mockRoutes from './mock.js';

const router = express.Router();

router.use('/mock', mockRoutes);

router.get('/', (req, res) => {
  res.send(`You request is serving from container: ${os.hostname()} | PID: ${process.pid}`);
});
    

router.get('/health', (req, res) => res.json({ staus:"ok", health:"running...." }));

export default router;
