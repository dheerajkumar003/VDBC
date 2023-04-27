import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');

const Docs = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Image
      style={{marginTop: height * 0.014}}
      source={require('../Images/doc.png')}
    />
  </TouchableOpacity>
  )
}

export default Docs

const styles = StyleSheet.create({})