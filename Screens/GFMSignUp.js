import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import axios from 'axios';
import {
  userSignup,
  userSignupSendEmailOTP,
  userSignupSendMobileOTP,
  verifyEmailOTP,
  verifyMobileOTP,
} from '../Components/AllApis';
const {width, height} = Dimensions.get('window');

const GFMSignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState('');
  const [eOtp, setEotp] = useState('');
  const [mob, setMob] = useState('');
  const [mOtp, setMotp] = useState('');
  const [inCode, setIncode] = useState('');
  const [pass, setPass] = useState('');
  const [cPass, setCpass] = useState('');

  const sendEmailOTP = () => {
    axios({
      method: 'post',
      url: userSignupSendEmailOTP,
      data: {
        email: email,
      },
    })
      .then(response => {
        console.log("OTP sent successfully");
      })
      .catch(error => {
        console.log("OTP did not sent");
      });
  };

  {
    eOtp.length == 6
      ? axios({
          method: 'patch',
          url: verifyEmailOTP,
          data: {
            email: email,
            otp: eOtp,
          },
        }).then(res => {
          console.log('OTP verified successfully.').catch(error => {
            console.log('OTP not verified.');
          });
        })
      : null;
  }
  // const emailOTPverify = () => {
  //   axios({
  //     method: 'patch',
  //     url: verifyEmailOTP,
  //     data: {
  //       email: email,
  //       otp: eOtp,
  //     },
  //   })
  //     .then(response => {
  //       console.log('OTP verified successfully' + response);
  //     })
  //     .catch(error => {
  //       console.log('OTP not verified' + error);
  //     });
  // };

  const sendMobileOTP = () => {
    axios({
      method: 'post',
      url: userSignupSendMobileOTP,
      data: {
        countryCode: '+91',
        mobileNumber: mob,
      },
    })
      .then(response => {
        console.log("OTP sent successfully");
      })
      .catch(error => {
        console.log("OTP did not sent");
      });
  };

  {
    mOtp.length == 6
      ? axios({
          method: 'patch',
          url: verifyMobileOTP,
          data: {
            mobileNumber: mob,
            otp: mOtp,
          },
        }).then(res => {
          console.log('OTP verified successfully.').catch(error => {
            console.log('OTP not verified.');
          });
        })
      : null;
  }

  // const mobileOTPverify = () => {
  //   axios({
  //     method: 'patch',
  //     url: verifyMobileOTP,
  //     data: {
  //       mobileNumber: mob,
  //       otp: mOtp,
  //     },
  //   })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  const signUp = () => {
    axios({
      method: 'post',
      url: userSignup,
      data: {
        email: email,
        countryCode: '+91',
        mobileNumber: mob,
        invitationCode: 'GFM5288',
        password: pass,
        confirmPassword: cPass,
      },
    })
      .then(response => {
        console.log('User added successfully');
      })
      .catch(error => {
        console.log('Missing details.');
      });
  };
  // {
  //   if (eOtp.length == 6) emailOTPverify();
  // }
  // {
  //   if (mOtp.length == 6) mobileOTPverify();
  // }
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.subheading}>Create your account</Text>
          </View>
          <View style={styles.inputs}>
            <View
              style={{
                position: 'absolute',
                marginTop: height * 0.025,
                zIndex: 1,
                marginLeft: width * 0.7,
              }}>
              <TouchableOpacity onPress={sendEmailOTP}>
                <Text style={{color: '#174B70', fontSize: height * 0.02}}>
                  Get Code
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#6F6F6F'}
              onChangeText={text => setEmail(text)}></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Email Verification Code"
              placeholderTextColor={'#6F6F6F'}
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={num => setEotp(num)}></TextInput>
            <View
              style={{
                position: 'absolute',
                marginTop: height * 0.24,
                zIndex: 1,
                marginLeft: width * 0.7,
              }}>
              <TouchableOpacity onPress={sendMobileOTP}>
                <Text style={{color: '#174B70', fontSize: height * 0.02}}>
                  Get Code
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="1234567890"
              placeholderTextColor={'#6F6F6F'}
              maxLength={10}
              keyboardType="number-pad"
              onChangeText={num => setMob(num)}></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Mobile Verfication Code"
              placeholderTextColor={'#6F6F6F'}
              maxLength={6}
              keyboardType="number-pad"
              onChangeText={num => setMotp(num)}></TextInput>
            <Text style={styles.subheading}>Fill your invitation code</Text>
            <TextInput
              style={styles.input}
              placeholder="Invitation Code"
              placeholderTextColor={'#6F6F6F'}
              onChangeText={text => setIncode(text)}></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'#6F6F6F'}
              onChangeText={text => setPass(text)}></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={'#6F6F6F'}
              onChangeText={text => setCpass(text)}></TextInput>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: height * 0.04,
            }}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightTextStyle={{
                fontSize: height * 0.02,
                color: '#000000',
                fontWeight: 'bold',
              }}
              checkedCheckBoxColor="#F7931E"
              uncheckedCheckBoxColor="#F7931E"></CheckBox>
            <Text style={styles.check}>
              I agree with <Text style={styles.tnc}>Terms </Text>and{' '}
              <Text style={styles.tnc}>Privacy</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.LoginBtn}>
            <Text
              style={{
                textAlign: 'center',
                padding: height * 0.02,
                color: '#FFFFFF',
                fontSize: height * 0.022,
                fontWeight: '700',
              }}
              disabled={isChecked ? false : true}
              onPress={signUp}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginVertical: height * 0.04,
            }}>
            <Text style={styles.new}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.tnc}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GFMSignUp;

const styles = StyleSheet.create({
  main: {
    height: height,
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  title: {
    alignItems: 'center',
  },
  heading: {
    fontSize: height * 0.03,
    color: '#6F6F6F',
    fontWeight: 700,
    fontFamily: 'Poppins',
  },
  subheading: {
    fontSize: height * 0.02,
    color: '#263238',
    fontFamily: 'Poppins',
    marginVertical: height * 0.015,
    fontWeight: 600,
    textAlign: 'center',
  },
  inputs: {
    rowGap: 20,
  },
  input: {
    height: height * 0.08,
    // borderWidth: 1,
    borderRadius: 20,
    paddingLeft: width * 0.05,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 12,
  },
  check: {
    fontSize: height * 0.02,
    color: '#6F6F6F',
    fontWeight: 400,
  },
  tnc: {
    fontSize: height * 0.02,
    color: '#174B70',
    fontWeight: 600,
  },
  LoginBtn: {
    height: height * 0.07,
    width: width * 0.4,
    alignSelf: 'center',
    backgroundColor: '#F7931E',
    borderRadius: 10,
  },
  new: {
    fontSize: height * 0.02,
    color: '#6F6F6F',
    fontWeight: 400,
  },
});
