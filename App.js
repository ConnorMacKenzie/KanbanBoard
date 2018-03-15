import React from 'react';
import { View } from 'react-native';
import Header from './components/Header.js';
import ToDo from './components/ToDo.js'
import InProgress from './components/InProgress.js';
import Completed from './components/Completed.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <ToDo/>
        <InProgress/>
        <Completed/>
      </View>
    );
  }
}
