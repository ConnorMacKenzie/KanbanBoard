import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Activity from './Activity.js';

export default class InProgress extends React.Component {
  render() {
    return (
      <View style={styles.view_container}>
        <Text style={styles.normal_text}>In Progress:</Text>
        <Activity text = {"hello"} priority = {1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    minHeight: 130
  },
  normal_text: {
    paddingTop: 10,
    paddingLeft: 10,
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'normal',
  }
});
