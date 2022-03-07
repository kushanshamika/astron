import * as mongoose from 'mongoose';

import { EndpointSchema } from '../../admin/endpoints/endpointModel';

const Endpoint = mongoose.model('Endpoint', EndpointSchema);
let dynamicRoutes = undefined;

export const routes = Endpoint.find({}).lean().exec();
