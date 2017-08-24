import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Navbar } from './config/router';
import  Home  from './screens/Home';
import  SecondScreen  from './screens/Second';


export default class App extends Component {
  render() {
    return  <View style={styles.app}>
              <View style={styles.top}></View>
              <View style={styles.container}>
              </View>
              <Navbar/>
            </View>
  }
}

const styles = {
  app: {
    flex: 1,
  },
  top: {
    height: (Platform.OS==='ios') ? 17 : 24
  },
  container: {
    flex: 0,
  },
}
