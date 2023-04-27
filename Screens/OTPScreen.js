import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Button from '../Components/Button';

const {width, height} = Dimensions.get('window');

const OTPScreen = (props) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => props.navigation.navigate('SignUp')}>
            <Image source={require('../Images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>OTP Verificatiion</Text>
        </View>
        <Text style={styles.txt}>
          OTP Code has been sent to your entered email address
          arvind.tyagi@mobiloitte.com. Please confirm your identity below.
        </Text>
        <Text style={styles.info}>Enter 4-digits code</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            ref={pin1Ref}
            maxLength={1}
            keyboardType="numeric"
            placeholder="*"
            placeholderTextColor={'#929292'}
            style={styles.input}
            onChange={pin1 => {
              setPin1(pin1);
              if (pin1 != '') {
                pin2Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin2Ref}
            maxLength={1}
            keyboardType="numeric"
            placeholder="*"
            placeholderTextColor={'#929292'}
            style={styles.input}
            onChange={pin2 => {
              setPin2(pin2);
              if (pin2 != '') {
                pin3Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin3Ref}
            maxLength={1}
            keyboardType="numeric"
            placeholder="*"
            placeholderTextColor={'#929292'}
            style={styles.input}
            onChange={pin3 => {
              setPin3(pin3);
              if (pin3 != '') {
                pin4Ref.current.focus();
              }
            }}
          />
          <TextInput
            ref={pin4Ref}
            maxLength={1}
            keyboardType="numeric"
            placeholder="*"
            placeholderTextColor={'#929292'}
            style={styles.input}
            onChange={pin4 => {
              setPin4(pin4);
            }}
          />
        </View>
        {count != 0 ? (
          <>
            {count != 0 && (
              <Text style={styles.Msg}>
                The OTP expires in{' '}
                <Text style={{color: '#1069C2'}}>{count}</Text>
              </Text>
            )}
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                marginTop: height * 0.05,
                alignSelf: 'center',
              }}>
              <Text style={styles.msg}>Did not receive the code?</Text>
              <TouchableOpacity onPress={() => setCount(5)}>
                <Text style={styles.res}> Resend OTP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <View>
          <Button title="Verify & Create Account" />
        </View>
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EAEAEA',
    height: height,
  },
  container: {
    marginHorizontal: width * 0.05,
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
    marginVertical: height * 0.04,
  },
  info: {
    color: '#4f4f4f',
    fontSize: height * 0.018,
    fontWeight: 400,
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
  },
  input: {
    backgroundColor: '#DBDBDB',
    borderColor: '#828282',
    borderWidth: 1,
    borderRadius: 7,
    width: width * 0.16,
    height: height * 0.08,
    textAlign: 'center',
  },
  Msg: {
    color: '#4f4f4f',
    fontSize: height * 0.018,
    marginTop: height * 0.01,
    fontWeight: 400,
    alignSelf: 'flex-end',
  },
  msg: {
    color: '#4f4f4f',
    fontSize: height * 0.018,
    fontWeight: 400,
  },
  res: {
    color: '#1069C2',
    fontWeight: 700,
    fontSize: height * 0.018,
  },
});
