import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Options extends React.Component {

  doSomething(){
    return;
  }

  render() {
    return (
      <View>
        <View style={styles.header_container}>
          <View style={styles.header_left}>
            <Button onPress={this.doSomething} title="My Boards"/>
          </View>
          <View style={styles.header_right}>
            <Button onPress={this.doSomething} title="Add Task"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#DDDDDD',
  },
  header_left: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10
  },
  header_right: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },
});
