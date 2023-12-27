import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SettingHeadText } from '../../componets/HeadText'

export const Setting = () => {
  return (
    <>
    <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          
            <SettingHeadText title={'Setting'} />
            
              <View>


              </View>
    </View>
    </ScrollView>
    </>
  )
}




const styles = StyleSheet.create({})