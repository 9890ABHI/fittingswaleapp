import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS , FONTS } from '../assets/Theme'

import Icon from 'react-native-vector-icons/AntDesign';
import { Images } from '../assets/Image';

const Card = ({item , navigation}) => {
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
        borderColor: COLORS.gray,
        borderWidth: 2,
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
                      <View>
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

                          {discount} % off
                          </Text>
                              </View>
                      </View>
                    </View>
                            </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({})