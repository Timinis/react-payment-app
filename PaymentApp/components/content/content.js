import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './home/home.js';
import FriendsList from './friends-list/friends-list.js';

const Content = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home Page',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#bf24e2" />
        )
      }
    },
    FriendsList: {
      screen: FriendsList,
      navigationOptions: {
        tabBarLabel: 'Friends List',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={30} color="#bf24e2" />
        )
      }
    }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeBackgroundColor: '#FFFFFF',
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

export default createAppContainer(Content);
