import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SettingHeadText } from '../../componets/HeadText'

const Coupons = () => {
  return (
    <>
    <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          
            <SettingHeadText title={'Coupons'} />
            
              <View>


              </View>
    </View>
    </ScrollView>
    </>
  )
}

export default Coupons