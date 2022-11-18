import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';



export default function App ({navigation,route}) {
 const {custId} = route.params;
 const [name, setNamet] = useState("");

 
 const getuser2=async()=>{
  console.log("Entering in get user")
    await axios({
      method: 'GET',
      url:'http://192.168.209.189:8082/User/ViewBalance/'+custId
    
 
  })
    .then( (response)=>{
     setNamet(response.data.name);
     getuser();

     console.log(response.data.name);
    })
    .catch((error)=>{
      console.log("error",error)
      alert(error);
    })

}
  const getuser=async()=>{
    console.log("Entering in get user")
      await axios({
        method: 'GET',
      url:"http://192.168.209.189:8082/transaction/transfer/Amount:"+amt+"/YourName:"+name+"/ReceiverAccNo:"+rAcc
      
   
    })
      .then( (response)=>{
    alert("Transfer Done")
      })
      .catch((error)=>{
        console.log("error",error)
        alert(error);
      })
    }
    const[custId2,setcustId]=useState("");
    const[rAcc,setrAcc]=useState("");
    const[amt,setamt]=useState("");
    const[Pin,setPin]=useState("");
    const[balance,setbalance]=useState("")
    const[confirm,setconfirm]=useState("")

  return (
    <View style={styles.container}>
      <Image style={{top:50,height:130,width:300,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:150}}  source={require('C:/Users/Windows 10/Desktop/java/IDFC_Bank/assets/bk.jpg')}></Image>
        {/* <Text style={styles.header}>Transfer Money</Text> */}
        
    <View style={styles.container1}>
    
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
    <Text style={styles.header}>Transfer Money</Text>

     <TextInput onChangeText={(rAcc)=>setrAcc(rAcc)} autoFocus style={styles.input} placeholder='Receivers Account Number'  placeholderTextColor='green'></TextInput>
    
     <TextInput onChangeText={(amt)=>setamt(amt)} style={styles.input} placeholder='Amount' placeholderTextColor='green'></TextInput>
    
     <View style={{padding:20,paddingBottom:40}}>

    
     <TouchableOpacity style={styles.loginbtn } onPress={getuser2}>
    
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Transfer</Text>
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
        height:20,
        width:400 ,
        justifyContent:'flex-end',
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'black',
        paddingLeft:10,
        paddingBottom:15
        
      },
      scrollable:{
        
        alignItems:'center'
      },
      input:{
        color:'black',
        margin:15,
        borderRadius:20,
        padding:10,
        height:50,
        width:300 ,
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'',
        // justifyContent:"space-between",
      },
    container1: {
        
          flex:0.9,
          backgroundColor: 'skyblue',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        //   borderWidth:2,
          borderRadius:17,
          backgroundColor:'white',
          top:55,
          width:400 
        },
        btn:{
            height:40,
            width:130 ,
            borderWidth:3,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            backgroundColor:'green',
            borderColor:'green',
        },

        loginbtn:{
          height:45,
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
        fontSize:9 ,
        marginTop: 30,
        color:'text'
    }
  });