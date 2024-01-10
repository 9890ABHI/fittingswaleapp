/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './src/screens/Cart';
import {ProfileStackScreen} from './src/screens/Profile';
import {Header} from './src/componets/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import DetailsCategory from './src/screens/DetailsCategory';
import SignUp from './src/screens/auth/SignUp';
import Login from './src/screens/auth/Login';
import {Provider} from 'react-redux';
import {Store} from './src/Store';
import {COLORS, FONTS} from './src/assets/Theme';
import OTP from './src/screens/auth/OTP';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const HomeScreen = () => {
    return (
      <>
        <Header />
        <Tab.Navigator
          sceneContainerStyle={{
            height: 200,
          }}
          screenOptions={{
            tabBarLabel: 'null',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
              tabBarActiveTintColor: COLORS.Primary,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Categories"
            component={Categories}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="category" color={color} size={30} />
              ),
              tabBarActiveTintColor: COLORS.Primary,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="cart" color={color} size={30} />
              ),
              tabBarActiveTintColor: COLORS.Primary,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={30}
                />
              ),
              tabBarActiveTintColor: COLORS.Primary,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </>
    );
  };

  return (
    <>
      {/* <StoreProvider store={store}> */}
      {/* <ScrollView> */}
      <Provider store={Store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="OTP">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="OTP" component={OTP} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen
                name="DetailsCategory"
                component={DetailsCategory}
              />
              {/* <Stack.Screen  name="ProfileInfo" component={ProfileInfo}/> */}
              {/* <Stack.Screen  name='Setting' component={Setting}/> */}
            </Stack.Navigator>
            {/* <Stack.Navigator> */}
            {/* </Stack.Navigator> */}
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
