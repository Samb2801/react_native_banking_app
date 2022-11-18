import { Button, StyleSheet, Text, TextInput, View,Image,ImageBackground, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';



export default function App ({navigation,route}) {
  
    const getuser=async()=>{
      console.log("Entering in get user")
        await axios({
          method: 'GET',
          url:'http://192.168.209.189:8082/User/ViewBalance/'+custId
        
     
      })
        .then( (response)=>{
          console.log(custId)
          console.log(response.data.custId)
          console.log(response.data.Pin)

          console.log(AccountNo)
          console.log(response.data.AccountNo)

    
          console.log(Pin)
          console.log( JSON.stringify(response.data))

  

          if(custId==response.data.custId && Pin.length ==4 && AccountNo.length == 6 ){
            alert("Login Successful");
            navigation.navigate("Second Page",{custId});
          }
          else{
            alert("Incorrect Credentials");
          }
         
        })
        .catch((error)=>{
          console.log("error",error)
          alert(error);
        })
      }
    

    const[custId,setcustId]=useState("");
    const[Pin,setPin]=useState("");

    const[AccountNo,setAccountNo]=useState("");


    
  return (
    <View style={styles.container}>
         {/* <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./bank.png')}></Image> */}
         <Image style={{height:130,width:300,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:150}}  source={require('C:/Users/Windows 10/Desktop/java/IDFC_Bank/assets/bk.jpg')}></Image>
         
    <View style={styles.container2}>
    
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
     <TextInput onChangeText={(custId)=>setcustId(custId)} autoFocus style={styles.input} placeholder='Customer-ID'  placeholderTextColor='green'></TextInput>
      <TextInput onChangeText={(AccountNo)=>setAccountNo(AccountNo)} style={styles.input} placeholder='Account-Number' placeholderTextColor='green'></TextInput> 
     <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.input} placeholder='Enter Password' placeholderTextColor='green'></TextInput>
    
     <View style={{padding:20,paddingBottom:40}}>

      
     <TouchableOpacity onPress={getuser} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Login</Text>
     </TouchableOpacity>

     <Text style={styles.DiscText}>Click on Sign Up to Create Account</Text>
     <TouchableOpacity  onPress={()=>navigation.navigate("SignUp")} style={styles.loginbtn}>
    
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Sign Up</Text>
     </TouchableOpacity>
     </View>



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
        backgroundColor: '#a52a2a',
        justifyContent:'flex-end',
      },
      container2: {
        
          flex: 1,
          justifyContent: 'center',
         alignItems: 'center',
         flex : 1,
         width : '100%'
     
        
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'skyblue',
        paddingLeft:50,
        fontWeight: "bold",
        paddingBottom:15
      },
      scrollable:{
        
        alignItems:'center'
      },
      input:{
        color:'blue',
        margin:15,
        borderRadius:30,
        padding:10,
        top:20,
        height:60,
        width:300 ,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'white',
        // justifyContent:"space-between",
      },
    container1: {
        
          flex:0.9,
          backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        //   borderWidth:2,
          borderRadius:17,
          
          width:400
        },
        btn:{
            height:50,
            width:130 ,
            top:20,
            borderWidth:3,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            backgroundColor:'white',
            borderColor:'green',
        },

        loginbtn:{
          height:50,
          width:130 ,
          borderWidth:3,
          
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20,
          backgroundColor:'white',
          borderColor:'green',
          marginTop: 10,
      },
      DiscText:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:13,
        top:10,
        
        height:30,
        marginTop: 30,
        color:'red'
    }
  });