import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LinearGradient,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('window');

const DocsVerification = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image 
             style={styles.backBtn} 
            source={require('../Images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.heading}>KYC Verificatiion</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <Text>Presonal Details</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Presonal Details</Text>
            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default DocsVerification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  container: {
    marginHorizontal: width * 0.05,
  },
  backBtn: {
    marginTop: height * 0.015,
  },
  heading: {
    color: '#4F4F4F',
    fontSize: height * 0.03,
    fontFamily: 'Poppins',
    fontWeight: 700,
    marginHorizontal: width * 0.22,
  },
});
