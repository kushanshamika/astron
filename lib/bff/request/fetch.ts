import axios from 'axios';

export async function fetch(actionObj, bffResponse) {
  const response = await axios.get(actionObj['url']);

  if (actionObj['action'] === 'merge') {
    if (actionObj['key']) {
      bffResponse[actionObj['key']] = response.data;
    } else {
      bffResponse = { ...bffResponse, ...response.data };
    }
  }

  return bffResponse;
}
