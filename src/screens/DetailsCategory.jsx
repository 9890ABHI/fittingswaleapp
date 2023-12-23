import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {FONTS} from '../assets/Theme';
import { AuthHeader } from '../componets/Header';
=======
import { FONTS } from '../assets/Theme';
>>>>>>> e7d1c4e73c69138446ad3168ac825728bce79384

const DetailsCategory = ({ route, navigation }) => {
  const { id, item } = route.params;
  const data = item
  return (
    <>
<<<<<<< HEAD
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
=======
      <ScrollView>
        <View>
          <View
            style={{
              padding: 10,
            }}>
            <Text>Home \ Category \ {item.name}</Text>
            <Text>
              {/* {id}
>>>>>>> e7d1c4e73c69138446ad3168ac825728bce79384
        {item.name} */}
            </Text>
          </View>

          {item.subcategories.map(subCartegory => (
            <>
              <View>
                <Text
                  style={{
                    ...FONTS.h3,
                  }}>
                  {subCartegory.id} //
                  {subCartegory.name}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                  }}>
                  {subCartegory.Products?.map(product => (
                    <>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Details", { id: product.id, item: product, category: data.name })}
                      >

                        <View
                          style={{
                            width: 150,
                            height: 150,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text>{product.name}</Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  ))}
                </View>
              </View>
            </>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsCategory;

const styles = StyleSheet.create({});
