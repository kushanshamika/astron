import * as request from './request';

export async function requestModifier(actions: Array<object>, method, req, res) {
  var bffResponse = {};
  for (const action of actions) {
    bffResponse = await request[action['method']](action, bffResponse, req);
  }

  res.send(bffResponse);
}
