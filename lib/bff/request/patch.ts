import axios from 'axios';

export async function JSONPatch(actionObj, bffResponse, req) {
  const response = await axios[actionObj['action']](actionObj['url'], req.body);

  if (actionObj['action'] === 'merge') {
    if (actionObj['key']) {
      bffResponse[actionObj['key']] = response.data;
    } else {
      bffResponse = { ...bffResponse, ...response.data };
    }
  }

  console.log(bffResponse);

  return response.data;
}
