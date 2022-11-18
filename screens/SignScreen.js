import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './Login';
import axios from 'axios';



const Signup = ({navigation}) => {


    
    const register=async()=>{
        await axios({
          method: 'POST',
          url: 'http://192.168.209.189:8082/User/createAccount',
          data: {
            custId:custId,
            name:name,
            accountNo: AccountNo,
            pin: Pin,
            balance:balance
          }
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          alert(JSON.stringify(response.data));
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }
  const navlog=()=>{
    register();
    alert("Signup Successful");
    navigation.navigate('Login',{custId,AccountNo})
  }
    const[custId,setcustId]=useState("");
    const[name,setname]=useState("");
    const[AccountNo,setAccountNo]=useState("");
    const[Pin,setPin]=useState("");
    const[balance,setbalance]=useState("")
    const[confirm,setconfirm]=useState("")

    const validate=()=>{

          const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if((custId=="")||(name=="")||(AccountNo=="")||(Pin=="")||(balance=="")){
          alert("Input all fields")
        }
        else if(Pin!=confirm){
            alert("Passwords do not match");
        }
        else if(balance < 1000){
          alert("Balance must be greater than 1000");
      }
        else if(Pin.length<4){
          alert("Pin should be of 4 Digit");
        }
        else if(AccountNo.length!=6){
            alert("Account number should be 6 digit")
        }
        else if(custId.length!=4){
          alert("Customer ID should be 4 digit")
      }
        else{
            Alert.alert("Confirm","Are you sure you want to continue?", [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () =>navlog() }
              ],
              {cancelable:true})
        }
    }
  return (

    
    <View style={styles.container}>
          <Image style={{height:130,width:300,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:150}}  source={require('C:/Users/Windows 10/Desktop/java/IDFC_Bank/assets/bk.jpg')}></Image>
          
        
    <View style={styles.container1}>
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
     <TextInput onChangeText={(uname)=>setcustId(uname)} autoFocus style={styles.input} placeholder='Customer-ID'  placeholderTextColor='green'></TextInput>
     <TextInput onChangeText={(name)=>setname(name)} style={styles.input} placeholder='Name'  placeholderTextColor='green'></TextInput>
     <TextInput onChangeText={(AccountNo)=>setAccountNo(AccountNo)} style={styles.input} placeholder='Account-Number' placeholderTextColor='green'></TextInput>
     <TextInput onChangeText={(balance)=>setbalance(balance)} style={styles.input}  placeholder='Enter Balance ' placeholderTextColor='green'></TextInput>
    
     <TextInput onChangeText={(Pin)=>setPin(Pin)} secureTextEntry={true} style={styles.input}  placeholder='Enter Password' placeholderTextColor='green'></TextInput>
    
     <TextInput onChangeText={(confirm)=>setconfirm(confirm)} secureTextEntry={true} style={styles.input}  placeholder='Confirm Password' placeholderTextColor='green'></TextInput>
     <View style={{padding:20,paddingBottom:40}}>
     <TouchableOpacity onPress={validate} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>SignUp</Text>
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
    
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'skyblue',
        paddingLeft:20,
        fontWeight: "bold",
        paddingBottom:15
      },
      scrollable:{
        
        alignItems:'center'
      },
      input:{
        color:'black',
        margin:15,
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
    
          borderRadius:20,
          backgroundColor:'white',
          width:400
        },
        btn:{
            height:45,
            width:135 ,
            borderWidth:3,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            backgroundColor:'white',
            borderColor:'green',
        }
  });
  
export default Signup