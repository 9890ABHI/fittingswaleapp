import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS,FONTS } from '../../assets/Theme';
import { useSelector } from 'react-redux';

const OTP = ({navigation}) => {
    const user = useSelector(state => state.auth)

    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
    const handleSubmit = () => {

        const otp = digit1 + digit2 + digit3 + digit4;
        // Implement your OTP validation logic here
        console.log('Entered OTP:', otp);
        navigation.navigate("HomeScreen")
      };
      const handleResend = ()=> {
        console.log('====================================');
        console.log('Resend OTP');
        console.log('====================================');
      }

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);
    const verifyBtn = useRef(null)
  
    const focusNextInput = (currentRef) => {
      switch (currentRef) {
        case digit1Ref:
          digit2Ref.current.focus();
          break;
        case digit2Ref:
          digit3Ref.current.focus();
          break;
        case digit3Ref:
          digit4Ref.current.focus();
          break;
          case digit4Ref:
            verifyBtn.current.focus();
            console.log('====================================');
            console.log(verifyBtn);
            console.log('====================================');
          // You can perform additional actions when the last digit is entered
          break;
        default:
          break;
      }
    };
  return (
  <>
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        height:'90%'
    }}>
        <View style={{
            display:'flex',
            backgroundColor:"#fff",
            justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingVertical:50,
        borderRadius:20
        }}>

        
        <View style={{
            display:'flex'
            ,alignItems:'center',
            paddingBottom:40
        }}>
            <Text style={{
                ...FONTS.h1,
                color:COLORS.black
            }}>
                OTP Verification
            </Text>
            <Text  style={{
                ...FONTS.body3,
                color:COLORS.black
            }}>
                Code just sent to 08****23
            </Text>
        </View>
      <View style={{
        // backgroundColor:"#f2ff33",
paddingHorizontal:20,
paddingVertical:20,
display:'flex',
flexDirection:'row',
justifyContent:"space-around",
// gap:10
width:"100%"
      }}>
        <View style={{
            padding:10 ,
            backgroundColor:"#F2f2f2",
            borderRadius:10
        }}>

        <TextInput 
        ref={digit1Ref}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        value={digit1}
        placeholder='_'
        onChangeText={(text) =>{
             setDigit1(text)
             if (text.length > 0) {
                focusNextInput(digit1Ref);
              }
            }}
        // onSubmitEditing={() => digit2.focus()}
        />
        </View>
        <View style={{
            padding:10 ,
            backgroundColor:"#F2f2f2",
            borderRadius:10
        }}>

        <TextInput 
        ref={digit2Ref}
        
       style={styles.input}
       maxLength={1}
       keyboardType="numeric"
       value={digit2}
       placeholder='_'
       onChangeText={(text) => {setDigit2(text)
        if (text.length === 1) {
            focusNextInput(digit2Ref);
          }
          if (text === "") {
            focusNextInput(digit1Ref);
          }
    }}
    //    onSubmitEditing={() => digit3.focus()}
        />
        </View>
        <View style={{
            padding:10 ,
            backgroundColor:"#F2f2f2",
            borderRadius:10
        }}>

        <TextInput 
        ref={digit3Ref}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        value={digit3}
        placeholder='_'
        onChangeText={(text) => {setDigit3(text)
            if (text.length === 1) {
                focusNextInput(digit3Ref);
              }}}
        onSubmitEditing={() => digit4.focus()}
        />
        </View>
        <View style={{
            padding:10 ,
            backgroundColor:"#F2f2f2",
            borderRadius:10
        }}>

        <TextInput 
        ref={digit4Ref}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        value={digit4}
        placeholder='_'
        onChangeText={(text) => {setDigit4(text)
            if (text.length === 1) {
                focusNextInput(digit4Ref);
              }
            
            }}
              
        // onSubmitEditing={() => digit.focus()}
        />
        </View>
      </View>
      <View style={{
            display:'flex'
            ,alignItems:'center',
            paddingBottom:30,
            flexDirection:'row'
        }}>
            <Text  style={{
                ...FONTS.body3,
                color:COLORS.black,
            }}>
                Didn't get the OTP ? 
            </Text>
            <TouchableOpacity style={{
                paddingLeft:10
            }} onPress={handleResend}>
                    <Text  style={{
                        ...FONTS.body3,
                        color:"blue",
                        textDecorationLine:'underline',
                    }}>
                    Resend
                </Text>
                    </TouchableOpacity> 
        </View>
      <View style={{
        paddingTop:20,
        // width:"100%",
        display:"flex"
        ,justifyContent:'center'
        ,alignItems:'center',
        backgroundColor:'transparent'
      }}>
        <TouchableOpacity ref={verifyBtn} 
         style={{
            backgroundColor: !digit4 ? COLORS.darkGray : COLORS.Primary ,
            paddingVertical:10,
            paddingHorizontal:25,
            borderRadius:100,
            // width:"55%",
            display:"flex"
            ,justifyContent:'center'
            ,alignItems:'center',

            
         }}
         onPress={handleSubmit}
        >
            <Text style={{
                color:COLORS.white,
                ...FONTS.h2
            }}>
                Verify
            </Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    //   marginTop: 20,
    },
    input: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 20,
     
    },
    
  });
  

export default OTP