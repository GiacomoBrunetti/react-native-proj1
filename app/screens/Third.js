import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class ThirdScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'THIRD'
  }
  render () {
  return <View
          style={styles.container}>
            <Text style={styles.text}>
            This is the Third Screen!
            </Text>
          </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 30
  }
})
