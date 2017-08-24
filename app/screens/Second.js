import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class SecondScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Second'
  }
  render () {
  return <View
          style={styles.container}>
            <Text style={styles.text}>
            This is the Second Screen
            </Text>
          </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 30
  }
})
