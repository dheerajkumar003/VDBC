import {
  Dimensions,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const {width, height} = Dimensions.get('window');
import RoleDropdown from '../Components/RoleDropdown';
import StateDropdown from '../Components/StateDropdown';
import CountryDropdown from '../Components/CountryDropdown';
import CheckBox from 'react-native-check-box';
import Button from '../Components/Button';
import DateOfBirth from '../Components/DateOfBirth';

import OTPSuccess from '../Alert/OTPSuccess';

const SignUp = props => {
  const [fname, setFname] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [lName, setLname] = useState('');
  const [lNameError, setLnameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [zip, setZip] = useState('');
  const [zipError, setZipError] = useState('');
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState('');
  const [cPass, setCpass] = useState('');
  const [cPassError, setCpassError] = useState('');
  const [isChecked, setIsChecked] = useState('');
  const [success, setSuccess] = useState(true);
  const [isModalVisible, setisModalVisible] = useState('');
  // ******************************************************************

  const [role, setRole] = useState(null);
  const [roleError, setRoleError] = useState();

  console.log(roleError)

  const data = [
    {label: 'Personal', value: 'Personal'},
    {label: 'Company', value: 'Company'},
  ];
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  // ******************************************************************

  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  //Firstname Validation
  const validateFirstName = text => {
    setFname(text);
    const fNameRegex = /^[A-Za-z]+$/;
    
    if (text.length === 0) {
      setFnameError('First name required.');
    } else if (!fNameRegex.test(text)) {
      setFnameError('Invalid first name.');
    } else if (text.length < 3) {
      setFnameError('First name too short!');
    } 
     else {
      setFnameError('');
    } 
  };


  //Lastname Validation
  const validateLastName = text => {
    setLname(text);
    const lNameRegex = /^[A-Za-z]+$/;
    if (text.length === 0) {
      setLnameError('Last name required.');
    } else if (!lNameRegex.test(text)) {
      setLnameError('Invalid last name.');
    } else if (text.length < 3) {
      setLnameError('Last name too short!');
    } else {
      setLnameError('');
    }
  };

  //Validate Role
  const validateRole = () => {
    if (role == null) {
      setRoleError('Select your role.');
    } else {
      setRoleError('');
    }
  };

  //Email Validation

  const validateEmail = text => {
    setEmail(text);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (text.length === 0) {
      setEmailError('Enter your email address.');
    } else if (!emailRegex.test(text)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };

  //Zipcode Validation

  const validateZipCode = num => {
    setZip(num);
    const zipRegex = /^\d{6}$/;
    if (num.length === 0) {
      setZipError('Please enter Zipcode.');
    } else if (!zipRegex.test(num)) {
      setZipError('Invalid Zipcode.');
    } else if (num.length < 6) {
      setZipError('Zipcode should be 6 digits number.');
    } else {
      setZipError('');
    }
  };

  //City Validation

  const validateCity = text => {
    setCity(text);
    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (text.length === 0) {
      setCityError('Please enter city name.');
    } else if (!cityRegex.test(text)) {
      setCityError('Invalid city name.');
    } else if (text.length < 3) {
      setCityError('City name is too short!');
    } else {
      setCityError('');
    }
  };

  //Password Validation

  const validatePass = text => {
    setPass(text);
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (text.length === 0) {
      setPassError('Please enter the password.');
    } else if (!passRegex.test(text)) {
      setPassError(
        'Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character.',
      );
    } else if (text.length < 8) {
      setPassError('Password must conatin atleast 8 characters.');
    } else {
      setPassError('');
    }
  };

  //Confirm Password Validation

  const validateConfirmPass = text => {
    setCpass(text);
    if (pass != text) {
      setCpassError('Password does not match.');
    } else {
      setCpassError('');
    }
  };

  const handleSubmit = () => {
    validateRole()
    if (!fname) {
      setFnameError('First name is required.');
    }
    if (!lName) {
      setLnameError('Last name is required.');
    }
    if (!email) {
      setEmailError('Email address is required.');
    }
    if (role == null) {
      setRoleError('Select your role.');
    } 
    if (!zip) {
      setZipError('Zipcode is required.');
    }
    if (!city) {
      setCityError('City name is required.');
    }
    if (!pass) {
      setPassError('Password is required.');
    }
    if (!cPass) {
      setCpassError('Confirm password is required.');
    } else {
      changeModalVisible(true);
      setTimeout(() => {
        changeModalVisible(false);
        props.navigation.navigate('OTPScreen');
      }, 1000);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <TouchableOpacity>
              <OTPSuccess title="OTP sent successfully!!" />
            </TouchableOpacity>
          </Modal>
          <Text style={styles.title}>SignUp</Text>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: fnameError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter first name"
            placeholderTextColor={'#707070'}
            value={fname}
            maxLength={12}
            onChangeText={validateFirstName}></TextInput>
          {fnameError ? (
            <Text style={styles.ErrorTxt}>{fnameError}</Text>
          ) : null}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: lNameError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter last name"
            placeholderTextColor={'#707070'}
            value={lName}
            maxLength={12}
            onChangeText={validateLastName}></TextInput>
          {lNameError ? (
            <Text style={styles.ErrorTxt}>{lNameError}</Text>
          ) : null}
          <Dropdown
            style={[
              styles.dropdown,
              {borderColor: roleError ? 'red' : '#828282'},
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Role Status"
            onConfirmSelectItem={validateRole}
            onChange={item => {
              setRole(item.value);
            }}
            renderItem={renderItem}
          />
          {roleError ? (
          <Text style = {styles.ErrorTxt}>{roleError}</Text>
        ):null}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: emailError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter email address"
            placeholderTextColor={'#707070'}
            value={email}
            onChangeText={validateEmail}></TextInput>
          {emailError ? (
            <Text style={styles.ErrorTxt}>{emailError}</Text>
          ) : null}
          <DateOfBirth />
          <CountryDropdown />
          <StateDropdown />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: zipError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter zipcode"
            placeholderTextColor={'#707070'}
            value={zip}
            maxLength={6}
            onChangeText={validateZipCode}></TextInput>
          {zipError ? <Text style={styles.ErrorTxt}>{zipError}</Text> : null}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: cityError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter city name"
            placeholderTextColor={'#707070'}
            value={city}
            onChangeText={validateCity}
            maxLength={16}></TextInput>
          {cityError ? <Text style={styles.ErrorTxt}>{cityError}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Enter referral ID (Optional)"
            placeholderTextColor={'#707070'}></TextInput>

          <TextInput
            style={[
              styles.input,
              {
                borderColor: passError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter password"
            placeholderTextColor={'#707070'}
            // secureTextEntry={true}
            maxLength={16}
            value={pass}
            onChangeText={validatePass}></TextInput>
          {passError ? <Text style={styles.ErrorTxt}>{passError}</Text> : null}

          <TextInput
            style={[
              styles.input,
              {
                borderColor: cPassError ? 'red' : '#828282',
              },
            ]}
            placeholder="Enter confirm password"
            placeholderTextColor={'#707070'}
            // secureTextEntry={true}
            value={cPass}
            onChangeText={validateConfirmPass}></TextInput>
          {cPassError ? (
            <Text style={styles.ErrorTxt}>{cPassError}</Text>
          ) : null}

          <View style={{flexDirection: 'row', marginTop: height * 0.03}}>
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
            <Text style={styles.text}>
              By clicking you are confirming to agree{' '}
              <Text
                style={{color: '#1069C2'}}
                onPress={() => props.navigation.naviagte('TnC')}>
                Terms and condition{' '}
              </Text>{' '}
              &{' '}
              <Text
                style={{color: '#1069C2'}}
                onPress={() => props.navigation.naviagte('Pnp')}>
                {' '}
                Privacy policy
              </Text>
            </Text>
          </View>

          <Button
            title="SUBMIT"
            onPress={handleSubmit}
            disabled={isChecked ? false : true}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: height * 0.02,
              paddingBottom: height * 0.1,
            }}>
            <Text style={styles.NewText}>New on our platform? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LoginPage')}>
              <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EAEAEA',
    height: height,
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  title: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: '#929292',
    textAlign: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#828282',
    color: '#707070',
    width: width * 0.9,
    height: height * 0.08,
    borderRadius: 10,
    marginTop: height * 0.03,
    backgroundColor: '#DBDBDB',
    paddingLeft: width * 0.05,
    fontSize: height * 0.02,
  },
  text: {
    fontSize: height * 0.018,
    color: '#929292',
    fontWeight: 400,
  },
  NewText: {
    color: '#929292',
    fontWeight: 400,
    fontSize: height * 0.018,
    // paddingBottom: height * 0.09,
  },
  LoginText: {
    fontWeight: 700,
    fontSize: height * 0.018,
    color: '#1069C2',
    // paddingBottom: height * 0.09,
  },
  ErrorTxt: {
    color: 'red',
    fontSize: height * 0.018,
  },
  dropdown: {
    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: '#DBDBDB',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#828282',
    marginTop: height * 0.03,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.02,
    shadowColor: '#000',
  },
  item: {
    padding: width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DBDBDB',
    color: '#707070',
  },
  textItem: {
    flex: 1,
    fontSize: height * 0.018,
  },
  placeholderStyle: {
    fontSize: height * 0.018,
    color: '#707070',
  },
  selectedTextStyle: {
    fontSize: height * 0.018,
    color: '#707070',
    fontFamily: 'Poppins',
  },
  iconStyle: {
    width: width * 0.08,
    height: height * 0.02,
  },
});
