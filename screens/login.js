import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder="Name" style={{marginBottom: 10}}/>
      <TextInput placeholder="Email"/>
      
      <Button title="Click here" onPress={() => {
          navigation.navigate("Home");
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
