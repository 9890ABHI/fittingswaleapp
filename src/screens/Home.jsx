import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../assets/Theme';
import {HomeData} from '../assets/Constants/data';
import {Card} from '../componets/Card';
import Slider from '../componets/Slider';
import {HeadText} from '../componets/HeadText';

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: COLORS.white,
        }}>
        <View>
          <View>
            {/* <Header/> */}
            {/* <Text>Slider</Text> */}
            <Slider />
            {/* <Text>Skadoosh</Text> */}
            <View
              style={{
                width: '100%',
                display: 'flex',
                // justifyContent:"flex-star"
                alignItems: 'flex-start',
                paddingHorizontal: 20,
                paddingTop: 20,
                backgroundColor: COLORS.white,
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.black,
                  }}>
                  Latest Arrival
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.red,
                    }}>
                    .
                  </Text>{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: COLORS.white,
              }}>
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
                {HomeData.map((item, i) => (
                  <>
                    <Card navigation={navigation} item={item} key={i} />
                  </>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingVertical: 20,
            paddingTop: 60,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.black,
              }}>
              Get started in 3 simple steps.
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                borderWidth: 2,
                width: '96%',
                borderColor: COLORS.gray2,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 20,
                top: 30,
              }}
            />
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                zIndex: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: COLORS.Primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.black,
                    }}>
                    1
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                  }}>
                  create Account
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: COLORS.Primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.black,
                    }}>
                    2
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                  }}>
                  Complete
                </Text>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                  }}>
                  Business Profile
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: COLORS.Primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                  }}>
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.black,
                    }}>
                    3
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                  }}>
                  Start Buying
                </Text>
              </View>
            </View>
          </View>
          <View></View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.Primary,
              paddingVertical: 15,
              paddingHorizontal: 35,
              borderRadius: 10,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <View>
        <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',,
                  paddingHorizontal:20,
                  paddingVertical:10
                }}>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.black,
                  }}>
                  In The SpotLight
                  <Text
                    style={{
                      ...FONTS.h1,
                      color: COLORS.red,
                    }}>
                    .
                  </Text>{' '}
                </Text>
              </View>
              <View style={{
                display:'flex',
                flexWrap:'wrap',
                flexDirection:"row",
                gap:10,
                justifyContent:'center'
              }}>

              {HomeData.slice(0,3).map((item , i) => (
                <>
                <Card item={item} key={i} />
                </>
              ))}
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
