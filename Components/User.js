import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const{width, height} = Dimensions.get('window');

const User = ({onPress}) => {
  return (
<TouchableOpacity onPress={onPress}>
      <Image
        style={{marginTop: height * 0.0092}}
        source={require('../Images/user.png')}
      />
    </TouchableOpacity>
  )
}

export default User

const styles = StyleSheet.create({})