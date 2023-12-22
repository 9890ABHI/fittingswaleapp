import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductListing = ({ route, navigation }) => {
  const { id, item } = route.params
  return (
    <View>
      <Text>ProductListing</Text>
    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({})