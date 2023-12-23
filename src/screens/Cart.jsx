import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from '../assets/Theme';
import { CartCard } from '../componets/Card';
import { HeadText } from '../componets/HeadText';

const Cart = () => {
  const cart = useSelector((state) => state.auth.cart)
// console.log('cart details',cart)
const [subTotal , setSubTotal] = useState(0)
const [gstTotal , setGstTotal] = useState(0)
const [deliveryCharges , setDeliveryCharges] = useState(0)
const [total , setTotal] = useState(0)

useEffect(() => {
  const sub = cart.reduce((acc ,cur )=> {return acc + cur.price } , 0)
  setSubTotal(sub)
  const gst = cart.reduce((acc ,cur) => {return acc + cur?.gst} , 0)
  setGstTotal(gst)
  const delivery = cart.reduce((acc , cur) => {return acc + cur?.delivery} , 0)
  setDeliveryCharges(delivery)
  const tot = sub + gst + delivery
  setTotal(tot)
  console.log('====================================');
  console.log(tot);
  console.log('====================================');

}, [total])
// const sub = cart.reduce((acc ,cur )=> {return acc + cur.price } , 0)
//   setSubTotal(sub)
//   const gst = cart.reduce((acc ,cur) => {return acc + cur?.gst} , 0)
//   setGstTotal(gst)
//   const delivery = cart.reduce((acc , cur) => {return acc + cur?.delivery} , 0)
//   setDeliveryCharges(delivery)
//   const tot = subTotal + gstTotal + deliveryCharges
//   setTotal(tot)

console.log('====================================');
console.log(subTotal , gstTotal , deliveryCharges ,total);
console.log('====================================');


  return (
    <>
    <ScrollView>

    
    <View style={{
      display:'flex'
    }}>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
      }}>
        <Text
        style={{
          ...FONTS.h1,
          color:COLORS.black
        }}
        >My Cart<Text  style={{
          ...FONTS.h1,
          color:COLORS.red,
          
        }}>.</Text></Text>
      </View>
     
     <FlatList 
     data={cart}
     keyExtractor={i => i.id}
     renderItem={({item}) => 
       <>
       <View style={{
        paddingVertical:10
       }}>

     <CartCard item={item} />
       </View>
      </>
     }
     style={{
      display:'flex',
      flexDirection:'column',
      paddingHorizontal:10,
     }}
     
     />

     <View style={{
      padding:10
     }}>
      <View style={{
        display:'flex',
        flexDirection:'column',
        paddingVertical:10 ,
        backgroundColor:COLORS.white,
        borderRadius:10,
        paddingHorizontal:20
      }}>

      <HeadText title={'Cart Overview'} />
      <View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{
            ...FONTS.h2
          }}>
              Subtotal
          </Text>
          <Text style={{
            ...FONTS.h2,
            color:COLORS.black
          }}>
            ₹ {subTotal}
          </Text>
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{
            ...FONTS.h2
          }}>
              GST Taxes
          </Text>
          <Text style={{
            ...FONTS.h2,
            color:COLORS.black
          }}>
            ₹ {gstTotal}
          </Text>
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{
            ...FONTS.h2
          }}>
              Delivery Charges
          </Text>
          <Text style={{
            ...FONTS.h2,
            color:COLORS.black
          }}>
            ₹ {deliveryCharges}
          </Text>
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <Text style={{
            ...FONTS.h2
          }}>
              Total
          </Text>
          <Text style={{
            ...FONTS.h2,
            color:COLORS.black
          }}>
           ₹ {total}
          </Text>
        </View>
        <View style={{
          display:'flex',
          alignItems:'center',
          paddingVertical:20
        }}>
          <View style={{
            paddingVertical:15,
            paddingHorizontal:35,
            backgroundColor:COLORS.Primary
            ,borderRadius:10
          }}>
          <Text style={{
            ...FONTS.h3,
            color:COLORS.white
          }}>Checkout.</Text>
          </View>
        </View>
      </View>
      </View>
     </View>
    </View>
    </ScrollView>
     </>
  )
}

export default Cart

const styles = StyleSheet.create({})