import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SettingHeadText} from '../../componets/HeadText';
import {COLORS, FONTS} from '../../assets/Theme';
import Icons from 'react-native-vector-icons/AntDesign';
import HistoryIcons from 'react-native-vector-icons/FontAwesome5';
import ShareIcons from 'react-native-vector-icons/Feather';
// import ShareIcons from 'react-native-vector-icons/EvilIcons';
import { Images } from '../../assets/Image';
const StarCoins = () => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              display: 'flex',
              // flexDirection:'row',
              // alignItems:'center',
              // justifyContent:'space-between',
              paddingHorizontal: 0,
            }}>
            <SettingHeadText title={'StarCoins'} />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.darkGray,
                }}>
                Your StarCoins Balance{' '}
              </Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.red,
                }}>
                {' '}
                :
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Icons name="staro" size={35} color={COLORS.red} />
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                  paddingTop: 10,
                }}>
                1000
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
              }}>
              <TouchableOpacity
                style={{
                  display: 'flex',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: COLORS.red,
                  borderRadius: 10,
                  width: '70%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  justifyContent:'center'
                }}>
                <HistoryIcons name="history" size={30} color={COLORS.red} />
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.darkGray,
                  }}>
                  Your StarCoins History
                </Text>
              </TouchableOpacity>
            </View>
            <Image
            //  source={{uri:Images.StarCoins}} 
            source={Images.StarCoins}
            // src={Images.StarCoins}\w
            width={100}
            height={100}
             style={{
              // width:,
              width:"100%",
              height:100,
              objectFit:'contain'
            }}  />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.darkGray,
                }}>
                Refer & Earn {' '}
              </Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.red,
                }}>
                {' '}
                :
              </Text>

            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                // paddingTop: 10,
                alignItems: 'center',
              }}>

  <TouchableOpacity
  
  style={{
    display: 'flex',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 10,
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent:'space-around'
  }}>
    <ShareIcons name="share-2" size={30} color={COLORS.red} />
    <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.darkGray,
                  // paddingTop:
                }}>
                Refer 
              </Text>

  </TouchableOpacity>      
            <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                  width:'70%',
                  letterSpacing:1.5,
                  textAlign:'right'
                }}>
                Earn upto {'  '}
                <Text style={{
                  color: COLORS.red,
                  
                }}>

                1000
                </Text>
                 StarCoins
              </Text>
                </View>
                <View>
                <Text style={{
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                  textAlign:"justify",
                  // fontFamily:''
                }}>

                Refer your friends and earn 100 StarCoinss per refer when your friends purchase more than ₹10000 you will get 100 StarCoins
                </Text>
                </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default StarCoins;
