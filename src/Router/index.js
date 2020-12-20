import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, HomeScreen, LoginScreen, RegisterScreen} from '../Pages';

const Stack = createStackNavigator();
const hide = {headerShown: false};

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={hide} />
        <Stack.Screen name="Login" component={LoginScreen} options={hide} />
        <Stack.Screen name="Register" component={RegisterScreen} options={hide} />
        <Stack.Screen name="Home" component={HomeScreen} options={hide} />
      </Stack.Navigator>
    );
  }
}
