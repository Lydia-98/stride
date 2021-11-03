import React from 'react';
import { View,Text,Image, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1,justifyContent:"center",alignItems:"center",backgroundColor:'white'}} >
    <View style={{flexDirection:"row"}}>

    <Image 
      style={{
        width:200,
        height:200,
        borderRadius:10,
        marginTop:400,
        
        // marginRight:450,
        
        
        transform:[{rotate:"45deg"}]
        
      }}
      source={{uri:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      }}
      />
      
      
      <Image 
      style={{
        width:200,
        height:200,
        borderRadius:15,
        
        
        marginLeft:100,
        marginHorizontal:20,
        marginTop:400,
        transform:[{rotate:"45deg"}]
        
      }}
      source={{uri:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      }}
      />





    </View>
      
     
<Image 
      style={{
        width:200,
        height:200,
        borderRadius:20,
        marginVertical:60,
        marginTop:0,
      
        
        marginLeft:20,
        
        
        transform:[{rotate:"45deg"}]
        
      }}
      source={{uri:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      }}
      />

     <Text style={{color:"rgb(0,0,0,0.B)",fontsize:24 ,fontWeight:"500"}}>Welcome to</Text>
      <Text style={{color:"black",fontSize:30,fontWeight:"500"}}>
        Sweet Delicious Fruits 
      </Text> 
      <TouchableOpacity 
      style={{
      backgroundColor:"#e3e3",
      borderRadius:10,
      borderWidth:5,
      
      display:"flex",
      marginLeft:15,
      flexDirection:"row",
      alignItems:"center", 
      padding:10,
      paddingHorizontal:60,
      paddingBottom:10,
      marginTop:20,
      
      
      
    }}
      >
      < AntDesign name="google" size={24} color="red"/>
      <Text style={{fontSize:20, color:'black'}}> Login with Gmail</Text>
      
      

      
      </TouchableOpacity>
      <TouchableOpacity 

      onPress={() =>{ 
        navigation.navigate("Home")
      }}

      activeOpacity={0.8}
      style={{
        backgroundColor:"black",
        borderRadius:10,
        borderWidth:5,
        display:"flex",
        marginLeft:15,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        paddingHorizontal:42,
        paddingBottom:10,
        marginTop:20
      }}
      >
      <AntDesign name="facebook-square" size={24}color="white"/>
      
      <Text style={{fontSize:20,color:'white',marginLeft:10}}> Login with Facebook</Text>

      
      </TouchableOpacity>



    
    
      <TouchableOpacity 
      style={{
      backgroundColor:"#e3e3",
      borderRadius:5,
      borderWidth:10,
      
      display:"flex",
      marginLeft:15,
      flexDirection:"row",
      alignItems:"center", 
      padding:10,
      paddingHorizontal:90,
      paddingBottom:5,
      marginTop:20,
      
      
      
    }}
      >
      <Text style={{fontSize:20, color:'black'}}> PASSWORD</Text>
      </TouchableOpacity>
    



      <Text style={{marginTop:10,fontWeight:500}} >Not a Member ?
      <Text style={{color:'red',fontWeight:"bold"}}>Sign Up</Text> 
       </Text>
      
      
       </View>
      
    
  

);
}
