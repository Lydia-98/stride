import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Home from './screens/home';
import Cart from './screens/cart';
import ProductDetails from './screens/product details';
import Checkout from './screens/checkout';

export default function App() {
  const nav = createNativeStackNavigator();
  return ( 
    <View style={{flex:1}}>
    <NavigationContainer>

      <nav.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">

        <nav.Screen name="Login" component={Login}/>
        <nav.Screen name="Home" component={Home}/>
        <nav.Screen name="Cart" component={Cart}/>
        <nav.Screen name="ProductDetails" component={ProductDetails}/>
        <nav.Screen name="Checkout" component={ Checkout}/>

      </nav.Navigator>

    </NavigationContainer>
    </View>
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
