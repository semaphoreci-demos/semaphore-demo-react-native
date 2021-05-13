import HomeScreen from 'screens/HomeScreen';
import SearchScreen from 'screens/SearchScreen';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.HOME]: {
    ...routeConfigs[routeNames.HOME],
    screen: HomeScreen,
  },
  [routeNames.SEARCH]: {
    ...routeConfigs[routeNames.SEARCH],
    screen: SearchScreen,
  },
};

export default routes;
