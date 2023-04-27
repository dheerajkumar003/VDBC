import {View, Text, FlatList,StyleSheet,Image,TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RequstAPI} from '../Components/APIs';


const {width, height} = Dimensions.get('window');
const Pnp = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState('');
  const getData = async () => {
    await RequstAPI().then(res => {
      const data = res.data.result.docs;
      setData(data.filter(item => item.type == 'Privacypolicy')[0].description);
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.backBtn}>
            <Image
              style={styles.backBtn}
              source={require('../Images/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Privacy & Policy</Text>
        </View>
        <View style={{marginTop: height * 0.02}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
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

export default Pnp;

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
        marginTop:height*0.008,
      },
      title: {
        color: '#4F4F4F',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: width*0.22,
      },
})