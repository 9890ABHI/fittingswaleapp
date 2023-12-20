import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../assets/Theme'
import { Data } from '../assets/Constants/data'
import { Images } from '../assets/Image'

const Categories = ({navigation}) => {
  return (
    <>
    <ScrollView>

   
    <View>

    <View>
      <Text style={{
        ...FONTS.h3,
        color:COLORS.black
      }}>Shop By Categories</Text>
    </View>
<View style={{
  display:'flex',
  flexWrap:'wrap',
  flexDirection:'row',
  justifyContent:'center',
  gap:10
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
        height:150,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Image 
        source={item?.img}
        // source={{uri : item?.img}}
        height={100}
        style={{
          // borderRadius:100
        }}
        />

      <Text>
        {/* {item.id}{' '} */}
        {/* // {' '} */}
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