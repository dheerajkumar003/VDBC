import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Wallet from './Wallet';
import Exchange from './Exchange';
import Staking from './Staking';
import Buy from './Buy';
import SplashScreen from './SplashScreen';
import {Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

const Bottom = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Bottom.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#EAEAEA',
          borderTopColor: '#2A2C38',
          height: height * 0.09,
        },
        tabBarLabelStyle:{
          fontSize:height*0.017,

        },
      tabBarInactiveTintColor:'#808080',
      tabBarActiveTintColor:'#000000',
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                style={{
                  tintColor: tabInfo.focused ? '#00B0ED' : '#808080',
                }}
                source={require('../Images/Home.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                style={{tintColor: tabInfo.focused ? '#00B0ED' : '#808080'}}
                source={require('../Images/Wallet.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Exchange"
        component={Exchange}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                style={{tintColor: tabInfo.focused ? '#00B0ED' : '#808080'}}
                source={require('../Images/Exchange.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Staking"
        component={Staking}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                style={{tintColor: tabInfo.focused ? '#00B0ED' : '#808080'}}
                source={require('../Images/Staking.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Buy"
        component={Buy}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                style={{tintColor: tabInfo.focused ? '#00B0ED' : '#808080'}}
                source={require('../Images/Buy.png')}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;
