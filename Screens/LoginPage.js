import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import Button from '../Components/Button';
const {width, height} = Dimensions.get('window');

const LoginPage = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');

  //Email Validation
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

  //Password Validation

  const validatePass = text => {
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!passRegex.test(text)) {
      setPassError(
        'Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character.',
      );
    } else {
      setPassError('');
    }
    if (text.length < 8) {
      setPassError('Password must be atleast 8 characters.');
    } else if (text == ' ') {
      setPassError('Please enter password.');
    }
    setPass(text);
  };
  const handleLogin = () => {
    if (!email) {
      setEmailError('Email is required.');
    } if (!pass){
      setPassError('Password is required.')
    } else {
      props.navigation.navigate('HomeScreen');
    }

  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../Images/login.png')} />
        <Text style={styles.heading}>Login to VDB Coin</Text>
        <View>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : null}> */}
            <TextInput
              style={[
                styles.input,
                {borderColor: emailError ? 'red' : '#828282'},
              ]}
              placeholder="Enter your email address"
              placeholderTextColor={'#707070'}
              value={email}
              onChangeText={validateEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError ? (
              <Text style={styles.ErrorTxt}>{emailError}</Text>
            ) : null}
            <Image
              style={styles.msgBoxImg}
              source={require('../Images/msgbox.png')}
            />
            <Image
              style={styles.lineImg}
              source={require('../Images/line.png')}
            />

            <TextInput
              style={[
                styles.input,
                {borderColor: passError ? 'red' : '#828282'},
              ]}
              placeholder="Enter your password"
              placeholderTextColor={'#707070'}
              secureTextEntry={true}
              value={pass}
              maxLength={16}
              onChangeText={validatePass}
              autoCapitalize="none"
            />
            <View>
              <Image
                style={styles.lockImg}
                source={require('../Images/lock.png')}
              />
              <Image
                style={styles.line}
                source={require('../Images/line.png')}
              />
            </View>
            {passError ? (
              <Text style={styles.ErrorTxt}>{passError}</Text>
            ) : null}
          {/* </KeyboardAvoidingView> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: height * 0.02,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightTextStyle={{
                fontSize: height * 0.02,
                color: '#000000',
                fontWeight: 'bold',
              }}
              checkedCheckBoxColor="#00B0ED"
              uncheckedCheckBoxColor="#343A40"
            />
            <Text style={styles.text}>Remember me</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPass')}>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="LOGIN"
          onPress={handleLogin}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: height * 0.01,
          }}>
          <Text style={styles.NewText}>New on our platform? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

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
  heading: {
    color: '#4F4F4F',
    fontFamily: 'Poppins',
    fontSize: height * 0.04,
    fontWeight: 700,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.08,
    marginTop: height * 0.03,
    paddingLeft: width * 0.18,
    backgroundColor: '#DBDBDB',
  },
  msgBoxImg: {
    position: 'absolute',
    height: height * 0.015,
    width: width * 0.05,
    marginTop: height * 0.06,
    marginLeft: width * 0.05,
  },
  lineImg: {
    position: 'absolute',
    height: height * 0.04,
    width: width * 0.005,
    marginTop: height * 0.05,
    marginLeft: width * 0.14,
  },
  lockImg: {
    position: 'absolute',
    height: height * 0.03,
    width: width * 0.04,
    marginTop: height * -0.054,
    marginLeft: width * 0.05,
  },
  line: {
    position: 'absolute',
    height: height * 0.04,
    width: width * 0.005,
    marginTop: height * -0.06,
    marginLeft: width * 0.14,
  },
  text: {
    fontSize: height * 0.018,
    color: '#4F4F4F',
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NewText: {
    fontWeight: 400,
    fontSize: height * 0.018,
  },
  SignUpText: {
    fontWeight: 700,
    fontSize: height * 0.018,
    color: '#1069C2',
  },
  ErrorTxt: {
    color: 'red',
    fontSize: height * 0.018,
  },
});
