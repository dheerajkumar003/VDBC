import {Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

export default function OTPSuccess({title, }) {
  return (
    <View style={styles.main}>
      <View style={styles.container}> 
         
          <Text style ={styles.title}>{title}</Text>
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  container:{
    height:height*0.13,
    backgroundColor: '#128d1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize:height*0.03,
    fontWeight: 700,
  }
});
