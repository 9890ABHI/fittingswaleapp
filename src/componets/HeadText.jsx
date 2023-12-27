import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../assets/Theme'

export const HeadText = ({title}) => {
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text
      style={{
        ...FONTS.h2,
        color:COLORS.black
      }}
      >{title}<Text 
      style={{
        ...FONTS.h1,
        color:COLORS.red
      }}>
        .</Text> </Text>
    </View>
  )
}

export const SettingHeadText = ({title})=> {
  return(
    <>
    <View style={{
        display:'flex',
    }}>
      <Text
      style={{
        ...FONTS.h1,
        color:COLORS.gray
      }}
      >{title}<Text 
      style={{
        ...FONTS.h1,
        color:COLORS.red
      }}>
        .</Text> </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({})