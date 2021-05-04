/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {StatusBar} from 'react-native';
// import {enableScreens} from 'react-native-screens';

import Router from './app/router';

// enableScreens();

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
