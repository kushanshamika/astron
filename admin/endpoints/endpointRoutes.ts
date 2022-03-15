import { addNewEndpoint, designEndpoint, getEndpoints } from './endpointController';

const endpointRoutes = (app) => {
  app.route('/admin/endpoint').get(getEndpoints).post(addNewEndpoint);
  app.route('/admin/endpoint/:id/design').put(designEndpoint);
};

export default endpointRoutes;
