import React from 'react'
import { StyleSheet,Image, Text, View, TouchableOpacity, } from 'react-native'
import { Ionicons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

export default function Details({navigation}) {
    return (

        <View style={styles.container}>

            <View style={styles.nav} >
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Home")}>
                     <Ionicons name="arrow-back" size={25} color="#645eaf" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Cart")}>
                     <Ionicons name="cart" size={25} color="#645eaf" />
                </TouchableOpacity>
            </View>

            <View style={styles.detailsNav} >
                   <Text style={styles.header}>Fresh Cherry</Text>
            </View>

            <View style={styles.productContainer} >
                <View style={styles.productImg}>
                  <Image source={require("../assets/Cherry.jpg")} style={{ width: 400, height: 250}}/>
                 
                  
                </View>
            </View>

            <View style={styles.hr}></View>

            <View style={styles.descriptionContainer}>

                <View style={styles.descriptionHeaders}>
                    <Text style={[styles.headerText, styles.active]}>Description</Text>
                    <Text style={styles.headerText}>Price</Text>
                    <Text style={styles.headerText}>More Info</Text>
                </View>

                <View style={styles.descriptionTextContainer}>
                    <Text style={styles.descriptionText}> Fresh Juicy cherries straight from our farm. 
                    Nutritious and delicious.
                    $35
                    Buy a bunch ,get five free apples.
                      </Text>
                </View>

                <View style={styles.hl}></View>

                
                <View style={styles.price}><Text style={styles.priceText}>$35.99</Text></View>

                <TouchableOpacity style={styles.addToCartBtn}>
                   
                    <Text style={styles.addToCart}>Add to cart</Text>
                </TouchableOpacity>

            </View>

        </View>
    );


}
   



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    nav:{
        width: '90%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsNav:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
    },

    productContainer:{
        width:'100%',
        alignItems: 'center',
        marginTop: 20,
    },
    productImg:{
        width:'80%',
        height: 250,
        backgroundColor: "#f5cac3",
        justifyContent: 'center',
        alignItems: 'center',
    },

    hr:{
        marginTop: 50,
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: '#202020',
        borderStyle: 'dashed',
    },
    hl:{
        marginTop: 50,
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: '#b7b7a4',
        borderStyle: 'dashed',
    },



    descriptionContainer:{
        width: "100%",
        height: 490,
        marginTop: 50,
        backgroundColor: "#fff",
        borderTopRightRadius: 80,
        borderTopLeftRadius: 80,
        alignItems: 'center',
    },

    descriptionHeaders:{
        width:"60%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginLeft: 95,
        marginTop: 40,
    },
    headerText:{
        fontWeight: 'bold',
        color: "#b7b7a4"
    },
    active:{
        color: "#202020",
        paddingBottom: 5,
        borderBottomColor: "#202020",
        borderBottomWidth: 1,
    },
    descriptionTextContainer:{
        backgroundColor: '#f4f4f4',
        width: '80%',
        height: 210,
        marginTop: 50,
    },
    descriptionText:{},
    addToCartBtn:{
        paddingTop: 5,
    },
    addToCart:{
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: "#645eaf",
        color: "#fff",
    },
    price:{
        marginTop: 20,
    }

})
