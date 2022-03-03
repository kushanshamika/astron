import * as express from 'express';
import * as config from 'config';
import * as bodyParser from 'body-parser';

import { proxy } from './proxy';

const app = express();
const PORT: number = config.get('app.port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

proxy(app);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
