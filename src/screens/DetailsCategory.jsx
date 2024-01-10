import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {COLORS, FONTS} from '../assets/Theme';
import {AuthHeader} from '../componets/Header';
import {Images} from '../assets/Image';
import { Card } from '../componets/Card';

const DetailsCategory = ({route, navigation}) => {
  const {id, item} = route.params;
  const data = item;
  return (
    <>
      <AuthHeader />
      <ScrollView>
        <View>
          <View
            style={{
              padding: 10,
            }}>
            <Text>Home \ Category \ {item.name}</Text>
            <Text>
              {/* {id}

        {item.name} */}
            </Text>
          </View>
<View style={{
  display:"flex",
  gap:40
}}>


          {item.subcategories.map((subCartegory , i) => (
            <>
              <View
                style={{
                  paddingHorizontal: 10,
                }}
                key={i}
                >
                  <View 
                  style={{
                    paddingHorizontal: 10,
                      }}>

                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                    textTransform:'capitalize'
                  }}>
                  {/* {subCartegory.id} // */}
                  {subCartegory.name}
                  <Text style={{
                    ...FONTS.h1,
                    color: COLORS.red,
                  }}>
                    .
                  </Text>
                </Text>
                    </View>
                <View
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 20,
                    paddingVertical:20,
                    
                  }}>
                  {subCartegory.Products?.map(product => (
                    <>
                    <Card item={product} Category navigation={navigation}/>
                      {/* <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Details', {
                            id: product.id,
                            item: product,
                            category: data.name,
                          })
                        }>
                        <View
                          style={{
                            width: 150,
                            // height:150,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            // source={item?.img}
                            source={Images.pic1}
                            // height={100}
                            // width={100}
                            resizeMode="cover"
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 200,
                              borderWidth: 2,
                              borderColor: COLORS.gray3,
                            }}
                          />
                          <Text
                            style={{
                              ...FONTS.h3,
                              textAlign: 'center',
                              color: COLORS.black,
                            }}>
                            {product.name}
                          </Text>
                        </View>
                      </TouchableOpacity> */}
                    </>
                  ))}
                </View>
              </View>
            </>
          ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsCategory;

const styles = StyleSheet.create({});
