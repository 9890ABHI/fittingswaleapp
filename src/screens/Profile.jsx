import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeadText } from '../componets/HeadText'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileInfo from './settings/Profile';
import { Setting } from './settings/Setting';
import { COLORS, FONTS } from '../assets/Theme';
import StarCoins from './settings/StarCoins';
import OrderHistory from './settings/OrderHistory';
import Address from './settings/Address';
import Coupons from './settings/Coupons';
import Rating from './settings/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../Store/actions';


const Stack = createNativeStackNavigator();
export const Profile = ({navigation}) => {
  const data = [
    {title:"Profile" , link:"ProfileInfo"},
    {title:"StarCoins" , link:"StarCoins"},
    {title:"Order History" , link:"OrderHistory"},
    {title:"Address" , link:"Address"},
    {title:"Coupons" , link:"Coupons"},
    {title:"Rating & Reviews" , link:"Rating"},
    {title:"Setting" , link:"Setting"},
  ]
const user = useSelector(state => state.auth.user)
console.log('====================================');
console.log(user);
console.log('====================================');
  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(LogoutAction())
  }
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
      <View style={{
        paddingHorizontal:20,
        display:'flex',
        gap:10
      }}>
        {
          data.map((item , i) => (
            <>
            <TouchableOpacity 
             key={i}
        onPress={() => navigation.navigate(item.link)}
        >

        <Text style={{
          ...FONTS.h1,
          color:COLORS.black
        }}>
         {item.title}
        </Text>

        </TouchableOpacity>
            </>
          ))
        }
        {
          !user ? <>
          <TouchableOpacity 
           
           onPress={()=> navigation.navigate('Login')}
           >
   
           <Text style={{
             ...FONTS.h1,
             color:COLORS.Primary
           }}>
           Login
           </Text>
           </TouchableOpacity></> : <>
          <TouchableOpacity 
           
           onPress={handleLogout}
           >
   
           <Text style={{
             ...FONTS.h1,
             color:COLORS.red
           }}>
           Logout
           </Text>
           </TouchableOpacity></>
        }
          

        
        
      </View>
      
    </View>

  )
}
export const ProfileStackScreen = () => (
  <>
  {/* <HeadText title={'more'} /> */}
  <Stack.Navigator>
    <Stack.Screen name="More" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="ProfileInfo" component={ProfileInfo} options={{ headerShown: false }} />
    <Stack.Screen name="StarCoins" component={StarCoins} options={{ headerShown: false }} />
    <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }} />
    <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
    <Stack.Screen name="Coupons" component={Coupons} options={{ headerShown: false }} />
    <Stack.Screen name="Rating" component={Rating} options={{ headerShown: false }} />
    <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
  </Stack.Navigator>
  </>
);

export 

const styles = StyleSheet.create({})