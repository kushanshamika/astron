import axios from 'axios';
import { queryParams } from '../../policies/request-parameters';
import { parameterReplace } from '../../policies/request-parameters/url-parameters';

export async function JSONFetch(actionObj, bffResponse, req) {
  console.log(parameterReplace(actionObj['url'], actionObj['params'], req, bffResponse));

  const response = await axios.get(await parameterReplace(actionObj['url'], actionObj['params'], req, bffResponse), {
    params: await queryParams(actionObj['query'], req, bffResponse),
  });

  if (actionObj['key']) {
    bffResponse[actionObj['key']] = response.data;
  } else {
    bffResponse = { ...bffResponse, ...response.data };
  }

  return bffResponse;
}
