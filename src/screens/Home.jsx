import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../assets/Theme';
import {HomeData} from '../assets/Constants/data';
import {Card} from '../componets/Card';
import Slider from '../componets/Slider';
import { HeadText } from '../componets/HeadText';


const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View>
          <View>
            {/* <Header/> */}
            {/* <Text>Slider</Text> */}
            <Slider/>
            {/* <Text>Skadoosh</Text> */}
<View style={{
  width:'100%',
  display:'flex',
  // justifyContent:"flex-star"
  alignItems:'flex-start',
  paddingHorizontal:20,
  paddingTop:20,
  backgroundColor:COLORS.white
}}>

<View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text
      style={{
        ...FONTS.h1,
        color:COLORS.black
      }}
      >Latest Arrival<Text 
      style={{
        ...FONTS.h1,
        color:COLORS.red
      }}>
        .</Text> </Text>
    </View>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor:COLORS.white
              }}>
              {/* <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                }}>
                Latest Arrival
              </Text> */}
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  paddingHorizontal: 0,
                  paddingVertical: 10,
                  gap: 20,
                  justifyContent: 'center',
                }}>
                {HomeData.map((item , i) => (
                  <>
                    <Card navigation={navigation} item={item} key={i}  />
                  </>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  quicksandLight: {
    fontFamily: 'Quicksand-Light',
    fontSize: 20,
  },

  poppinsblack: {
    fontFamily: 'Poppins-Black',
    fontSize: 20,
  },
  poppinsregular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});
