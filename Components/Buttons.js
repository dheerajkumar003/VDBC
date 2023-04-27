import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Buttons() {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity style={styles.PreBtn}>
        <Text style={styles.txt}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient colors={['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']}
        style={styles.NxtBtn}>
          <Text style={styles.txt}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    PreBtn:{
      backgroundColor:'#646464',
      borderRadius:10,
      width:responsiveWidth(35),
      height:responsiveHeight(9),
      alignItems:'center',
      justifyContent:'center',
    },
    NxtBtn:{
      borderRadius:10,
      width:responsiveWidth(35),
      height:responsiveHeight(9),
      alignItems:'center',
      justifyContent:'center',
    },
    txt:{
      fontWeight:600,
      color:'#FFFFFF',
      fontSize:responsiveFontSize(2.5),
    }
})
