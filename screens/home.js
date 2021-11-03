import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
                <MaterialCommunityIcons name="menu" size={24} color="black" />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Products</Text>
            </View>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} onPress={() => navigation.navigate("Cart")}>
                <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', flexWrap: "wrap", justifyContent: 'space-between'}}>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Cherry.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Cherry</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 35.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Apple.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Apple</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 18.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Avacado.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Avacado</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 10.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Bananas.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Bananas</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 10.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Grapes.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Grapes</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 15.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>

            
             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Guava.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Guavas</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 16.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            
             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Watermelon.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Watermelons</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 25.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Strawberry.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh StrawBerries</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 30.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Pineapples.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Pineapples</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 10.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>
            

             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Pear.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Pears</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 16.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>
            

             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Orange.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Oranges</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 5.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>

            
             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Guava.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Guavas</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 20.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>

             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Kiwi.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Kiwis</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 25.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>

            
             {/* product item */}
             <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/Lemons.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Lemons</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 5.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>


            {/* product item */}
            <View style={{borderWidth:0.5, padding: 20, borderRadius: 20, marginTop: 20, borderColor: "#c4c4c4"}}>
                <View style={{padding: 30, backgroundColor: '#fff3d9', borderRadius: 20, marginBottom: 20}}>
                    <Image source={require("../assets/mango.jpg")} style={{ width: 100, height: 100}}/>
                </View>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#a7aebd'}}>Fresh Mangoes</Text>
                    <Text style={{color: 'ash'}}>50g</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#656a7d", fontWeight: 'bold'}}>$ 8.00</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <View style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#aece96', borderRadius: 50}}><Text style={{color: 'white'}}>+</Text></View>
                    </View>
                </View>
            </View>

        

        </View>


            
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 22,
  },
});
