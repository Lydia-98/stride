import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { AntDesign, Ionicons} from '@expo/vector-icons';

export default function Cart({navigation}) {
  return (
    <View style={styles.container}>

      {/* Top Navigation */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back" size={24} color="#645eaf" />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: "#645eaf"}}>My Orders</Text>
          </View>
          <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} onPress={() => navigation.navigate("Cart")}>
            <Ionicons name="settings" size={24} color="#645eaf" />
          </TouchableOpacity>
      </View>

      <View style={{marginTop: 20, }}>

        {/* Cart item 1 */}
        <View style={{flexDirection: 'row', alignItems:'center', marginVertical: 10}}>
          <View style={{padding: 15, borderRadius: 20, backgroundColor: "#f9eae1"}}>
            <Image source={require("../assets/Grapes.jpg")} style={{width: 50, height: 50}}/>
          </View>

          <View style={{flex: 2, marginLeft: 20,}}>
            <Text style={{fontSize: 17, color: main_color, fontWeight:'bold'}}>Grapes</Text>
            <Text>Instruction</Text>
          </View>

          <Text style={{flex: 1, fontSize: 17, color: "#b0b3be" }}>$15</Text>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderTopLeftRadius: 11, borderBottomLeftRadius: 11}}>
                <Text style={{color: '#b0b3be', alignSelf:'center'}}>03Ib</Text>
              </View>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderBottomRightRadius: 11, borderTopRightRadius: 11}}>
                <AntDesign name="delete" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>


        {/* Cart item  */}
        <View style={{flexDirection: 'row', alignItems:'center', marginVertical: 10}}>
          <View style={{padding: 15, borderRadius: 20, backgroundColor: "#f9eae1"}}>
            <Image source={require("../assets/Guava.jpg")} style={{width: 50, height: 50}}/>
          </View>

          <View style={{flex: 2, marginLeft: 20,}}>
            <Text style={{fontSize: 17, color: main_color, fontWeight:'bold'}}>Guavas</Text>
            <Text>Instruction</Text>
          </View>

          <Text style={{flex: 1, fontSize: 17, color: "#b0b3be" }}>$20</Text>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderTopLeftRadius: 11, borderBottomLeftRadius: 11}}>
                <Text style={{color: '#b0b3be', alignSelf:'center'}}>03Ib</Text>
              </View>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderBottomRightRadius: 11, borderTopRightRadius: 11}}>
                <AntDesign name="delete" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        {/* end of cart item */}


        {/* Cart item  */}
        <View style={{flexDirection: 'row', alignItems:'center', marginVertical: 10}}>
          <View style={{padding: 15, borderRadius: 20, backgroundColor: "#f9eae1"}}>
            <Image source={require("../assets/Strawberry.jpg")} style={{width: 50, height: 50}}/>
          </View>

          <View style={{flex: 2, marginLeft: 20,}}>
            <Text style={{fontSize: 17, color: main_color, fontWeight:'bold'}}>Strawberriess</Text>
            <Text>Instruction</Text>
          </View>

          <Text style={{flex: 1, fontSize: 17, color: "#b0b3be" }}>$30</Text>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderTopLeftRadius: 11, borderBottomLeftRadius: 11}}>
                <Text style={{color: '#b0b3be', alignSelf:'center'}}>03Ib</Text>
              </View>
              <View style={{borderWidth: 1, borderColor: '#b0b3be', height: 55, padding: 15, borderBottomRightRadius: 11, borderTopRightRadius: 11}}>
                <AntDesign name="delete" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        {/* end of cart item */}



      </View>

      <View style={{marginTop: 20, paddingHorizontal: 10}}>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: "#b0b3be"}}>Delivery Fee</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: "#b0b3be"}}>$20</Text>
          </View>
        </View>

        <View style={{borderWidth: 1, borderColor: "#b0b3be", borderStyle: 'dashed', marginVertical: 15}}></View>


        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16.5, fontWeight: 'bold', color: "#645eaf"}}>Total</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 16.5, fontWeight: 'bold', color: "#645eaf"}}>$65.00</Text>
          </View>
        </View>

      </View>


      {/* Checkout button */}
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <TouchableOpacity style={{
          padding: 15,
          backgroundColor: "#645eaf",
          alignItems: 'center',
          borderRadius: 15,
        }}>
          <Text style={{color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

const main_color = '#645eaf';
