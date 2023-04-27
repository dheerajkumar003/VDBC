import { View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './Screens/SplashScreen';
import Tutorials from './Screens/Tutorials';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Screens/LoginPage';
import ForgotPass from './Screens/ForgotPass';
import ResetPass from './Screens/ResetPass';
import OTPScreen from './Screens/OTPScreen';
import SignUp from './Screens/SignUp';
import OTPSuccess from './Alert/OTPSuccess';
import HomeScreen from './Screens/HomeScreen';
import Kyc from './Screens/Kyc';
import SignUpCompany from './Screens/SignUpCompany';
import RoleDropdown from './Components/RoleDropdown';
import Demo from './Screens/Demo';
import TnC from './Screens/TnC';
import DocsVerification from './Screens/DocsVerification';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Tutorials" component={Tutorials} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="OTPSuccess" component={OTPSuccess} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Kyc" component={Kyc} />
        <Stack.Screen name="TnC" component={TnC}/>
        <Stack.Screen name="DocsVerification" component={DocsVerification}/>
       </Stack.Navigator>
    </NavigationContainer>

    // <View>
    //   <ResetPass/>
    // </View>
  );
};

export default App;
