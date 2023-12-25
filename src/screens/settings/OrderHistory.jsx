import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SettingHeadText } from '../../componets/HeadText'
import { COLORS,FONTS } from '../../assets/Theme'
import { HomeData } from '../../assets/Constants/data'
import { CartCard } from '../../componets/Card'

const OrderHistory = () => {
  const cart = HomeData
  return (
    <>
    <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          
            <SettingHeadText title={'Order History'} />
            
              <View>
                {<FlatList 
     data={cart.slice(0,2)}
     keyExtractor={i => i.id}
     renderItem={({item}) => 
       <>
       <View style={{
        paddingVertical:10
       }}>

     <CartCard item={item} OrderHistory />
       </View>
      </>
     }
     style={{
      display:'flex',
      flexDirection:'column',
      paddingHorizontal:10,
     }}
     
     />}
              </View>
              </View>
              </ScrollView>
    </>
  )
}

export default OrderHistory