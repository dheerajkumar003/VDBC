import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import User from '../Components/User';
import Notification from '../Components/Notification';

import LinearGradient from 'react-native-linear-gradient';
import Button from '../Components/Button';
import Currecncy from '../Components/Currecncy';
import BitCoin from '../Components/BitCoin';

const {width, height} = Dimensions.get('window');

const Buy = props => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <User />
          <Text style={styles.title}>Buy Crypto</Text>
          <View style={{flexDirection: 'row', marginTop: height * 0.006}}>
            <View style={{marginLeft: width * 0.15}}>
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
          <TouchableOpacity onPress={() => setSelectTab(0)}>
            <LinearGradient
              colors={
                selectTab == 0
                  ? ['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']
                  : ['#C9C9C9', '#C9C9C9']
              }
              style={styles.btn1}>
              <Text
                style={{
                  color: selectTab == 0 ? '#FFFFFF' : '#4F4F4F',
                  fontSize: height * 0.02,
                  fontWeight: 500,
                }}>
                Pay With Flat
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectTab(1)}>
            <LinearGradient
              colors={
                selectTab == 1
                  ? ['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']
                  : ['#C9C9C9', '#C9C9C9']
              }
              style={styles.btn2}>
              <Text
                style={{
                  color: selectTab == 1 ? '#FFFFFF' : '#4F4F4F',
                  fontSize: height * 0.02,
                  fontWeight: 500,
                }}>
                Pay With Crypto
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {selectTab == 0 ? (
          <View>
            <Text style={styles.text}>Currency</Text>
            <Currecncy />
            <Text style={styles.text}>Enter VDT amount to buy</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"></TextInput>
            <Text style={styles.text}>Amount you have to pay</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"></TextInput>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#049EE2',
                  textDecorationLine: 'underline',
                  textAlign: 'right',
                  marginTop: height * 0.03,
                }}>
                View History
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: height * 0.05}}>
              <Button title="PAY" />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.heading}>Choose Token</Text>
            <Text style={styles.text}>Select coin to buy VDT</Text>
            <BitCoin />
            <Text style={styles.text}>Equivalent amount</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"
              placeholder="Amount"
              placeholderTextColor={'#929292'}></TextInput>
            <Text style={styles.text}>VDT Quantity</Text>
            <TextInput
              style={styles.input}
              keyboardType="decimal-pad"
              placeholder="Please enter token quantity you want to buy"
              placeholderTextColor={'#929292'}></TextInput>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#049EE2',
                  textDecorationLine: 'underline',
                  textAlign: 'right',
                  marginTop: height * 0.03,
                }}>
                View History
              </Text>
            </TouchableOpacity>
            <View style={{marginTop: height * 0.018}}>
              <Button title="PAY" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Buy;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  title: {
    fontSize: height * 0.035,
    color: '#4F4F4F',
    fontWeight: 600,
    marginTop: height * 0.008,
    marginLeft: width * 0.225,
  },
  btn1: {
    width: width * 0.43,
    height: height * 0.07,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    width: width * 0.438,
    height: height * 0.07,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#828282',
    color: '#707070',
    width: width * 0.9,
    height: height * 0.08,
    borderRadius: 10,
    marginBottom: height * 0.001,
    backgroundColor: '#DBDBDB',
    paddingLeft: width * 0.05,
    fontSize: height * 0.02,
  },
  text: {
    fontSize: height * 0.02,
    color: '#4F4F4F',
    fontWeight: 400,
    marginVertical: height * 0.015,
  },
  heading: {
    color: '#929292',
    fontWeight: 500,
    fontSize: height * 0.025,
  },
});
