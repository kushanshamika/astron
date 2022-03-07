import { requestModifier } from '../bff';
import { routes } from '../config';

export async function proxy(app) {
  (await routes).forEach((route_obj) => {
    app[route_obj['method']](route_obj['route'], (req, res) => {
      requestModifier(route_obj['actions'], route_obj['method'], req, res);
    });
  });
}
