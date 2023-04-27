import {Image, StatusBar, StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

const {width, height} = Dimensions.get('window');
export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('DocsVerification');
    }, 1000);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#EAEAEA'} />
        <Image source={require('../Images/logo.png')} />
        <Text style={styles.title}>VDBC BANK</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
  title: {
    color: '#4f4f4f',
    fontSize: height*0.035,
    marginVertical: height*0.02,
    fontWeight: 700,
  },
});
