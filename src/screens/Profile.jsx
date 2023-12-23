import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeadText } from '../componets/HeadText'

const Profile = ({navigation}) => {
  return (
    <View>
      <View
          style={{
            padding: 10,
            display:'flex',
            flexDirection:"row"
          }}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            >
          <Text> 
            Home  </Text>
            </TouchableOpacity>
            <Text>
            \ More
            </Text>
          
        </View>

      <HeadText title={'More'} />
      <View>
        <Text>
          Profile
        </Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})