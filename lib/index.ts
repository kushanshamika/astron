import * as express from 'express';
import * as config from 'config';
import exampleProxy from './proxy';

const app = express();
const PORT: number = config.get('app.port');

app.use('/api', exampleProxy);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
