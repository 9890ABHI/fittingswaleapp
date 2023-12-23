import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, FONTS } from '../../assets/Theme'
import { LoginAction, login, loginAction } from '../../Store/actions'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import { AuthHeader } from '../../componets/Header'

const Login = ({ navigation }) => {
  const auth = useSelector(state => state)
  // console.log('====================================');
  // console.log(user);
  // console.log('====================================');
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.auth.error);
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false)

  //   const handleLogin = async () => {
  //     const credentials = {
  //     username:   username,
  //     password:  password,
  //     };

  //     dispatch(LoginAction(setLoading,credentials ));  
  // console.log('====================================');
  // console.log(user);
  // console.log('====================================');


  const handleLogin = () => {
    const credentials = { username : username, password : password };
    console.log('====================================');
    console.log(credentials);
    console.log('====================================');
    dispatch(loginAction(credentials));
    // navigation.navigate('HomeScreen')
  };
  console.log('====================================');
  console.log(loading);
  console.log(auth.error);
  // console.log(user.u);
  // console.log('====================================');
  //   handleSubmit((data) => {
  //     dispatch(LoginAction(setLoading, data))
  // })()
  return (
    <>
    {/* {auth.error && <Text>{auth.error}</Text>} */}
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      // padding:10,
      // paddingTop:100,
      backgroundColor:"#fff",
      height:'100%'
    }}>
      <View style={{
        width:'90%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center",
        // backgroundColor:"#8ff",
        borderRadius:10,
        paddingVertical:10
      }}>
        <View style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: "center",
          // backgroundColor:"#8ff",
          borderRadius: 10,
          paddingVertical: 10
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 3

          }}>
            <Text style={{
              ...FONTS.h1,
              color: COLORS.black
            }}>
              Login
            </Text>
            <Text style={{
              ...FONTS.h1,
              color: COLORS.red
            }}>
              /
            </Text>
            <Text style={{
              ...FONTS.h1,
              color: COLORS.black
            }}>
              SignIn
            </Text>
          </View>
          <View style={{
            paddingVertical: 10,
            display: 'flex',
            gap: 5,
            width: '100%',
            paddingHorizontal: 10
          }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 3
              , backgroundColor: "#f0f0f0",
            }}>
              <Icon name="person" size={25} color={'#000'} />
              <TextInput
                placeholder="Enter your Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={{
                  ...FONTS.body3, width: '80%'

                }}
              />
              <View />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 3
                , backgroundColor: "#f0f0f0"
              }}>
              <Icon name="password" size={25} color={'#000'} />
              <TextInput
                placeholder="Enter your Password"
                secureTextEntry={!showPass ? true : false}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{
                  ...FONTS.body3,
                  width: '80%'
                }}
              />
              {
                !showPass ?
                  <Icons name="eye" size={25} color={'#000'} onPress={() => setShowPass(true)} /> :
                  <Icons name="eye-with-line" size={25} color={'#000'} onPress={() => setShowPass(false)} />
              }
            </View>
            <View style={{
              display: 'flex',
              paddingVertical: 20
            }}>

              <Button title="Login" onPress={handleLogin} color={COLORS.red} />
            </View>
            {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Text>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{
                color: COLORS.red
              }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({})