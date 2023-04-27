import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import User from '../Components/User';
import Search from '../Components/Search';
import Headphone from '../Components/Headphone';
import Notification from '../Components/Notification';
import Docs from '../Components/Docs';

const {width, height} = Dimensions.get('window');

const Wallet = props => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <User />
          <View style={{flexDirection: 'row', marginLeft: width * 0.415}}>
            <Docs onPress={() => props.navigation.navigate('Kyc')} />
            <Search />
            <Headphone />
            <Notification />
          </View>
        </View>
        <Text style={styles.title}>My Wallet</Text>
        <View style={styles.portfolio}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: height * 0.03,
              fontWeight: 700,
              paddingTop: height * 0.13,
            }}>
            Portfolio Value
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

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
    fontSize: height * 0.03,
    color: '#4F4F4F',
    fontWeight: 600,
    marginTop: height * 0.02,
  },
  portfolio: {
    alignSelf: 'center',
    backgroundColor: '#383636',
    height: height * 0.31,
    width: width * 0.6,
    borderRadius: 200,
  },
});
