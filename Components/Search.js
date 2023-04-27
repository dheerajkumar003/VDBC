import {StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const{width, height} = Dimensions.get('window');

const Search = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{marginLeft: width * 0.05, marginTop: height * 0.015}}
        source={require('../Images/search.png')}
      />
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({

});
