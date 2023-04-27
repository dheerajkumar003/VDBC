import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import User from '../Components/User';
import Notification from '../Components/Notification';
import Search from '../Components/Search';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const Staking = props => {
  const [tab, setTab] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <User />
          <Text style={styles.title}>Stake Crypto</Text>
          <View style={{flexDirection: 'row', marginTop: height * 0.006}}>
            <View style={{marginLeft: width * 0.04}}>
              <Search />
            </View>
            <View style={{marginLeft: width * 0.031}}>
              <Notification />
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: height * 0.03,
            backgroundColor: '#C9C9C9',
            height: height * 0.085,
            width: width * 0.9,
            borderRadius: 100,
            paddingLeft: width * 0.015,
            paddingTop: height * 0.0075,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => setTab(0) }>
            <LinearGradient
              colors={
                tab == 0 
                  ? ['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']
                  : ['#C9C9C9', '#C9C9C9']
              }
              style={styles.btn1}>
              <Text
                style={{
                  color: tab == 0 ? '#FFFFFF' : '#4F4F4F',
                  fontSize: height * 0.02,
                  fontWeight: 500,
                }}>
                Staking
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setTab(1)}>
            <LinearGradient
              colors={ tab ==1 ? ['#00ACEB', '#00B0ED', '#1069C2', '#1069C2'] : ['#C9C9C9', '#C9C9C9']}
              style={styles.btn2}>
              <Text
                style={{
                  color: tab ==1 ? '#FFFFFF' : '#4F4F4F',
                  fontSize: height * 0.02,
                  fontWeight: 500,
                }}>
                Staked List
              </Text>
             
            </LinearGradient>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setTab(2)}>
            <LinearGradient
              colors={ tab == 2   ? ['#00ACEB', '#00B0ED', '#1069C2', '#1069C2'] : ['#C9C9C9', '#C9C9C9']}
              style={styles.btn3}>
              <Text
                style={{
                  color:  tab == 2 ? '#FFFFFF' : '#4F4F4F',
                  fontSize: height * 0.02,
                  fontWeight: 500,
                }}>
                History
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Staking;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  container: {
    marginTop: height * 0.0045,
    marginHorizontal: width * 0.05,
  },
  title: {
    fontSize: height * 0.035,
    color: '#4F4F4F',
    fontWeight: 600,
    marginTop: height * 0.008,
    marginLeft: width * 0.1,
  },
  btn1: {
    width: width * 0.3,
    height: height * 0.07,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    width: width * 0.3,
    height: height * 0.07,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn3: {
    width: width * 0.268,
    height: height * 0.07,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
