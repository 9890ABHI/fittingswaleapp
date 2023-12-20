import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAction, signup } from '../../Store/actions';
import { COLORS , FONTS } from '../../assets/Theme';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Email from 'react-native-vector-icons/Fontisto';
import Phone from 'react-native-vector-icons/Feather';


const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading , setLoading] = useState(false)
  const [showPass , setShowPass] = useState(false)
  const [showConfirPass , setConfirShowPass] = useState(false)


  const handleSignup = () => {
    if (password !== confirmPassword) {
      // Passwords do not match, handle accordingly
      return;
    }

    const userData = {
      username,
      email,
      phone,
      password,
    };

    dispatch(RegisterAction(setLoading,userData));
  };
  console.log('====================================');
console.log(loading);

  return (
    <>
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:"#fff",
      height:"100%"
    }}>
      <View style={{
        width:'90%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center",
        // backgroundColor:"#f0f0f0",
        borderRadius:10,
        paddingVertical:10
      }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          gap:3

        }}>
          <Text style={{
            ...FONTS.h1,
            color:COLORS.black
          }}>
            
Register 
          </Text>
          <Text style={{
            ...FONTS.h1,
            color:COLORS.red
          }}>
            /
          </Text>
          <Text style={{
            ...FONTS.h1,
            color:COLORS.black
          }}>
           SignUp
          </Text>
        </View>
     <View style={{
          paddingVertical:10,
          display:'flex',
          gap:5,
          width:'100%',
          paddingHorizontal:10
        }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:3
        ,backgroundColor:"#f0f0f0",
        gap:5
      }}>
        <Icon name="person" size={25} color={'#000'}  />

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={{
          ...FONTS.body3,width:'80%'
          
        }}
        />
        </View>
        <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:3
        ,backgroundColor:"#f0f0f0",
        gap:5
      }}>
        <Email name="email" size={25} color={'#000'} />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{
          ...FONTS.body3,width:'80%'
          
        }}
      />
      </View>

      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:3
        ,backgroundColor:"#f0f0f0",
        gap:5
      }}>
        <Phone name="phone-call" size={25} color={'#000'} />

      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={{
          ...FONTS.body3,width:'80%'
          
        }}
      />
      </View>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:3
        ,backgroundColor:"#f0f0f0",
        gap:5
      }}>
        <Icon name="password" size={25} color={'#000'} />

      <TextInput
        placeholder="Password"
        sesecureTextEntry={!showPass ? true : false }
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          ...FONTS.body3,
          width:'80%'
        }}
        />
      {
        !showPass ? 
        <Icons name="eye" size={25} color={'#000'} onPress={() => setShowPass(true)} /> :
        <Icons name="eye-with-line" size={25} color={'#000'} onPress={() => setShowPass(false)} />
}
      </View>

      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:3
        ,backgroundColor:"#f0f0f0",
        gap:5
      }}>
        <Icon name="password" size={25} color={'#000'} />

      <TextInput
        placeholder="Confirm Password"
        
        sesecureTextEntry={!showConfirPass ? true : false }
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={{
          ...FONTS.body3,
          width:'80%'
        }}
      />
      {
 !showConfirPass ? 
  <Icons name="eye" size={25} color={'#000'} onPress={() => setConfirShowPass(true)} /> :
  <Icons name="eye-with-line" size={25} color={'#000'} onPress={() => setConfirShowPass(false)} />
}
      </View>
      <View style={{
        paddingVertical:10,
      }}>

      <Button title="Register" onPress={handleSignup} color={COLORS.red}  />
      </View>
      {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}
    </View>
          <View style={{
          display:'flex',
          flexDirection:'row'
        }}>
          <Text>
          Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{
              color:COLORS.red
            }}>
          Sign In
            </Text>
          </TouchableOpacity>
        </View>
          </View>
          </View>
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({})