import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'HOME'
  }

  render() {
    return (<View style={styles.container}>
            <Text
            style={styles.text}>Hey There!</Text>
           </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 30
  }
})
