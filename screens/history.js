import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
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
      <View>
         {/* <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./bank.png')}></Image> */}

        
         <TouchableOpacity  onPress={()=>navigation.navigate("TransferHistoryScreen",{AccountNo})} style = {styles.container}>
            <Text style = {styles.text}>
               Transfer History
            </Text>
         </TouchableOpacity>
         
         <TouchableOpacity  onPress={()=>navigation.navigate("DepositHistoryScreen",{AccountNo})} style = {styles.container}>
            <Text style = {styles.text}>
              Deposite History
            </Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=>navigation.navigate("WithdrawHistoryScreen",{AccountNo})} style = {styles.container}>
            <Text style = {styles.text}>
               Withdraw History
            </Text>
         </TouchableOpacity>
         
      </View>
      
      
   )
}


const styles = StyleSheet.create ({
   container: {
    height:45,
    width:200,
    margin:50,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'skyblue',
    borderColor:'red',
    marginTop: 60,
   },
   
   text: {
      
    
   }
})

export default App