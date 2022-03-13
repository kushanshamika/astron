import { addNewEndpoint, getEndpoints } from './endpointController';

const endpointRoutes = (app) => {
  app.route('/admin/endpoint').get(getEndpoints).post(addNewEndpoint);
};

export default endpointRoutes;
