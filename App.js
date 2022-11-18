import HomeScreeen from "./screens/LoginScreen";
import SecondScreeen from "./screens/SecondScreen";
import SignScreen from "./screens/SignScreen";
import TransferMoney from "./screens/TransferMoney";
import Withdraw from "./screens/Withdraw";
import Deposit from "./screens/Deposit";
import history from "./screens/history";
import transferHistory from "./screens/transferHistory";
import DepositHistory from "./screens/DepositHistory";
import WithdrawHistory from "./screens/WithdrawHistory";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewBase } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={HomeScreeen}
      options={{title: "Login Here"}}
      />
      <Stack.Screen
      name="Second Page"
      component={SecondScreeen}
      options={{title: "Welcome to IDFC"}}
      />
      <Stack.Screen
      name="SignUp"
      component={SignScreen}
      options={{title: "Register Here"}}
     />
     <Stack.Screen
      name="TransferScreen"
      component={TransferMoney}
      options={{title: "Transfer Amount"}}
      />
      <Stack.Screen
      name="DepositScreen"
      component={Deposit}
      options={{title: "Deposite Amount"}}
      />

<Stack.Screen
      name="WithdrawScreen"
      component={Withdraw}
      options={{title: "Withdraw Anount"}}
      />

<Stack.Screen
      name="HistoryScreen"
      component={history}
     
      />

<Stack.Screen
      name="TransferHistoryScreen"
      component={transferHistory}
     
      />

<Stack.Screen
      name="DepositHistoryScreen"
      component={DepositHistory}
     
      />

<Stack.Screen
      name="WithdrawHistoryScreen"
      component={WithdrawHistory}
     
      />




      

    </Stack.Navigator>
  </NavigationContainer>
  );
}
