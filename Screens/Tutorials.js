import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const Tutorials = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();
  const data = [
    {
      1: <Image style={styles.pics} source={require('../Images/Group1.png')} />,
    },
    {
      1: <Image style={styles.pics} source={require('../Images/Group2.png')} />,
    },
    {
      1: (
        <Image
          style={{width: width * 0.9, height: height * 0.45}}
          source={require('../Images/Group3.png')}
        />
      ),
    },
    {
      1: (
        <Image
          style={{width: width * 0.9, height: height * 0.4, marginLeft: 5}}
          source={require('../Images/Group4.png')}
        />
      ),
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.SkpBtn}
          onPress={() => props.navigation.navigate('LoginPage')}>
          <Text style={styles.txt}>Skip</Text>
        </TouchableOpacity>
        <FlatList
          ref={ref}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: height * 0.05,
                }}>
                {item[1]}
              </View>
            );
          }}
        />
        <Text style={styles.title}>VDBC BANK</Text>
        <Text style={styles.info}>
          Enjoy the better way on trade just {'\n'}on your phone.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: width * 0.9,
            // backgroundColor:'red',
          }}>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  width: width * 0.025,
                  height: height * 0.013,
                  backgroundColor:
                    currentIndex == index ? '#00b0ed' : '#4f4f4f',
                  borderRadius: 5,
                  marginLeft: width * 0.03,
                  marginVertical: height * 0.04,
                }}></View>
            );
          })}
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: height * 0.05,
            }}>
            {currentIndex == 0 || currentIndex == data.length - 1 ? null : (
              <TouchableOpacity
                style={{
                  backgroundColor: '#646464',
                  width: width * 0.4,
                  height: height * 0.09,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  setCurrentIndex(currentIndex - 1);
                  ref.current.scrollToIndex({
                    animated: true,
                    index: parseInt(currentIndex) - 1,
                  });
                }}>
                <Text style={styles.text}>Previous</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => {
                currentIndex < 3
                  ? (setCurrentIndex(currentIndex + 1),
                    ref.current.scrollToIndex({
                      animated: true,
                      index: parseInt(currentIndex) + 1,
                    }))
                  : props.navigation.navigate('LoginPage');
              }}>
              <LinearGradient
                colors={['#00ACEB', '#00B0ED', '#1069C2', '#1069C2']}
                style={{
                  width:
                    currentIndex == 0 || currentIndex == data.length - 1
                      ? width * 0.9
                      : width * 0.4,
                  height: height * 0.09,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                {data.length - 1 == currentIndex ? (
                  <Text style={styles.text}>Get Started</Text>
                ) : (
                  <Text style={styles.text}>Next</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tutorials;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EAEAEA',
    height: height,
  },
  container: {
    marginHorizontal: height * 0.026,
    marginVertical: height * 0.025,
  },
  pics: {
    width: width * 0.9,
    height: height * 0.46,
  },
  SkpBtn: {
    alignItems: 'flex-end',
  },
  txt: {
    color: '#4f4f4f',
    fontWeight: 400,
    fontSize: height * 0.023,
  },
  title: {
    color: '#4f4f4f',
    fontWeight: 700,
    fontSize: height * 0.03,
    textAlign: 'center',
    marginVertical: height * 0.03,
  },
  info: {
    color: '#4f4f4f',
    fontWeight: 400,
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: height * 0.024,
    fontWeight: 600,
  },
});
