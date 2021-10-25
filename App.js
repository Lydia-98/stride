import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Home from './screens/home';

export default function App() {
  const nav = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <nav.Navigator>

        <nav.Screen name="Login" component={Login}/>
        <nav.Screen name="Home" component={Home}/>

      </nav.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
