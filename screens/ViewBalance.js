import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


const App = ({navigation}) => {
  return (
    <View style={styles.container}>
         {/* <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./assets/logo.png')}></Image> */}
        <Text style={styles.header}>Account Balance</Text>
    <View style={styles.container1}>
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
     <Text style={styles.input }>Customer ID=</Text>
     <Text style={styles.input }>Name=</Text>
     <Text style={styles.input }>Account Number=</Text>
     <Text style={styles.input }>Account Balance=</Text>
     <View>

     </View>   
    </ScrollView>
    </View>
     <StatusBar style="auto" />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'flex-end',
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'red',
        paddingLeft:20,
        paddingBottom:15
      },
      scrollable:{
        
        alignItems:'center'
      },
      input:{
        color:'green',
        margin:20,
        borderRadius:30,
        padding:10,
        height:60,
        width:300 ,
        borderWidth:2,
        borderColor:'green',

        // justifyContent:"space-between",
      },
    container1: {
        
          flex:0.9,
          backgroundColor: '#fff',
    
          borderRadius:17,
          backgroundColor:'white',
          width:400
        },
        btn:{
            height:45,
            width:135 ,
            borderWidth:3,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            backgroundColor:'skyblue',
            borderColor:'red',
        }
  });
  
export default App
