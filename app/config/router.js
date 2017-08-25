import React from 'react';
import { AppRegistry, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Second from '../screens/Second'
import Third from '../screens/Third'

export const Navbar = TabNavigator({
  Home: {
          screen: Home
  },
  Second: {
        screen: Second
  },
  Third: {
    screen: Third
  }
}, {
  tabBarPosition: 'top',
  scrollEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    style: {
      backgroundColor: '#000',
      paddingTop: (Platform.OS==='ios') ? 0 : 23,
      marginTop: (Platform.OS==='ios') ? 17 : 0,
    },
    labelStyle: (Platform.OS==='ios' ? { marginBottom: 17 } : {}),
    // iOS
    activeBackgroundColor: '#000',
    inactiveBackgroundColor: '#000',

    // Android
    indicatorStyle: {
      backgroundColor: '#fff'
    },
  }
})

AppRegistry.registerComponent('Navbar', () => Navbar)
