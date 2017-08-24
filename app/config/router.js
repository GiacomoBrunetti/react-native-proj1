import React from 'react';
import { AppRegistry } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Second from '../screens/Second'

export const Navbar = TabNavigator({
  Home: {
          screen: Home
  },
  Me: {
        screen: Second
  }
})

AppRegistry.registerComponent('Navbar', () => Navbar)
