import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {HomeData} from '../assets/Constants/data';
import {COLORS, FONTS} from '../assets/Theme';
import Line from '../componets/Line';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {addToCart} from '../Store/actions';
import { AuthHeader } from '../componets/Header';

const Details = ({route, navigation}) => {
  const {id, item, category} = route.params;
  const data = HomeData.filter(item => item.id === id)[0];
  const discount = Math.round(
    ((data.ogPrice - data.price) / data.ogPrice) * 100,
  );

  const dispatch = useDispatch();
  const handleAddtocart = () => {
    dispatch(addToCart(item));
    Alert.alert('product added succefully');
  };
  const handleBuyNow = () => {};

  return (
    <>
    <AuthHeader />
      <ScrollView>
        <View>
          <View
            style={{
              padding: 10,
              // display:'flex',
              // flexDirection:"row",
              // justifyContent:'space-between',
              // alignItems:'center'
            }}>
            {/* <TouchableOpacity>
            <Icon name='left' size={30} color={COLORS.gray2} />
        </TouchableOpacity> */}
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.gray,
                textTransform: 'capitalize',
              }}>
              Home / {data.category} / {data.name} / {category}
            </Text>
          </View>
          <View>
            <Image
              source={{uri: data.img}}
              // width={}
              height={200}
              style={{
                objectFit: 'contain',
                borderRadius: 10,
              }}
            />
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  borderWidth: 0.5,
                  borderColor: COLORS.gray,
                }}
              />
            </View>
            <View
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  textTransform: 'capitalize',
                  color: COLORS.black,
                  paddingTop: 10,
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  ...FONTS.h2,
                  textTransform: 'capitalize',
                  color: COLORS.black,
                }}>
                {data.desc}..
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.green,
                  }}>
                  {discount}%
                </Text>
                <Text
                  style={{
                    ...FONTS.h1,
                    color: COLORS.black,
                  }}>
                  ₹{data.price}
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                  }}>
                  MRP.
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textDecorationLine: 'line-through',
                  }}>
                  ₹{data.ogPrice}
                </Text>
              </View>

              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                }}>
                Inclusive of all Taxes
              </Text>
              <Line />
            </View>
          </View>
        </View>
        <View>
          <Text>Quantity</Text>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          // justifyContent:'space-between'
          position: 'absolute',
          bottom: 0,
          // left:"0"
        }}>
        <View
          style={{
            width: '50%',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleAddtocart}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.black,
              }}>
              Add to cart
            </Text>
          </TouchableOpacity>
          {/* <Button
//   onPress={onPressLearnMore}
title="Add to cart"
color="#fff"
//   accessibilityLabel="Learn more about this purple button"

/> */}
        </View>
        <View
          style={{
            width: '50%',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.red,
            }}
            onPress={handleBuyNow}>
            <Text
              style={{
                ...FONTS.h2,
                color: '#fff',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
