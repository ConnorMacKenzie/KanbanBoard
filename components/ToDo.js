import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ToDo extends React.Component {
  render() {
    return (
      <View style={styles.view_container}>
        <Text style={styles.normal_text}>To do:</Text>
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
