import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SettingHeadText } from '../../componets/HeadText'
import { COLORS, FONTS } from '../../assets/Theme'

const ProfileInfo = () => {
  const [edit , setEdit] = useState(false)
  return (
    <>
    <ScrollView>

    
    <View style={{
      paddingHorizontal:20
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:0
      }}>

      <SettingHeadText title={"Profile"} />
      <View>
          <TouchableOpacity onPress={() => setEdit(!edit)}>
          <Text 
          style={{
            ...FONTS.h2,
            color: !edit ? "#0080ff" : "#0080ff20"
          }}
          >
            Edit
          </Text>
        </TouchableOpacity>

      </View>
      </View>
      <View style={{
        padding:20
      }} >
        <Text style={{
          ...FONTS.h2
        }}>
          Full name
        </Text>
        <TextInput 
        textContentType='name'
        placeholder='Name'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
         <Text style={{
          ...FONTS.h2
        }}>
         Email
        </Text>
        <TextInput 
        textContentType='emailAddress'
        placeholder='Email'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        <Text style={{
          ...FONTS.h2
        }}>
         Phone
        </Text>
        <TextInput 
        textContentType='telephoneNumber'
        placeholder='Phone'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        <Text style={{
          ...FONTS.h2
        }}>
         GST Number
        </Text>
        <TextInput 
        textContentType='telephoneNumber'
        placeholder='GST Number'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        <Text style={{
          ...FONTS.h2
        }}>
         Pan Number
        </Text>
        <TextInput 
        textContentType='telephoneNumber'
        placeholder='Pan Number'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        <Text style={{
          ...FONTS.h2
        }}>
         Gst Certificate
        </Text>
        <TextInput 
        inlineImageLeft='upload'
        placeholder='GST Certificate'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        <Text style={{
          ...FONTS.h2
        }}>
         Pan Card
        </Text>
        <TextInput 
        textContentType='telephoneNumber'
        placeholder='Pan Card'
        style={{
          ...FONTS.body2,
          backgroundColor:COLORS.white,
          padding:10,
          borderRadius:10
        }}
        editable={edit ? true : false}
        />
        
      </View>
      <View style={{
        padding:20
      }}>
        <TouchableOpacity
        style={{
          paddingHorizontal:25,
          paddingVertical:10,
          borderRadius:10,
          backgroundColor:edit?  COLORS.Primary : COLORS.gray2,
          width:'60%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        disabled
        >
          <Text style={{
            ...FONTS.h2,
            color:COLORS.white
             
          }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
    </>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({})