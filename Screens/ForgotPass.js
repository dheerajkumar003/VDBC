import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../Components/Button';

const {width, height} = Dimensions.get('window');

const ForgotPass = props => {
  
  //Email Validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const validateEmail = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
    if (text == '') {
      setEmailError('Please enter email address.');
    }
    setEmail(text);
  }; 
  const handleSubmit = () => {
    if (!email){
      setEmailError('Email is required.')
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', marginVertical: responsiveHeight(1)}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => props.navigation.navigate('LoginPage')}>
            <Image source={require('../Images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Forgot Password</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt}>
            Please enter your registered Email ID to{'\n'}retrieve your password
          </Text>
          <Image source={require('../Images/fp.png')} />
        </View>
        <View>
          <Text style={styles.info}>Please enter your registered Email Id</Text>
          <TextInput
            style={[
              styles.input,
              {borderColor: emailError ? 'red' : '#828282'},
            ]}
            placeholderTextColor={'#707070'}
            placeholder="Enter your email address"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={validateEmail}
          />
          {emailError ? (
            <Text style={styles.ErrorTxt}>{emailError}</Text>
          ) : null}
          <Image
            style={{
              position: 'absolute',
              height: height * 0.017,
              width: width * 0.05,
              marginTop: height * 0.08,
              marginLeft: width * 0.05,
            }}
            source={require('../Images/msgbox.png')}
          />
          <Image
            style={{
              position: 'absolute',
              height: height * 0.04,
              width: width * 0.005,
              marginTop: height * 0.07,
              marginLeft: width * 0.14,
            }}
            source={require('../Images/line.png')}
          />
        </View>
        <Button title="SUBMIT" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EAEAEA',
    height: height,
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  img: {
    alignItems: 'center',
  },
  backBtn: {
    marginTop: height * 0.015,
  },
  heading: {
    color: '#4F4F4F',
    fontSize: height * 0.03,
    fontFamily: 'Poppins',
    fontWeight: 700,
    marginHorizontal: width * 0.2,
  },
  txt: {
    color: '#4f4f4f',
    fontSize: height * 0.022,
    fontWeight: 400,
    textAlign: 'center',
  },
  info: {
    color: '#4f4f4f',
    fontSize: height * 0.022,
    fontWeight: 400,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.08,
    marginVertical: height * 0.02,
    paddingLeft: width * 0.18,
    backgroundColor: '#DBDBDB',
  },
  ErrorTxt: {
    color: 'red',
    fontSize: height * 0.018,
  },
});
