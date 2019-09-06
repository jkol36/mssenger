import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatScreen from './screens/chatScreen';

const AppStack = createStackNavigator({Home: HomeScreen, Chat: ChatScreen})
const AuthStack = createStackNavigator({Login:LoginScreen})

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
},{
  initialRouteName:'AuthLoading',
}))