import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Navbar } from './config/router';
// import  Home  from './screens/Home';
// import  SecondScreen  from './screens/Second';



export default class App extends Component {
  render() {
    return  <View style={styles.app}>
              <StatusBar
              translucent= {true}
              backgroundColor= 'rgba(0,0,0,0.1)'
              />
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
  container: {
    flex: 0,
  },
}
