import React from 'react';
import { View } from 'react-native';
import Header from './components/Header.js';
import Options from './components/Options.js'
import ToDo from './components/ToDo.js'
import InProgress from './components/InProgress.js';
import Completed from './components/Completed.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <Options/>
        <ToDo/>
        <InProgress/>
        <Completed/>
      </View>
    );
  }
}
