import * as config from 'config';

export const routes: Array<{}> = config.get('apiEndpoints') || [];
