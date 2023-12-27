import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../assets/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <>
      {/* <SafeAreaView> */}
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 15,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 5,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              ...FONTS.h1,
              fontSize: 45,
              color: '#000',
            }}>
            Fittings
          </Text>
          <Text
            style={{
              ...FONTS.body1,
              fontSize: 35,
              color: 'red',
              paddingLeft: 5,
            }}>
            Wale.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 0,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              width: '100%',
              borderRadius: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              paddingHorizontal: 10,
              gap: 10,
              width: '100%',
            }}>
            <Icon name="search" color={COLORS.gray} size={30} />
            <TextInput
              style={{
                backgroundColor: '#f0f0f0',
                ...FONTS.h3,
                color: COLORS.black,
                padding: 0,
                width: '75%',
              }}
              type="text"
              placeholder="Search for Products"
              placeholderTextColor={COLORS.black}
              // keyboardType="Text"
            />
            <Icon name="close" color={COLORS.gray} size={30} />
          </View>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export const AuthHeader = () => {
  // const [text, onChangeText] = React.useState('');
  return (
    <>
      <View
        style={{
          paddingVertical: 0,
          paddingHorizontal: 15,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 5,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              ...FONTS.h1,
              fontSize: 45,
              color: '#000',
            }}>
            Fittings
          </Text>
          <Text
            style={{
              ...FONTS.body1,
              fontSize: 35,
              color: 'red',
              paddingLeft: 5,
            }}>
            Wale.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 0,
            paddingHorizontal: 10,
          }}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
