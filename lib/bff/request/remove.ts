import * as _ from 'lodash';

export async function JSONRemove(actionObj, bffResponse) {
  bffResponse = _.omit(bffResponse, actionObj['key']);
  return bffResponse;
}
