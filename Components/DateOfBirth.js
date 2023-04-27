import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const {width, height} = Dimensions.get('window');
const DateOfBirth = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    // console.warn('Date: ', date);
    setBirthDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.dob}
        placeholderTextColor={'#707070'}
        defaultValue={birthDate.toLocaleDateString()}
        editable={false}
      />

      <TouchableOpacity onPress={showDatePicker}>
        <Image
          style={styles.calender}
          source={require('../Images/calender.png')}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date('1923-01-01')}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DateOfBirth;

const styles = StyleSheet.create({
  text: {
    color: '#707070',
    fontSize: height * 0.018,
    fontWeight: 400,
  },
  dob: {
    color: '#707070',
    width: width * 0.9,
    height: height * 0.08,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#828282',
    backgroundColor: '#DBDBDB',
    marginTop:height * 0.03,

    paddingLeft:width * 0.05,
    alignContent: 'center',
  },
  calender: {
    position: 'absolute',
    width: width * 0.08,
    height: height * 0.04,
    marginTop: height * -0.06,
    marginLeft: width * 0.77,
  },
});
