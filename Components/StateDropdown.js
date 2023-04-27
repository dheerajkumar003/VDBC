import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
    {label: 'Andhra Pradesh', value: 'Andhra Pradesh'},
    {label: 'Arunachal Pradesh', value: 'Arunachal Pradesh'},
    {label: 'Assam', value: 'Assam'},
    {label: 'Bihar', value: 'Bihar'},
    {label: 'Chhattisgarh', value: 'Chhattisgarh'},
    {label: 'Goa', value: 'Goa'},
    {label: 'Gujarat', value: 'Gujarat'},
    {label: 'Himachal Pradesh', value: 'Himachal Pradesh'},
    {label: 'Jammu and Kashmir', value: 'Jammu and Kashmir'},
    {label: 'Jharkhand', value: 'Jharkhand'},
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Kerala', value: 'Kerala'},
    {label: 'Madhya Pradesh', value: 'Madhya Pradesh'},
    {label: 'Maharashtra', value: 'Maharashtra'},
    {label: 'Manipur', value: 'Manipur'},
    {label: 'Meghalaya', value: 'Meghalaya'},
    {label: 'Mizoram', value: 'Mizoram'},
    {label: 'Nagaland', value: 'Nagaland'},
    {label: 'Nagaland', value: 'Nagaland'},
    {label: 'Kerala', value: 'Kerala'},
    {label: 'Punjab', value: 'Punjab'},
    {label: 'Rajasthan', value: 'Rajasthan'},
    {label: 'Sikkim', value: 'Sikkim'},
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Telangana', value: 'Telangana'},
    {label: 'Tripura', value: 'Tripura'},
    {label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
    {label: 'Uttarakhand', value: 'Uttarakhand'},
    {label: 'West Bengal', value: 'West Bengal'},
];
const {width, height} = Dimensions.get('window');
const StateDropdown = () => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select State"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default StateDropdown;

const styles = StyleSheet.create({
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
  icon: {
    marginRight: 5,
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
