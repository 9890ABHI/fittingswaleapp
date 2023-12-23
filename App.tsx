/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
// import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import {Header} from './src/componets/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import DetailsCategory from './src/screens/DetailsCategory';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SignUp from './src/screens/auth/SignUp';
import Login from './src/screens/auth/Login';
import { Provider } from 'react-redux';
import { Store } from './src/Store';
import { COLORS,FONTS } from './src/assets/Theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function App() {


  const HomeScreen = () => {
    return (
      <>
<<<<<<< HEAD
      <Header />
      <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
            
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="Categories" component={Categories} 
             options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="category" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen name="Cart" component={Cart} 
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen name="Profile" component={Profile}
            
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}/>
          </Tab.Navigator>
=======
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let Icon;
              let iconColor;
              let icontype;
              if (route.name === 'Home') {
                Icon = focused ? MaterialCommunityIcons : MaterialCommunityIcons
                iconColor = focused ? COLORS.black : COLORS.darkGray
                icontype = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Categories') {
                Icon = focused ? MaterialIcons : MaterialIcons;
                iconColor = focused ? COLORS.black : COLORS.darkGray
                icontype = focused ? 'category' : 'category'
              }
              else if (route.name === 'Cart') {
                Icon = focused ? MaterialCommunityIcons : MaterialCommunityIcons;
                iconColor = focused ? COLORS.black : COLORS.darkGray
                icontype = focused ? 'cart' : 'cart-outline'
              }
              else if (route.name === 'Profile') {
                Icon = focused ? MaterialCommunityIcons : MaterialCommunityIcons
                iconColor = focused ? COLORS.black : COLORS.darkGray
                icontype = focused ? 'account' : 'account-outline'
              }
              return (
                <View
                  style={{
                    height: 45,
                    width: 45,
                    backgroundColor: focused ? COLORS.white : "transparent",
                    justifyContent: "space-evenly",
                    alignSelf: 'center',
                    borderRadius: 12,
                  }}>
                  <Icon style={{
                    alignSelf: 'center',
                  }} name={icontype} color={focused ? COLORS.Primary : COLORS.white} size={focused ? 30 : 28} />
                </View>
              );
            },
            tabBarLabelStyle: {
              ...FONTS.h4,
              fontWeight:"bold"
            },
            tabBarStyle: {
              height:hp('10%'),
              backgroundColor: COLORS.Primary,
            },
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.black,
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
>>>>>>> e7d1c4e73c69138446ad3168ac825728bce79384
      </>
    )
  }

  return (
    <>
      {/* <StoreProvider store={store}> */}
      {/* <ScrollView> */}
      <Provider store={Store}>
<<<<<<< HEAD
      <PaperProvider>
        
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{headerShown:false}}
          initialRouteName='HomeScreen'
          >
=======
        <PaperProvider>
          <Header />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName='HomeScreen'
            >
>>>>>>> e7d1c4e73c69138446ad3168ac825728bce79384

              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="DetailsCategory" component={DetailsCategory} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
      {/* </ScrollView> */}
      {/* </StoreProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
