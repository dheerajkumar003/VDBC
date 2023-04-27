import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import RoleDropdown from '../Components/RoleDropdown';
import StateDropdown from '../Components/StateDropdown';
import CountryDropdown from '../Components/CountryDropdown';
import CheckBox from 'react-native-check-box';
import Button from '../Components/Button';
import DateOfBirth from '../Components/DateOfBirth';

const {width, height} = Dimensions.get('window');

const SignUpCompany = props => {
  const [isChecked, setIsChecked] = useState('');
  const [fName, setFname] = useState('');
  const [fnameError, setFnameError] = useState('');
  const [lName, setLname] = useState('');
  const [lNameError, setLnameError] = useState('');
  const [compName, setCompName] = useState('');
  const [compError, setCompError] = useState('');
  const [taxId, setTaxId] = useState('');
  const [taxIdError, setTaxIdError] = useState('');
  const [regNo, setRegNo] = useState('');
  const [regNoError, setRegNoError] = useState('');


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
  

  //Firstname Validation

  const validateFirstName = text => {
    setFname(text);
    const fNameRegex = /^[A-Z][a-z]$/;
    if (text.length === 0) {
      setFnameError('First name required.');
    } else if (fNameRegex.test(text)) {
      setFnameError('Invalid first name.');
    } else if (text.length < 3) {
      setFnameError('First name too short!');
    } else {
      setFnameError('');
    }
  };

  //Lastname Validation

  const validateLastName = text => {
    setLname(text);
    const fNameRegex = /^[A-Z][a-z]$/;
    if (text.length === 0) {
      setLnameError('Last name required.');
    } else if (fNameRegex.test(text)) {
      setLnameError('Invalid last name.');
    } else if (text.length < 3) {
      setLnameError('Last name too short!');
    } else {
      setLnameError('');
    }
  };

  //CompanyName Validation 

  const validateCompanyName = text =>{
    setCompName(text);
    const compRegex = /^[A-Za-z0-9\s&.,-]+$/;
    if (text.length === 0) {
      setCompError('Company name required.');
    } else if (!compRegex.test(text)) {
      setCompError('Invalid company name.');
    } else if (text.length < 3) {
      setCompError('Company name too short!');
    } else {
      setCompError('');
    }
  }
  const validateTaxId = text =>{
    setTaxId(text);
    const taxRegex = /^\d{11}$/;
    if (text.length === 0) {
      setTaxIdError('TAX ID required.');
    } else if (!taxRegex.test(text)) {
      setTaxIdError('Invalid TAX ID.');
    } else if (text.length < 11) {
      setTaxIdError('TAX ID should be 11 digits.');
    } else {
      setTaxIdError('');
    }
  }

  const validateRegNo = text =>{
    setRegNo(text);
    const regNoRegex = /^[LU]\d{5}[A-Z]{2}\d{4}[A-Z0-9]{6}$/;
    if (text.length === 0){
      setRegNoError('Registration number is required.');
    } else if (!regNoRegex.test(text)){
      setRegNoError('Invalid registration number.');
    } else if (text.length < 18){
      setRegNoError('Registration is incomplete.');
    } else {
      setRegNoError('');
    }
  }

 
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

    if (!fName) {
      setFnameError('First name is required.');
    }
    if (!lName) {
      setLnameError('Last name is required.');
    }
    if (!email) {
      setEmailError('Email address is required.');
    }
    if (!compName){
      setCompError('Company name is required.')
    }
    if (!taxId){
      setTaxIdError('TAX ID is required.')
    }
    if(!regNo){
      setRegNoError('Registration number is required.')
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
            value={fName}
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
            onChangeText={validateLastName}></TextInput>
          {lNameError ? (
            <Text style={styles.ErrorTxt}>{lNameError}</Text>
          ) : null}
          <RoleDropdown />
          <TextInput
            style={[
              styles.input,
              {
                borderColor: compError ? 'red' : '#828282',
              },
            ]}
            placeholder="Company name"
            placeholderTextColor={'#707070'}
            value={compName}
            onChangeText={validateCompanyName}></TextInput>
            {compError ? (<Text style={styles.ErrorTxt}>{compError}</Text>):null}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: taxIdError ? 'red' : '#828282',
              },
            ]}
            placeholder="TAX ID"
            keyboardType="numeric"
            maxLength={11}
            placeholderTextColor={'#707070'}
            value={taxId}
            onChangeText={validateTaxId}></TextInput>
            {taxIdError ? (<Text style={styles.ErrorTxt}>{taxIdError}</Text>):null}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: '#828282',
              },
            ]}
            placeholder="Registration number"
            placeholderTextColor={'#707070'}
            keyboardType="default"
            value={regNo}
            onChangeText={validateRegNo}></TextInput>
            {regNoError ? (<Text style={styles.ErrorTxt}>{regNoError}</Text>): null}
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
            maxLength={6}
            value={zip}
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
            onChangeText={validateCity}></TextInput>
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
            secureTextEntry={true}
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
            secureTextEntry={true}
            value={cPass}
            onChangeText={validateConfirmPass}></TextInput>
            {cPassError ? (
            <Text style={styles.ErrorTxt}>{cPassError}</Text>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              marginTop: height * 0.03,
            }}>
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
                Privacy policy
              </Text>
            </Text>
          </View>
          <Button title="SUBMIT" onPress={handleSubmit} />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              padding: height * 0.02,
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

export default SignUpCompany;

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
  },
  LoginText: {
    fontWeight: 700,
    fontSize: height * 0.018,
    color: '#1069C2',
  },
  ErrorTxt: {
    color: 'red',
    fontSize: height * 0.018,
  },
});
