import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
    {label: 'Rupee', value: 'Rupee'},
    {label: 'Dollar', value: 'Dollar'},
  ];
  const {width, height} = Dimensions.get('window');

const Currecncy = () => {
    const [value, setValue] = useState(null);
    const renderItem = item => {
  return (
    <View style={styles.item}>
    <Text style={styles.textItem}>{item.label}</Text>
  </View>
  )
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
      placeholder="Select Currency"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};


export default Currecncy

const styles = StyleSheet.create({
    dropdown: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: '#DBDBDB',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#828282',
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
})