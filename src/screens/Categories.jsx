import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../assets/Theme'
import { Data } from '../assets/Constants/data'
import { Images } from '../assets/Image'
import { HeadText } from '../componets/HeadText'

const Categories = ({navigation}) => {
  return (
    <>
    <ScrollView>

   
    <View>

    <View style={{
      display:'flex',
      alignItems:'flex-start',
      paddingHorizontal:20
    }}>
      {/* <Text style={{
        ...FONTS.h3,
        color:COLORS.black
      }}>Shop By Categories</Text> */}
      <HeadText 
      title={"Shop By Categories"}
      />
    </View>
<View style={{
  display:'flex',
  flexWrap:'wrap',
  flexDirection:'row',
  justifyContent:'center',
  gap:20
}}>

   {
     Data.Category.map((item, i) => (
      <>
      <TouchableOpacity 
      onPress={() => navigation.navigate("DetailsCategory" , {id : item.id,item:item }) }
      key={i}
      >
      <View style={{
        width:150, 
        // height:150,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Image 
        // source={item?.img}
        source={Images.pic1}
        // height={100}
        // width={100}
        resizeMode='cover'
        style={{
          width:100,
          height:100,
          borderRadius:200,
          borderWidth:2,
          borderColor:COLORS.gray3
        }}
        />

      <Text style={{
        ...FONTS.h3,
        textAlign:'center',
        color:COLORS.black
      }}>
        {item.name}
      </Text>
      </View>
      </TouchableOpacity>
      </>
     ))
  }
  </View>
      </View>
      </ScrollView>
      </>
  )
}

export default Categories

const styles = StyleSheet.create({})