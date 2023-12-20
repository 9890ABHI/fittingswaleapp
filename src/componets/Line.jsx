import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/Theme'

const Line = () => {
  return (
   <>
   <View style={{
                paddingVertical:5,
                paddingHorizontal:10
            }}> 

            <View  style={{
                width:'100%',
                borderWidth:0.5,
                borderColor:COLORS.gray,
            }}/>
            </View>
   </>
  )
}

export default Line

const styles = StyleSheet.create({})