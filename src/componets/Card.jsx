import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS , FONTS } from '../assets/Theme'

import Icon from 'react-native-vector-icons/AntDesign';
import { Images } from '../assets/Image';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/actions';


export const Card = ({item , navigation}) => {
    const discount = Math.round(
        ((item.ogPrice - item.price) / item.ogPrice) * 100
      );
  return (
    <TouchableOpacity style={{
        width: '45%',
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: 'space-between',
        borderColor: COLORS.gray3,
        borderWidth: 3,
      }} onPress={() => navigation.navigate("Details", {id:item.id , item:item})}>
    <View
                      >
                      <Image
                        // source={require('../assets/Images/1.jpg')}
                        // source={item.img}
                        source={{uri: item.img}}
                        // width={'100'}
                        height={130}
                        style={{
                          borderRadius: 7,
                        }}
                      />
                      <View style={{width:'100%'}}>
                        <Text
                          style={{
                            ...FONTS.h3,
                            textTransform: 'capitalize',
                            color: COLORS.black,
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            ...FONTS.h3,
                            color: COLORS.black,
                        }}>
                          <Icon name="star" size={20} color={'#ffd700'} />{' '}
                          {item.rating}
                        </Text>
                        <Text
                          style={{
                              ...FONTS.h3,
                              color: COLORS.black,
                            }}>
                          ₹ {item.price} /-{' '}
                          <Text
                            style={{
                                ...FONTS.h4,
                              color: COLORS.gray,
                            }}>
                            incl. Tax
                          </Text>
                        </Text>
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center'
                        }}>

                        <Text
                          style={{
                              textDecorationLine: 'line-through',
                              ...FONTS.h5,
                            }}>
                         ₹ {item.ogPrice} 
                          
                        </Text>
                        <Text style={{
                            color:COLORS.green,
                            ...FONTS.h5,
                            paddingLeft:10
                        }}>

                          {discount}%off
                          </Text>
                              </View>
                      </View>
                    </View>
                            </TouchableOpacity>
  )
}


export const CartCard =({item , OrderHistory})=> {
  const dispatch = useDispatch()
  const handleDelete =() => {
    dispatch(removeFromCart(item.id))
  }
  return(
    <>
    <View style={{
      display:'flex',
      flexDirection:'row',
      gap:5,
     backgroundColor:'#fff',
     borderRadius:10,
    //  paddingHorizontal:10,
    //  paddingVertical:10,
     alignItems:"center",
    //  borderTopLeftRadius:10,
     overflow:'hidden',
    }}>
      <Image
      source={{uri: item.img}}
      style={{
        width:100,
        height:'100%',
        objectFit:'cover'
      }}
      />
      <View style={{
        display:'flex',
        paddingLeft:10
      }}>

      <Text style={{
        ...FONTS.h2,
        color:COLORS.black,
        textTransform:"capitalize"
      }}>
      {item.name}
      </Text>
      <Text style={{
        ...FONTS.h2,
        color:COLORS.black
      }}>
      {item.desc}
      </Text>
      <View style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        width:"80%"
      }}>
<View>

      <Text style={{
        ...FONTS.h2,
        color:COLORS.black
      }}>
        ₹ {item.price} <Text style={{
        ...FONTS.h4,
        color:COLORS.gray
      }}>excl.GST</Text>
      </Text>
      <Text style={{
        ...FONTS.h3,
        color:COLORS.black
      }}>
        ₹ {item.ogPrice} <Text style={{
          ...FONTS.h4,
          color:COLORS.gray
        }}>incl.GST</Text>
      </Text>
        </View>
        <View style={{
          display:OrderHistory?'none' :'flex'
        }}>
         <TouchableOpacity 
         onPress={handleDelete}
         >
          <Text style={{
            ...FONTS.h3,
            color:COLORS.red
          }}>
            Delete
          </Text>
         </TouchableOpacity>
        </View>
        </View>
        {
          OrderHistory && <>
          <View>
            <Text style={{
              ...FONTS.body3
            }}>
              Deliver date : 12/21/2023
            </Text>
          </View>
          </>
        }
      </View>



    </View>
    </>
  )
}

export const AddressCard =({item })=> {
  
return(
  <>
  <ScrollView>

  
  <View>
  <View style={{
      display:'flex',
      flexDirection:'row',
      gap:5,
     backgroundColor:'#fff',
     borderRadius:10,
    //  paddingHorizontal:10,
    //  paddingVertical:10,
     alignItems:"center",
    //  borderTopLeftRadius:10,
     overflow:'hidden',
    }}>
      <View style={{width:'15%'}}>
        <View style={{
width:'100%',
height:'100%',
backgroundColor:COLORS.Primary,
display:'flex',
justifyContent:'flex-start',
paddingTop:20,
alignItems:'center',
// paddingTop:10
        }}>

        <Text style={{
          transform:[{rotate: '90deg'}],
          ...FONTS.h2,
          color:COLORS.white,
          letterSpacing:2,
          width:'90%'
        }}>•••</Text>
        </View>
      </View>
      <View style={{
        display:'flex',
        paddingLeft:20
        ,paddingVertical:10
      }}>

      <Text style={{
        ...FONTS.h2,
        color:COLORS.black,
        textTransform:"capitalize"
      }}>
      {item.name}
      </Text>
      <Text style={{
        ...FONTS.h2,
        color:COLORS.black
      }}>
      {item.phone}
      </Text>
      <View style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        // width:"80%"
      }}>
<View style={{width:'100%'}}>

      <Text style={{
        ...FONTS.body3,
        color:COLORS.black,
        textAlign:'auto'
      }}>
        {item.address.title}
      </Text>
        </View>
        
        </View>
        <Text style={{
        ...FONTS.body3,
        color:COLORS.black
      }}>
      {item.address.pincode}.
      </Text>
        
      </View>



    </View>

  </View>
  </ScrollView>
  
  </>
)
}