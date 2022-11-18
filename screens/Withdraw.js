import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';



export default function App ({navigation,route}) {
 const {custId} = route.params;
 const [accountNo, setAccountNumb] = useState("");
 const [pin, setPinnn] = useState("");



 
 const getuser2=async()=>{
  console.log("Entering in get user")
    await axios({
      method: 'GET',
      url:'http://192.168.209.189:8082/User/ViewBalance/'+custId
    
 
  })
    .then( (response)=>{
      setAccountNumb(response.data.accountNo);
      setPinnn(response.data.pin);


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
        url:"http://192.168.209.189:8082/transaction/withdraw/EnterAmount:"+amt+"/AccNo:"+rAcc+"/Pin:"+Pin
      
   
    })
      .then( (response)=>{
    alert("Withdraw Sucessfully")
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
      <Image style={{top:60,height:130,width:300,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:150}}  source={require('C:/Users/Windows 10/Desktop/java/IDFC_Bank/assets/bk.jpg')}></Image>
        
    <View style={styles.container1}>
    <Text style={styles.header}>Withdraw Money</Text>
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
    <TextInput onChangeText={(rAcc)=>setrAcc(rAcc)} style={styles.input} placeholder='Account Number' placeholderTextColor='green'></TextInput>
    <TextInput onChangeText={(amt)=>setamt(amt)} style={styles.input} placeholder='Amount' placeholderTextColor='green'></TextInput>
    <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.input} placeholder='Pin' placeholderTextColor='green'></TextInput>
     <View style={{padding:20,paddingBottom:40}}>

    
     <TouchableOpacity style={styles.loginbtn } onPress={getuser2}>
    
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Withraw</Text>
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
    top:-80,
    height:20,
    width:400 ,
    justifyContent:'flex-end',
  },
  header:{
    fontSize:35,
    top:40,
    left:70,
    fontFamily:'notoserif',
    color:'black',
    paddingLeft:10,
    paddingBottom:15
    
  },
  scrollable:{
        
    alignItems:'center'
  },
  input:{
    color:'green',
    margin:20,
    borderRadius:30,
    top:-20,
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
      top:80,
      borderRadius:17,
      backgroundColor:'white',
      width:400
    },
    btn:{
        height:35,
        width:135 ,
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        top:100,
        backgroundColor:'skyblue',
        borderColor:'red',
    },

    loginbtn:{
      height:45,
      width:130 ,
      top:-10,
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
    top:40,
    marginTop: 30,
    color:'text'
}
  });


