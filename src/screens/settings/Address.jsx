import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SettingHeadText } from '../../componets/HeadText'
import { COLORS ,FONTS} from '../../assets/Theme'
import { AddressCard } from '../../componets/Card'

const Address = () => {
  const addres = [
    { name:'Akif khan' , phone : 'ad123456890' , address:
      {
        title:"111 , Lorem ipsm Doror Siw Amet Consectetur Adipsicing Elit , Quisquam,Volupatatibus",
        pincode:'420021',
        active:true
      }},
    { name:'Akif khan' , phone : 'ad123456890' , address:
    {
      title:"222 , Lorem ipsm Doror Siw Amet Consectetur Adipsicing Elit , Quisquam,Volupatatibus",
      pincode:'420021',
      active:false
    },
    },
    { name:'Akif khan' , phone : 'ad123456890' , address:
    {
      title:"333 , Lorem ipsm Doror Siw Amet Consectetur Adipsicing Elit , Quisquam,Volupatatibus",
      pincode:'420021',
      active:false
    },
    },
  ]

  const [addressModel , setAddressModel] = useState(false)
  return (
   <>
    <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          
            <SettingHeadText title={'Manage Address'} />
            
              <View>
                <TouchableOpacity 
                style={{
                  display: 'flex',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: COLORS.red,
                  borderRadius: 10,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  justifyContent:'center'
                }}
                onPress={() => setAddressModel(true)}
                >
                  <View>
                    <Text style={{
                        ...FONTS.h2,
                        color:COLORS.Primary
                    }}>
                      Add Address
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={{
                  display:"flex",
                  flexDirection:"column"
                }}>
                <FlatList 
     data={addres}
     keyExtractor={i => i.id}
     renderItem={({item}) => 
       <>
       <View style={{
        paddingVertical:10
       }}>

     <AddressCard item={item} />
       </View>
      </>
     }
     style={{
      display:'flex',
      flexDirection:'column',
      paddingHorizontal:10,
     }}
     
     />
                </View>

              </View>
              
              </View>
              </ScrollView>
              {
                addressModel && <>
                <View style={{
                  position:'absolute',
                  width:'100%',
                  height:"100%",
                  backgroundColor:COLORS.layout,
                  padding:10
                }}>
                  <View style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'}}>

                   <SettingHeadText title={'Add Address'} />
                   <TouchableOpacity onPress={() => setAddressModel(!addressModel)}>
                    <Text>
                      Close
                    </Text>
                   </TouchableOpacity>
                  </View>
                </View>
                </>
              }
   </>
  )
}

export default Address