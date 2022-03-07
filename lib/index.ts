import * as express from 'express';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { proxy } from './proxy';
import endpointRoute from '../admin/endpoints/endpointRoutes';

const app = express();
const PORT: number = config.get('app.port');

mongoose.connect('mongodb://astron:astron@localhost:27017/astron');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

endpointRoute(app);

proxy(app);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
