import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../assets/Theme'
import { Images } from '../assets/Image'

const Slider = () => {

    const WIDTH = Dimensions.get('window').width
    const HEIGHT = Dimensions.get('window').height


    const data = [
        Images.Banner,
        Images.B1
    ]

    const [imgActive , setImgActive] = useState(0)
    onchange = (nativeEvent) => {
if (nativeEvent){
    const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width)
    if (slide != imgActive){
        setImgActive(slide)
    }
}
    }
  return (
   <>
   <ScrollView
    style={{ 
        // width:"100%",
        width:WIDTH,
        height:HEIGHT * 0.25
     }}
    pagingEnabled={true}
    horizontal={true}
    onScroll={({nativeEvent}) => onchange(nativeEvent)}
    showsHorizontalScrollIndicator={false}
    
    >
        {
            data.map((item , i) => <>
            <Image
            source={item}
            resizeMode='stretch'
            key={i}
            style={{
                
                width:WIDTH,
        height:HEIGHT * 0.25
            }}
            />
            </>)
        }
        

</ScrollView>
   </>
  )
}

export default Slider