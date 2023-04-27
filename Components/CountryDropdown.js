import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
const data = [
  {label: 'Afghanistan', value: 'Afghanistan'},
  {label: 'Albania', value: 'Albania'},
  {label: 'Algeria', value: 'Algeria'},
  {label: 'Andorra', value: 'Andorra'},
  {label: 'Angola', value: 'Angola'},
  {label: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},
  {label: 'Argentina', value: 'Argentina'},
  {label: 'Armenia', value: 'Armenia'},
  {label: 'Australia', value: 'Australia'},
  {label: 'Austria', value: 'Austria'},
  {label: 'Azerbaijan', value: 'Azerbaijan'},
  {label: 'Bahamas', value: 'Bahamas'},
  {label: 'Bahrain', value: 'Bahrain'},
  {label: 'Bangladesh', value: 'Bangladesh'},
  {label: 'Barbados', value: 'Barbados'},
  {label: 'Belarus', value: 'Belarus'},
  {label: 'Belgium', value: 'Belgium'},
  {label: 'Belize', value: 'Belize'},
  {label: 'Benin', value: 'Benin'},
  {label: 'Bhutan', value: 'Bhutan'},
  {label: 'Bolivia', value: 'Bolivia'},
  {label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina'},
  {label: 'Botswana', value: 'Botswana'},
  {label: 'Brazil', value: 'Brazil'},
  {label: 'Brunei', value: 'Brunei'},
  {label: 'Bulgaria', value: 'Bulgaria'},
  {label: 'Burkina Faso', value: 'Burkina Faso'},
  {label: 'Burundi', value: 'Burundi'},
  {label: 'CôtedIvoire', value: 'CôtedIvoire'},
  {label: 'Cabo Verde', value: 'Cabo Verde'},
  {label: 'Cambodia', value: 'Cambodia'},
  {label: 'Cameroon', value: 'Cameroon'},
  {label: 'Canada', value: 'Canada'},
  {label: 'Central African Republic', value: 'Central African Republic'},
  {label: 'Chad', value: 'Chad'},
  {label: 'Chile', value: 'Chile'},
  {label: 'China', value: 'China'},
  {label: 'Colombia', value: 'Colombia'},
  {label: 'Comoros', value: 'Comoros'},
  {label: 'Congo (Congo-Brazzaville)', value: 'Congo (Congo-Brazzaville)'},
];
const {width, height} = Dimensions.get('window');

const CountryDropdown = () => {
  const [value, setValue] = useState('');

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
      placeholder="Select Country"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default CountryDropdown;

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
