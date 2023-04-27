import {StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
const{width, height} = Dimensions.get('window');

const Headphone = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{marginLeft: width * 0.05, marginTop: height * 0.012}}
        source={require('../Images/headphone.png')}
      />
    </TouchableOpacity>
  );
};

export default Headphone;

const styles = StyleSheet.create({});
