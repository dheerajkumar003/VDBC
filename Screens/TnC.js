import {Image, View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RequstAPI} from '../Components/APIs';

const {width, height} = Dimensions.get('window');

const TnC = () => {
  const [data, setData] = useState('');
  const getData = async () => {
    await RequstAPI().then(res => {
      const data = res.data.result.docs;
      setData(
        data.filter(item => item.type == 'TermsConditions')[0].description,
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={StyleSheet.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={styles.backBtn}
              source={require('../Images/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Terms & Conditions</Text>
        </View>
        <View style={{marginTop: height * 0.02}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={() => {
              return (
                <Text
                  style={{
                    color: '#4f4f4f',
                    textAlign: 'justify',
                    fontSize: height * 0.02,
                    lineHeight: height * 0.03,
                  }}>
                  {data}
                </Text>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TnC;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#EAEAEA',
        height: height,
      },
      container: {
        width:width*0.9,
        marginHorizontal:width*0.05,
        marginVertical:height*0.03,
      },
      backBtn: {
        width:width* 0.030,
        height:height*0.020,
        marginTop:height*0.011,
      },
      title: {
        color: '#4F4F4F',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: width*0.17,
      },
})
