import express from 'express';

const app = express();
app.get('/healthz', (_req, res) => res.json({ status: 'ok' }));
app.listen(8080, '127.0.0.1', () => console.log('资料保留服务监听 :8080'));
