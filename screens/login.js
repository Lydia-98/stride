import React from 'react';
import { View,Text,Image, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1,justifyContent:"center",alignItems:"center"}} >
      <Image 
      style={{
        width:300,
        height:200,
        borderRadius:10,
        marginBottom:30 
      }}
      source={{uri:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      }}
      />
      
     <Text style={{color:"rgb(0,0,0,0.B)",fontsize:24 }}>Welcome to</Text>
      <Text style={{color:"black",fontSize:30,fontWeight:"600"}}>
        Sweet Delicious Fruits 
      </Text> 
      <TouchableOpacity 
      style={{
      backgroundColor:"#e3e3",
      borderRadius:10,
      display:"flex",
      marginLeft:15,
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      paddingHorizontal:60,
      paddingBottom:10,
      marginTop:28,
      
      
      
    }}
      >
      < AntDesign name="google" size={24} color="red"/>
      
    
      
      <Text style={{fontSize:20}}> Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
        backgroundColor:"black",
        borderRadius:10,
        flexDirection:"row",
        padding:10,
        paddingHorizontal:60,
        marginTop:20
      }}
      >
      <AntDesign name="facebook-square" size={24}color="white"/>
      
      <Text style={{fontSize:20,color:'white',marginLeft:10}}> Login with Facebook</Text>
      </TouchableOpacity>
      </View>
      
    
    
  

);
}
