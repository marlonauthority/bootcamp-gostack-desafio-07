/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      <Routes />
    </>
  );
};

export default App;
