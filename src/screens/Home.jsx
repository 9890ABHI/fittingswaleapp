import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {COLORS, FONTS} from '../assets/Theme';
import {HomeData} from '../assets/Constants/data';
import {Card} from '../componets/Card';
=======
import { COLORS, FONTS } from '../assets/Theme';
import { HomeData } from '../assets/Constants/data';
import Card from '../componets/Card';
>>>>>>> e7d1c4e73c69138446ad3168ac825728bce79384

const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View>
          <View>
            {/* <Header/> */}
            <Text>Slider</Text>
            {/* <Text>Skadoosh</Text> */}

            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                }}>
                Latest Arrival
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  gap: 20,
                  justifyContent: 'center',
                }}>
                {HomeData.map(item => (
                  <>
                    <Card navigation={navigation} item={item} key={item.id} />
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
