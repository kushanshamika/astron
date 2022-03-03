import * as _ from 'lodash';

export async function parameterReplace(url, paramsObj, request, bffResponse) {
  if (_.get(paramsObj, 'request_params', undefined)) {
    var params = _.pick(request.params, paramsObj['request_params']);
  }

  if (_.get(paramsObj, 'request_query', undefined)) {
    params = { ...params, ..._.pick(request.query, paramsObj['request_query']) };
  }

  if (_.get(paramsObj, 'response', undefined)) {
    params = { ...params, ..._.pick(bffResponse, paramsObj['response']) };
  }

  console.log(params);

  return url.replace(/\$\(([^\)]+)?\)/g, function ($1, $2) {
    return params[$2];
  });
}
