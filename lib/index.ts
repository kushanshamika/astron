import * as express from 'express';
import * as config from 'config';
import { proxy } from './proxy';

const app = express();
const PORT: number = config.get('app.port');

proxy(app);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
