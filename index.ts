import * as express from 'express';
import * as config from 'config';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();
const PORT: number = config.get('app.port');

app.use('/api', createProxyMiddleware({ target: 'http://localhost:8081/api/auth/me', changeOrigin: true }));

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
