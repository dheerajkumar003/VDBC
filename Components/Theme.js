import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
const{width, height} = Dimensions.get('window');

const Theme = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Image
      style={{marginLeft: width * 0.05, marginTop: height * 0.014}}
      source={require('../Images/mode.png')}
    />
  </TouchableOpacity>
  )
}

export default Theme

const styles = StyleSheet.create({})