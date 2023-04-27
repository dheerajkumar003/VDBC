import {Dimensions, StyleSheet, Text, View  } from 'react-native'
import React from 'react'

const{width, height} = Dimensions.get('window');


const Exchange = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>Exchange</Text>
      </View>
    </View>
  )
}

export default Exchange

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#EAEAEA',
  },
  container:{
    marginHorizontal: width*0.05,
  },
})