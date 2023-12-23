/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import {Header} from './src/componets/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/screens/Details';
import DetailsCategory from './src/screens/DetailsCategory';

import SignUp from './src/screens/auth/SignUp';
import Login from './src/screens/auth/Login';
import { Provider } from 'react-redux';
import { Store } from './src/Store';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const user = useSelector((state : any) => state.auth.user);
  // console.log('====================================');
  // console.log('user '  , user);
  // console.log('====================================');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const HomeScreen = ( ) => {
    return(
      <>
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
      </>
    )
  }

  return (
    <>
      {/* <StoreProvider store={store}> */}
      {/* <ScrollView> */}
      <Provider store={Store}>
      <PaperProvider>
        
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{headerShown:false}}
          initialRouteName='HomeScreen'
          >

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
