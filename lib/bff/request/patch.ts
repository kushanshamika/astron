import axios from 'axios';
import * as _ from 'lodash';

export async function JSONPatch(actionObj, bffResponse, req) {
  let requestBody = undefined;

  if (_.get(actionObj, 'body', undefined)) {
    requestBody = _.pick(req.body, actionObj['body']);
  }

  const response = await axios[actionObj['action']](actionObj['url'], requestBody);

  if (actionObj['response']['action'] === 'merge') {
    if (actionObj['response']['key']) {
      bffResponse[actionObj['response']['key']] = response.data;
    } else {
      bffResponse = { ...bffResponse, ...response.data };
    }
  }

  return bffResponse;
}
