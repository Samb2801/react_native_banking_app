import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Image, Text,FlatGrid } from 'react-native'
import axios from 'axios'
const App = ({navigation,route}) => {
   
   const {custId}=route.params;
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

          console.log(Pin)
          console.log( JSON.stringify(response.data))
         alert(response.data.balance)
        })
        .catch((error)=>{
          console.log("error",error)
          alert(error);
        })

    }

  
    const[name,setname]=useState("");
    const[AccountNo,setAccountNo]=useState("");
    const[Pin,setPin]=useState("");
    const[balance,setbalance]=useState("")
  
   return (
      


      <View style={styles.container1}>
          <Image style={{top:60,height:130,width:300,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:150}}  source={require('C:/Users/Windows 10/Desktop/java/IDFC_Bank/assets/bk.jpg')}></Image>
         
         
         <TouchableOpacity  onPress={getuser} style = {styles.container}>
         
      
            <Text >
               View Account Balance
            </Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=>navigation.navigate("TransferScreen",{custId})} style = {styles.container}>
            <Text style = {styles.text}>
            
               Transfer Money
               
            </Text>
         </TouchableOpacity>
         
         <TouchableOpacity  onPress={()=>navigation.navigate("DepositScreen",{custId})} style = {styles.container}>
            <Text style = {styles.text}>
              Deposite Money
            </Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=>navigation.navigate("WithdrawScreen",{custId})} style = {styles.container}>
            <Text style = {styles.text}>
               Withdraw Money
            </Text>
         </TouchableOpacity>
         {/* <TouchableOpacity  onPress={()=>navigation.navigate("HistoryScreen",{custId})} style = {styles.container}>
            <Text style = {styles.text}>
               Transaction History
            </Text>
         </TouchableOpacity> */}
         
      </View>
      
     
   )
}


const styles = StyleSheet.create ({
   container: {
      color:'blue',
        margin:20,
        borderRadius:30,
        top:150,
        padding:10,
        left:10,
        height:60,
        width:300 ,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
   },
   
   header:{
      fontSize:35,
      fontFamily:'notoserif',
      color:'skyblue',
      paddingLeft:50,
      fontWeight: "bold",
      paddingBottom:15,
      backgroundColor:'blue'
    },
    container1:{
      backgroundColor:'#a52a2a',
      height:200
    },
   
   text: {
      
     
   }
})

export default App