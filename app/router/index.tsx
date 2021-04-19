// import isEqual from 'lodash/isEqual';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from './routes';
import {HOME} from './routeNames';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME}>
      {Object.keys(routes).map(routeKey => (
        <React.Fragment key={routeKey}>
          <Stack.Screen name={routeKey} component={routes[routeKey].screen} />
        </React.Fragment>
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
