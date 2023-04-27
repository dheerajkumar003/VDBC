import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useEffect } from 'react';
import Search from '../Components/Search';
import Theme from '../Components/Theme';
import Headphone from '../Components/Headphone';
import Notification from '../Components/Notification';
import User from '../Components/User';
import { NotificationServices, requestUserPermission } from '../src/utils/PushNotifications';

const {width, height} = Dimensions.get('window');

const Home = () => {
  useEffect(() =>{
    requestUserPermission()
    NotificationServices()
  },[])
  const data = [
    {
      1: (
        <Image
          style={styles.home1}
          source={require('../Images/home1.png')}
        />
      ),
    },
    {
      1: (
        <Image
          style={styles.home2}
          source={require('../Images/home2.png')}
        />
      ),
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
         <User/>
          <View style={{flexDirection: 'row', marginLeft: width * 0.35}}>
            <Search />
            <Theme />
            <Headphone />
            <Notification />
          </View>
        </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={{marginVertical: height * 0.025}}>{item[1]}</View>
              </View>
            );
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>Top Coin</Text>
          <TouchableOpacity>
            <Image
              style={{
                marginTop: height * 0.015,
                width: width * 0.055,
              }}
              source={require('../Images/nxtarrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  container: {
    marginTop: height * 0.005,
    marginHorizontal: width * 0.05,
  },
  heading: {
    color: '#4F4F4F',
    fontWeight: 600,
    fontSize: height * 0.028,
  },
  home1:{
    width: width * 0.9, 
    height: height * 0.27, 
    borderRadius: 10
  },
  home2:{
    width: width * 0.9,
    height: height * 0.27,
    borderRadius: 10,
    marginLeft: width * 0.05,
  }
});
