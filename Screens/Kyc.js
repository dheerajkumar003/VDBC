import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../Components/Button';
const {width, height} = Dimensions.get('window');

const Kyc = props => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.items}>
          <Image style={styles.img} source={require('../Images/Kyc.png')} />
          <Text style={styles.info}>
            You need to complete your minimum KYC to activate your wallet. In
            order to complete minimum KYC, please submit your details
          </Text>
          <View style={styles.BtnContainer}>
            <Button title="Complete your KYC" />
          </View>
          <TouchableOpacity
            style={styles.skpBtn}
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Text style={styles.skpTxt}>Skip for Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  container: {
    marginTop: height * 0.005,
    marginHorizontal: width * 0.05,
  },
  items: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginTop: height * 0.08,
  },
  info: {
    color: '#4F4F4F',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: height * 0.023,
    marginTop: height * 0.05,
  },
  BtnContainer: {
    marginTop: height * 0.025,
  },
  skpBtn: {
    marginTop: height * 0.02,
  },
  skpTxt: {
    color: '#707070',
    fontWeight: 500,
    fontSize: height * 0.023,
  },
});
