import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SettingHeadText } from '../../componets/HeadText'

const Rating = () => {
  return (
    <>
    <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          
            <SettingHeadText title={'Rating'} />
            
              <View>


              </View>
    </View>
    </ScrollView>
    </>
  )
}

export default Rating