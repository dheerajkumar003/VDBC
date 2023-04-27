import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const {width,height} = Dimensions.get('window'); 


const Button = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity  onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']}
        style={styles.Btn}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
    Btn:{
       width:width*0.9,
       height:height*0.08,
       borderRadius:10,
       alignItems:'center', 
       marginTop:height*0.02,
       shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 6.41,
      elevation: 20,
    },
    title:{
       color:'#FFFFFF',
       fontSize:height*0.025,
       fontFamily:'Poppins',
      //  textAlign:'center',
       alignItems:'center',
       paddingVertical:height*0.02,
      //  alignContent:'center',
       justifyContent:'center',
       fontWeight:700,
    },
})
