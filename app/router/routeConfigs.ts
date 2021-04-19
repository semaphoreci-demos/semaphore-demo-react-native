import {HOME, SEARCH} from './routeNames';

const routeConfigs = {
  [SEARCH]: {
    path: '/search',
  },
  [HOME]: {
    path: '/',
    parse: {},
  },
};

export default routeConfigs;
