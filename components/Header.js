import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Kanban Board</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 25,
    height: 75,
    alignItems: 'center',
    backgroundColor: '#D05031',
  },
  header: {
    fontFamily: 'Futura',
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'normal',
  }
});
