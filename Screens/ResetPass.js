import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../Components/Button';
const {width, height} = Dimensions.get('window');

const ResetPass = () => {
  const [pass, setPass] = useState(false);
  const [passError, setPassError] = useState(false);
  const [Cpass, setCpass] = useState(false);
  const [CpassError, setcPassError] = useState(false);

  const validatePass = text =>{
    setPass(text);
    const passRegex =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(text.length === 0){
      setPassError('Please enter password.');
    } else if(!passRegex.test(text)){
      setPassError('Password must be atleast 8-12 character including one alpha numeric and one special character');
    } else if(text.length < 8){
      setPassError('Password must be atleast 8 characters.');
    } else{
      setPassError('');
    }
  }
  const validateConfirmPass = text =>{
    setCpass(text);
    if(text != pass) {
      setcPassError('Password does not match.')
    }else{
      setcPassError('');
    }
  }

  const handleSubmit = () =>{
    if(!pass){
      setPassError('Password is required.');
    } if (!Cpass){
      setcPassError('Confirm password is required.')
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: height * 0.01}}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => props.navigation.navigate('LoginPage')}>
            <Image source={require('../Images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>Reset Password</Text>
        </View>
        <Text style={styles.txt}>
          Your new password must be different from previous used passwords.
        </Text>
        <View>
          <TextInput
            style={[styles.input,{borderColor: passError ? 'red' : '#828282'}]}
            placeholder="New password"
            placeholderTextColor={'#707070'}
            onChangeText={validatePass}
            value={pass}></TextInput>
            {passError ? (<Text style={styles.ErrorTxt}>{passError}</Text>):null}
          <TextInput
           style={[styles.input,{borderColor: CpassError ? 'red' : '#828282'}]}
            placeholder="Confirm new password"
            placeholderTextColor={'#707070'}
            value={Cpass}
            onChangeText={validateConfirmPass}></TextInput>
            {CpassError ? (<Text style={styles.ErrorTxt}>{CpassError}</Text>):null}
          <Button title="SUBMIT" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ResetPass;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EAEAEA',
    height: height,
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  heading: {
    color: '#4F4F4F',
    fontSize: height * 0.03,
    fontFamily: 'Poppins',
    fontWeight: 700,
    marginHorizontal: width * 0.2,
  },
  backBtn: {
    marginTop: height * 0.018,
  },
  txt: {
    color: '#4f4f4f',
    fontSize: height * 0.02,
    fontWeight: 400,
    textAlign: 'center',
    marginVertical: height * 0.07,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.08,
    marginVertical: height * 0.02,
    paddingLeft: width * 0.05,
    backgroundColor: '#DBDBDB',
  },
  ErrorTxt: {
    color: 'red',
    fontSize: height * 0.018,
  },
});
