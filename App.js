import React from 'react';
import {StatusBar} from 'react-native';
import {HomeScreen} from './src/screens';
import RootNavigator from './src/navigation/index';

export default function App() {
  return (
    <>
      {/* <StatusBar barStyle={"light-content"}/> */}
      {/* <HomeScreen /> */}
      <RootNavigator/>
    </>
  );
}
