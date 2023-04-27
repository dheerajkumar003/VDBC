import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
const{width, height} = Dimensions.get('window');

const Notification = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{marginLeft: width * 0.05, marginTop: height * 0.014}}
        source={require('../Images/bell.png')}
      />
    </TouchableOpacity>
  )
}

export default Notification

const styles = StyleSheet.create({

})